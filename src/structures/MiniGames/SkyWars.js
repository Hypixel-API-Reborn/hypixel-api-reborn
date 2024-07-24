const { removeSnakeCaseString } = require('../../utils/removeSnakeCase');
const { SkyWarsPrestigeIcons } = require('../../utils/Constants');
const divide = require('../../utils/divide');

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

class SkywarsMode {
  /**
   * @param {object} data Skywars data
   * @param {string} gamemode Gamemode Name
   */
  constructor(data, gamemode) {
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`kills_${gamemode}`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`deaths_${gamemode}`] || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(data.kills, data.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins_${gamemode}`] || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data[`losses_${gamemode}`] || 0;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(data.wins, data.losses);
  }
}
class SkywarsModeStats {
  /**
   * @param {object} data Skywars data
   * @param {string} gamemode Gamemode Name
   */
  constructor(data, gamemode) {
    /**
     * Active Kit
     * @type {string}
     */
    this.activeKit = data[`activeKit_${gamemode.toUpperCase()}`] || '';
    /**
     * Kill Streak
     * @type {number}
     */
    this.killstreak = data[`killstreak_${gamemode}`] || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`kills_${gamemode}`] || 0;
    /**
     * Void Kills
     * @type {number}
     */
    this.voidKills = data[`void_kills_${gamemode}`] || 0;
    /**
     * Melee Kills
     * @type {number}
     */
    this.meleeKills = data[`melee_kills_${gamemode}`] || 0;
    /**
     * Bow Kills
     * @type {number}
     */
    this.bowKills = data[`bow_kills_${gamemode}`] || 0;
    /**
     * Mob Kills
     * @type {number}
     */
    this.mobKills = data[`mob_kills_${gamemode}`] || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data[`assists_${gamemode}`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`deaths_${gamemode}`] || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(data.kills, data.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins_${gamemode}`] || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data[`losses_${gamemode}`] || 0;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(data.wins, data.losses);
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data[`games_${gamemode}`] || 0;
    /**
     * Survived Players
     * @type {number}
     */
    this.survivedPlayers = data[`survived_players_${gamemode}`] || 0;
    /**
     * Chests Opened
     * @type {number}
     */
    this.chestsOpened = data[`chests_opened_${gamemode}`] || 0;
    /**
     * Time Played (In Seconds)
     * @type {number}
     */
    this.timePlayed = data[`time_played_${gamemode}`] || 0;
    /**
     * Shard
     * @type {number}
     */
    this.shard = data[`shard_${gamemode}`] || 0;
    /**
     * Longest Bow Shot
     * @type {number}
     */
    this.longestBowShot = data[`longest_bow_shot_${gamemode}`] || 0;
    /**
     * Arrows Shot
     * @type {number}
     */
    this.arrowsShot = data[`arrows_shot_${gamemode}`] || 0;
    /**
     * Arrows Hit
     * @type {number}
     */
    this.arrowsHit = data[`arrows_hit_${gamemode}`] || 0;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsShot);
    /**
     * Fastest Win (In Seconds)
     * @type {number}
     */
    this.fastestWin = data[`fastest_win_${gamemode}`] || 0;
    /**
     * Heads
     * @type {number}
     */
    this.heads = data[`heads_${gamemode}`] || 0;
  }
}

/**
 * Parses SkyWars Kit
 */
class SkywarsKit {
  /**
   * Constructor
   * @param {string} kit Kit
w   */
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
w   */
  constructor(kits) {
    this.kits = kits.map((kit) => new SkywarsKit(kit)).filter((kit) => kit.isKit);
  }
  /**
   * Get kit by type/gameMode
   * @param {KitGameModes} [gameMode] Kits in said game mode
   * @param {KitType} [type] Kits corresponding to this type
   * @returns {SkywarsKit[]}
w   */
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
w   */
  constructor(data) {
    // TODO : a lot more
    /**
     * Raw Packages, as received from the API
     * @type {string[]}
     */
    this.rawPackages = data;
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
w   */
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
 * SkyWars class
 */
class SkyWars {
  /**
   * @param {object} data SkyWars data
w   */
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
     * Killstreak
     * @type {number}
     */
    this.killstreak = data.killstreak || 0;
    /**
     * kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Void Kills
     * @type {number}
     */
    this.voidKills = data.void_kills || 0;
    /**
     * Melee Kills
     * @type {number}
     */
    this.meleeKills = data.melee_kills || 0;
    /**
     * Bow Kills
     * @type {number}
     */
    this.bowKills = data.bow_kills || 0;
    /**
     * Mob Kills
     * @type {number}
     */
    this.mobKills = data.mob_kills || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data.assists || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths || 0;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(data.kills, data.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data.losses || 0;
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(data.wins, data.losses);
    /**
     * Games Played
     * @type {number}
     */
    this.gamesPlayed = data.games || 0;
    /**
     * Survived Players
     * @type {number}
     */
    this.survivedPlayers = data.survived_players || 0;
    /**
     * Chests Opened
     * @type {number}
     */
    this.chestsOpened = data.chests_opened || 0;
    /**
     * Time Played (In Seconds)
     * @type {number}
     */
    this.timePlayed = data.time_played || 0;
    /**
     * Shard
     * @type {number}
     */
    this.shard = data.shard || 0;
    /**
     * Longest Bow Shot
     * @type {number}
     */
    this.longestBowShot = data.longest_bow_shot || 0;
    /**
     * Arrows Shot
     * @type {number}
     */
    this.arrowsShot = data.arrows_shot || 0;
    /**
     * Arrows Hit
     * @type {number}
     */
    this.arrowsHit = data.arrows_hit || 0;
    /**
     * Bow Accuracy
     * @type {number}
     */
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsShot);
    /**
     * Fastest Win
     * @type {number}
     */
    this.fastestWin = data.fastest_win || 0;
    /**
     * Heads
     * @type {number}
     */
    this.heads = data.heads || 0;
    /**
     * Blocks Placed
     * @type {number}
     */
    this.blocksPlaced = data.blocks_placed || 0;
    /**
     * Blocks Broken
     * @type {number}
     */
    this.blocksBroken = data.blocks_broken || 0;
    /**
     * Egg Thrown
     * @type {number}
     */
    this.eggThrown = data.egg_thrown || 0;
    /**
     * Enderpearls Thrown
     * @type {number}
     */
    this.enderpearlsThrown = data.enderpearls_thrown || 0;

    /**
     * Solo Skywars Stats
     * @type {SkywarsModeStats}
     */
    this.solo = new SkywarsModeStats(data, 'solo');
    /**
     * Solo Normal Stats
     * @type {SkywarsMode}
     */
    this.soloNormal = new SkywarsMode(data, 'solo_normal');
    /**
     * Solo Insane Stats
     * @type {SkywarsMode}
     */
    this.soloInsane = new SkywarsMode(data, 'solo_insane');
    /**
     * Team Skywars Stats
     * @type {SkywarsModeStats}
     */
    this.team = new SkywarsModeStats(data, 'team');
    /**
     * Team Normal Stats
     * @type {SkywarsMode}
     */
    this.teamNormal = new SkywarsMode(data, 'team_normal');
    /**
     * Team Insane Stats
     * @type {SkywarsMode}
     */
    this.teamInsane = new SkywarsMode(data, 'team_insane');
    /**
     * Mega Skywars Stats
     * @type {SkywarsMode}
     */
    this.mega = new SkywarsMode(data, 'mega');
    /**
     * Mega Doubles Skywars Stats
     * @type {SkywarsMode}
     */
    this.megaDoubles = new SkywarsMode(data, 'mega_doubles');
    /**
     * Skywars Laboratory Stats
     * @type {SkywarsMode}
     */
    this.lab = new SkywarsMode(data, 'lab');
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

module.exports = SkyWars;
