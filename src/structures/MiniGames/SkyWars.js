const { removeSnakeCaseString } = require('../../utils/removeSnakeCase');
const { SkyWarsPrestigeIcons } = require('../../utils/Constants');
const divide = require('../../utils/divide');

// eslint-disable-next-line jsdoc/require-jsdoc
function generateStatsForMode(data, mode) {
  return {
    kills: data[`kills_${mode}`] || 0,
    deaths: data[`deaths_${mode}`] || 0,
    wins: data[`wins_${mode}`] || 0,
    losses: data[`losses_${mode}`] || 0,
    KDRatio: divide(data[`kills_${mode}`], data[`deaths_${mode}`]),
    WLRatio: divide(data[`wins_${mode}`], data[`losses_${mode}`])
  };
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getSkyWarsPrestige(level) {
  if (60 <= level) return 'Mythic';
  return (
    ['Iron', 'Iron', 'Gold', 'Diamond', 'Emerald', 'Sapphire', 'Ruby', 'Crystal', 'Opal', 'Amethyst', 'Rainbow'][
      Math.floor(level / 5)
    ] || 'Iron'
  );
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getSkyWarsLevel(xp) {
  const totalXp = [0, 2, 7, 15, 25, 50, 100, 200, 350, 600, 1000, 1500];
  if (15000 <= xp) return Math.floor((xp - 15000) / 10000 + 12);
  const level = totalXp.findIndex((x) => 0 < x * 10 - xp);
  return level;
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getSkyWarsLevelProgress(xp) {
  const totalXp = [0, 2, 7, 15, 25, 50, 100, 200, 350, 600, 1000, 1500];
  const xpToNextLvl = [0, 2, 5, 8, 10, 25, 50, 100, 150, 250, 400, 500];
  let percent;
  let xpToNextLevel;
  let currentLevelXp = xp;
  if (15000 <= xp) {
    currentLevelXp -= 15000;
    if (0 === currentLevelXp) return { currentLevelXp: 0, xpToNextLevel: 10000, percent: 0, xpNextLevel: 10000 };
    if (10000 < currentLevelXp) {
      do {
        currentLevelXp -= 10000;
      } while (10000 <= currentLevelXp);
    }
    xpToNextLevel = 10000 - currentLevelXp;
    percent = Math.round(currentLevelXp) / 100;
    const percentRemaining = Math.round((100 - percent) * 100) / 100;
    return {
      currentLevelXp,
      xpToNextLevel,
      percent,
      xpNextLevel: 10000,
      percentRemaining
    };
  }
  const totalXptoNextLevel = xpToNextLvl[totalXp.findIndex((x) => 0 < x * 10 - xp)] * 10;
  for (let i = 0; i < xpToNextLvl.length; i++) {
    if (0 > currentLevelXp - xpToNextLvl[i] * 10) break;
    currentLevelXp -= xpToNextLvl[i] * 10;
  }
  xpToNextLevel = totalXptoNextLevel - currentLevelXp;
  percent = Math.round((currentLevelXp / totalXptoNextLevel) * 10000) / 100;
  return {
    currentLevelXp,
    xpToNextLevel,
    percent,
    xpNextLevel: totalXptoNextLevel
  };
}

/**
 * Parses SkyWars Kit
 */
class SkywarsKit {
  /**
   * Constructor
   * @param {string} kit Kit
   * @example
   */
  constructor(kit) {
    /**
     * Kit data
     * @private
     * @type {string[] | null}
     */
    this.kitData = kit.match(/^kit_([a-z]+)_([a-z]+)_([a-z]+)$/);
    /**
     * Is this a kit
     * @type {boolean}
     */
    this.isKit = Boolean(this.kitData);
    if (!this.kitData) return;
    /**
     * Game mode the kit is for
     * @type {KitGameModes}
     */
    this.gameMode = this.kitData[2];
    /**
     * Kit type
     * @type {KitType}
     */
    this.kitType = this.kitData[1];
    /**
     * Kit name in camelCase
     * @type {string}
     */
    this.kitName = removeSnakeCaseString(this.kitData[3]);
  }
}

/**
 * Parses SkyWars Kits
 */
class SkywarsKits {
  /**
   * Constructor
   * @param {SkywarsKit[]} kits Potential Kits
   * @example
   */
  constructor(kits) {
    this.kits = kits.map((kit) => new SkywarsKit(kit)).filter((kit) => kit.isKit);
  }
  /**
   * Get kit by type/gameMode
   * @param {KitGameModes} [gameMode] Kits in said game mode
   * @param {KitType} [type] Kits corresponding to this type
   * @returns {SkywarsKit[]}
   * @example
   */
  get(gameMode = '', type = '') {
    return this.kits.filter((kit) => kit.gameMode.startsWith(gameMode) && kit.kitType.startsWith(type));
  }
}
/**
 * Skywars Packages - parses every package player has
 */
class SkywarsPackages {
  /**
   * Constructor
   * @param {string[]} data data from API
   * @example
   */
  constructor(data) {
    // TODO : a lot more
    /**
     * Raw Packages, as received from the API
     * @type {string[]}
     */
    this.rawPackages = Array.from(data);
    /**
     * Cages
     * @type {string[]}
     */
    this.cages = this.parseCages();
    /**
     * Kits
     * @type {SkywarsKits}
     */
    this.kits = new SkywarsKits(data);
    /**
     * Achievements included in packages, under the form of name0
     * @type {string[]}
     */
    this.achievements = this.rawPackages
      .map((pkg) => pkg.match(/^([A-Za-z]+)_?achievement([0-9]?)$/))
      .filter((x) => x)
      .map((x) => x.slice(1).join(''));
  }
  /**
   * Parses cages
   * @returns {string[]}
   * @example
   */
  parseCages() {
    return this.rawPackages
      .map((pkg) => pkg.match(/^cage_([A-Za-z]+)-cage$/))
      .filter((x) => x)
      .map((x) => x[1].replace(/-[a-z]/g, (x) => x[1].toUpperCase()));
  }
}

/**
 * @typedef {string} KitType
 * * basic
 * * supporting
 * * mining
 * * defending
 * * attacking
 * * advanced
 * * enderchest
 */
/**
 * @typedef {string} KitGameModes
 * * solo
 * * team
 */

/**
 * @typedef {Object} SkyWarsShardsInMode
 * @property {number} solo Solo shards
 * @property {number} team Team shards
 * @property {number} mega Mega shards
 * @property {number} lab Lab shards
 */

/**
 * SkyWars class
 */
class SkyWars {
  /**
   * @param {object} data SkyWars data
   * @example
   */
  constructor(data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Souls
     * @type {number}
     */
    this.souls = data.souls || 0;
    /**
     * Tokens
     * @type {number}
     */
    this.tokens = data.cosmetic_tokens || 0;
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.win_streak || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data.losses || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Heads
     * @type {number}
     */
    this.heads = data.heads || 0;
    /**
     * Experience
     * @type {number}
     */
    this.experience = data.skywars_experience || 0;
    /**
     * Level
     * @type {number}
     */
    this.level = getSkyWarsLevel(data.skywars_experience);
    /**
     * Level Progress
     * @type {LevelProgress}
     */
    this.levelProgress = getSkyWarsLevelProgress(data.skywars_experience);
    /**
     * Formatted Level
     * @type {string}
     */
    this.levelFormatted = data.levelFormatted
      ? data.levelFormatted
          .replace(/§l/gm, '**')
          .replace(/§([a-f]|[1-9])/gm, '')
          .replace(/§r/gm, '')
      : null;
    /**
     * Prestige
     * @type {SkyWarsPrestige}
     */
    this.prestige = getSkyWarsPrestige(this.level);
    /**
     * Prestige Icons
     * @type {SkyWarsPrestigeIcons}
     */
    this.prestigeIcon = data.selected_prestige_icon ? SkyWarsPrestigeIcons[data.selected_prestige_icon] : null;
    /**
     * Games Played ( Total )
     * @type {number}
     */
    this.playedGames =
      (data.games_solo || 0) +
      (data.games_team || 0) +
      (data.games_mega || 0) +
      (data.games_mega_doubles || 0) +
      (data.games_lab || 0);
    /**
     * Global Kill Death Ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Global Win Loss Ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Opals
     * @type {number}
     */
    this.opals = data.opals || 0;
    /**
     * Avarice
     * @type {number}
     */
    this.avarice = data.avarice || 0;
    /**
     * Tenacity
     * @type {number}
     */
    this.tenacity = data.tenacity || 0;
    /**
     * Shards
     * @type {number}
     */
    this.shards = data.shard || 0;
    /**
     * Angel Of Death Level
     * @type {number}
     */
    this.angelOfDeathLevel = data.angel_of_death_level || 0;
    /**
     * Shard By Mode
     * @type {SkyWarsShardsInMode}
     */
    this.shardsInMode = {
      solo: data.shard_solo || 0,
      team: data.shard_team || 0,
      mega: (data.shard_mega || 0) + (data.shard_mega_doubles || 0),
      lab: data.shard_lab || 0
    };
    /**
     * Solo Skywars Stats
     * @type {SkyWarsModeExtendedStats}
     */
    this.solo = {
      overall: {
        winstreak: data.winstreak_solo || 0,
        playedGames: data.games_solo || 0,
        kills: data.kills_solo || 0,
        wins: data.wins_solo || 0,
        losses: data.losses_solo || 0,
        deaths: data.deaths_solo || 0,
        KDRatio: divide(data.kills_solo, data.deaths_solo),
        WLRatio: divide(data.wins_solo, data.losses_solo)
      },
      normal: generateStatsForMode(data, 'solo_normal'),
      insane: generateStatsForMode(data, 'solo_insane')
    };
    /**
     * Team Skywars Stats
     * @type {SkyWarsModeExtendedStats}
     */
    this.team = {
      overall: {
        winstreak: data.winstreak_team || 0,
        playedGames: data.games_team || 0,
        kills: data.kills_team || 0,
        wins: data.wins_team || 0,
        losses: data.losses_team || 0,
        deaths: data.deaths_team || 0,
        KDRatio: divide(data.kills_team, data.deaths_team),
        WLRatio: divide(data.wins_team, data.losses_team)
      },
      normal: generateStatsForMode(data, 'team_normal'),
      insane: generateStatsForMode(data, 'team_insane')
    };
    /**
     * Mega Skywars Stats
     * @type {SkyWarsMegaStats}
     */
    this.mega = {
      overall: {
        winstreak: data.winstreak_mega || 0,
        playedGames: (data.games_mega || 0) + (data.games_mega_doubles || 0),
        kills: (data.kills_mega || 0) + (data.kills_mega_doubles || 0),
        wins: (data.wins_mega || 0) + (data.wins_mega_doubles || 0),
        losses: (data.losses_mega || 0) + (data.losses_mega_doubles || 0),
        deaths: (data.deaths_mega || 0) + (data.deaths_mega_doubles || 0),
        KDRatio: divide(
          (data.kills_mega || 0) + (data.kills_mega_doubles || 0),
          (data.deaths_mega || 0) + (data.deaths_mega_doubles || 0)
        ),
        WLRatio: divide(
          (data.wins_mega || 0) + (data.wins_mega_doubles || 0),
          (data.losses_mega || 0) + (data.losses_mega_doubles || 0)
        )
      },
      solo: {
        playedGames: data.games_mega || 0,
        kills: data.kills_mega || 0,
        wins: data.wins_mega || 0,
        losses: data.losses_mega || 0,
        deaths: data.deaths_mega || 0,
        KDRatio: divide(data.kills_mega || 0, data.deaths_mega || 0),
        WLRatio: divide(data.wins_mega || 0, data.losses_mega || 0)
      },
      doubles: {
        playedGames: data.games_mega_doubles || 0,
        kills: data.kills_mega_doubles || 0,
        wins: data.wins_mega_doubles || 0,
        losses: data.losses_mega_doubles || 0,
        deaths: data.deaths_mega_doubles || 0,
        KDRatio: divide(data.kills_mega_doubles || 0, data.deaths_mega_doubles || 0),
        WLRatio: divide(data.wins_mega_doubles || 0, data.losses_mega_doubles || 0)
      }
    };
    /**
     * Skywars Laboratory Stats
     * @type {SkyWarsTotalModeStats}
     */
    this.lab = {
      winstreak: data.winstreak_lab || 0,
      playedGames: data.games_lab || 0,
      kills: data.kills_lab || 0,
      wins: data.wins_lab || 0,
      losses: data.losses_lab || 0,
      deaths: data.deaths_lab || 0,
      KDRatio: divide(data.kills_lab, data.deaths_lab),
      WLRatio: divide(data.wins_lab, data.losses_lab)
    };
    /**
     * Player Packages, can range from kits to achievement
     * @type {SkywarsPackages}
     */
    this.packages = new SkywarsPackages(data.packages || []);
  }
}
/**
 * @typedef {string} SkyWarsPrestige
 * * `Iron`
 * * `Iron`
 * * `Gold`
 * * `Diamond`
 * * `Emerald`
 * * `Sapphire`
 * * `Ruby`
 * * `Crystal`
 * * `Opal`
 * * `Amethyst`
 * * `Rainbow`
 * * `Mythic`
 */
/**
 * @typedef {string} SkyWarsPrestigeIcons
 * * '⋆'
 * * '★'
 * * '☆'
 * * '⁕',
 * * '✶',
 * * '✳',
 * * '✴',
 * * '✷',
 * * '❋',
 * * '✼',
 * * '❂',
 * * '❁',
 * * '☬',
 * * '✙',
 * * '❤️',
 * * '☠',
 * * '✦',
 * * '✌',
 * * '❦',
 * * '✵',
 * * '❣',
 * * '☯',
 * * '✺',
 * * 'ಠ_ಠ',
 * * '⚔'
 */
/**
 * @typedef {Object} SkyWarsModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} KDRatio Kill Death ratio
 * @property {number} WLRatio Win Loss ratio
 */
/**
 * @typedef {Object} SkyWarsTotalModeStats
 * @property {number} winstreak Winstreak
 * @property {number} playedGames Played games
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} KDRatio Kill Death ratio
 * @property {number} WLRatio Win Loss ratio
 */
/**
 * @typedef {string} PseudoDate String date, in the format of MM-YY ( YY is 20YY )
 * @example `10-19` would be October 2019.
 */
/**
 * @typedef {Object} SkyWarsModeExtendedStats
 * @property {SkyWarsTotalModeStats} overall Overall Stats
 * @property {SkyWarsModeStats} normal Normal Mode Stats
 * @property {SkyWarsModeStats} insane Insane Mode Stats
 */
/**
 * @typedef {Object} SkyWarsMegaStats
 * @property {SkyWarsTotalModeStats} overall Overall Mega Stats
 * @property {SkyWarsModeStats} solo Mega Solo Stats
 * @property {SkyWarsModeStats} doubles Mega Doubles Stats
 */
module.exports = SkyWars;
