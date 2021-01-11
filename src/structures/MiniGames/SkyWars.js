const { SkyWarsPrestigeIcons } = require('../../utils/Constants');
const divide = require('../../utils/divide');
const generateStatsForMode = (data, mode) => {
  return {
    kills: data[`kills_${mode}`] || 0,
    deaths: data[`deaths_${mode}`] || 0,
    wins: data[`wins_${mode}`] || 0,
    losses: data[`losses_${mode}`] || 0,
    KDRatio: divide(data[`kills_${mode}`], data[`deaths_${mode}`]),
    WLRatio: divide(data[`wins_${mode}`], data[`losses_${mode}`])
  };
};
/**
* SkyWars class
* @param {object} data SkyWars data
*/
class SkyWars {
  constructor (data) {
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
     * Loot Chests
     * @type {number}
     */
    this.lootChests = data.skywars_chests || 0;
    /**
     * Opened Loot Chests
     * @type {number}
     */
    this.openedLootChests = data.SkyWars_openedChests || 0;
    /**
     * Heads
     * @type {number}
     */
    this.heads = data.heads || 0;
    /**
     * Level
     * @type {number}
     */
    this.level = getSkyWarsLevel(data.skywars_experience);
    /**
     * Formatted Level
     * @type {string}
     */
    this.levelFormatted = data.levelFormatted ? (data.levelFormatted.replace(/§l/gm, '**').replace(/§([a-f]|[1-9])/gm, '').replace(/§r/gm, '')) : null;
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
    this.playedGames = (data.games_solo || 0) + (data.games_team || 0) + (data.games_ranked || 0) + (data.games_mega || 0) + (data.games_mega_doubles || 0) + (data.games_lab || 0);
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
    this.shards = data.shards || 0;
    /**
     * Shard By Mode
     * @type {SkyWarsShardsInMode}
     */
    this.shardsInMode = {
      solo: data.shard_solo || 0,
      team: data.shard_team || 0,
      ranked: data.shard_ranked || 0,
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
     * Ranked Skywars Stats
     * @type {SkyWarsTotalModeStats}
     */
    this.ranked = {
      winstreak: data.winstreak_ranked,
      playedGames: data.games_ranked || 0,
      kills: data.kills_ranked || 0,
      wins: data.wins_ranked || 0,
      losses: data.losses_ranked || 0,
      deaths: data.deaths_ranked || 0,
      KDRatio: divide(data.kills_ranked, data.deaths_ranked),
      WLRatio: divide(data.wins_ranked, data.losses_ranked)
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
        KDRatio: divide(((data.kills_mega || 0) + (data.kills_mega_doubles || 0)), ((data.deaths_mega || 0) + (data.deaths_mega_doubles || 0))),
        WLRatio: divide(((data.wins_mega || 0) + (data.wins_mega_doubles || 0)), ((data.losses_mega || 0) + (data.losses_mega_doubles || 0)))
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
/**
 *
 * @param {number} level
 *
 * @returns {string}
 */
function getSkyWarsPrestige (level) {
  return ['Iron', 'Iron', 'Gold', 'Diamond', 'Emerald', 'Sapphire', 'Ruby', 'Crystal', 'Opal', 'Amethyst', 'Rainbow'][Math.floor(level / 5)];
}
/**
 *
 * @param {number} xp
 *
 * @returns {number}
 */
function getSkyWarsLevel (xp) {
  return Math.floor((function () {
    if (xp < 20) return 1;
    const totalXp = [20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000];
    if (xp >= 15000) {
      return (xp - 15000) / 10000 + 12;
    } else {
      let c = 0;
      while (c < totalXp.length) {
        if (xp - totalXp[c] >= 0) {
          c++;
        } else {
          return c + 1 + (xp - totalXp[c - 1]) / (totalXp[c] - totalXp[c - 1]);
        }
      }
    }
  })(xp));
}
