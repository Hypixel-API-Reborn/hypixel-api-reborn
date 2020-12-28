const divide = require('../../utils/divide');
function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const numerals = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V'
};
function cosmeticTitlePrestige (data) {
  if (data.active_cosmetictitle) {
    const prestige = data[`${data.active_cosmetictitle.split('_').reverse().join('_')}_title_prestige`] || 1;
    return `${capitalize(data.active_cosmetictitle.split('_')[1])} ${capitalize(data.active_cosmetictitle.split('_')[0])} ${numerals[prestige]}`;
  } else {
    return null;
  }
}
/**
 * Duels class
 * @param {object} data Duels data
 */
class Duels {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Cosmetic title
     * @type {string|null}
     */
    this.title = cosmeticTitlePrestige(data);
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths || 0;
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
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
     * Win Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games_played_duels || 0;
    /**
     * UHC duels stats
     * @type {DuelsModeStats}
     */
    this.uhc = {
      v1: {
        kills: data.uhc_duel_kills || 0,
        deaths: data.uhc_duel_deaths || 0,
        wins: data.uhc_duel_wins || 0,
        losses: data.uhc_duel_losses || 0
      },
      v2: {
        kills: data.uhc_doubles_kills || 0,
        deaths: data.uhc_doubles_deaths || 0,
        wins: data.uhc_doubles_wins || 0,
        losses: data.uhc_doubles_losses || 0
      },
      v4: {
        kills: data.uhc_four_kills || 0,
        deaths: data.uhc_four_deaths || 0,
        wins: data.uhc_four_wins || 0,
        losses: data.uhc_four_losses || 0
      }
    };
    /**
     * OP duels stats
     * @type {DuelsOP}
     */
    this.op = {
      v1: {
        kills: data.op_duel_kills || 0,
        deaths: data.op_duel_deaths || 0,
        wins: data.op_duel_wins || 0,
        losses: data.op_duel_losses || 0
      },
      v2: {
        kills: data.op_doubles_kills || 0,
        deaths: data.op_doubles_deaths || 0,
        wins: data.op_doubles_wins || 0,
        losses: data.op_doubles_losses || 0
      }
    };
    /**
     * SkyWars duels stats
     * @type {DuelsSkyWars}
     */
    this.skywars = {
      v1: {
        kills: data.sw_duel_kills || 0,
        deaths: data.sw_duel_deaths || 0,
        wins: data.sw_duel_wins || 0,
        losses: data.sw_duel_losses || 0
      },
      v2: {
        kills: data.sw_doubles_kills || 0,
        deaths: data.sw_doubles_deaths || 0,
        wins: data.sw_doubles_wins || 0,
        losses: data.sw_doubles_losses || 0
      }
    };
    /**
     * Sumo duels stats
     * @type {DuelsModeStats}
     */
    this.sumo = {
      kills: data.sumo_duel_kills || 0,
      deaths: data.sumo_duel_deaths || 0,
      wins: data.sumo_duel_wins || 0,
      losses: data.sumo_duel_losses || 0
    };
    /**
     * Classic duels stats
     * @type {DuelsModeStats}
     */
    this.classic = {
      kills: data.classic_duel_kills || 0,
      deaths: data.classic_duel_deaths || 0,
      wins: data.classic_duel_wins || 0,
      losses: data.classic_duel_losses || 0
    };
    /**
     * Combo duels stats
     * @type {DuelsModeStats}
     */
    this.combo = {
      kills: data.combo_duel_kills || 0,
      deaths: data.combo_duel_deaths || 0,
      wins: data.combo_duel_wins || 0,
      losses: data.combo_duel_losses || 0
    };
    /**
     * The bridge duels stats
     * @type {DuelsBridge}
     */
    this.bridge = {
      v1: {
        kills: (data.bridge_duel_kills || data.bridge_duel_bridge_kills) || 0,
        deaths: (data.bridge_duel_deaths || data.bridge_duel_bridge_deaths) || 0,
        wins: data.bridge_duel_wins || 0,
        losses: data.bridge_duel_losses || 0
      },
      v2: {
        kills: (data.bridge_doubles_kills || data.bridge_doubles_bridge_kills) || 0,
        deaths: (data.bridge_doubles_deaths || data.bridge_doubles_bridge_deaths) || 0,
        wins: data.bridge_doubles_wins || 0,
        losses: data.bridge_doubles_losses || 0
      },
      v4: {
        kills: (data.bridge_four_kills || data.bridge_four_bridge_kills) || 0,
        deaths: (data.bridge_four_deaths || data.bridge_four_bridge_deaths) || 0,
        wins: data.bridge_four_wins || 0,
        losses: data.bridge_four_losses || 0
      }
    };
  }
}
/**
 * @typedef {object} DuelsModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 */
/**
 * @typedef {object} DuelsOP
 * @property {DuelsModeStats} v1 OP Duel 1v1 stats
 * @property {DuelsModeStats} v2 OP Duel 2v2 stats
 */
/**
 * @typedef {object} DuelsUHC
 * @property {DuelsModeStats} v1 UHC Duel 1v1 stats
 * @property {DuelsModeStats} v2 UHC Duel 2v2 stats
 * @property {DuelsModeStats} v4 UHC Duel 4v4 stats
 */
/**
 * @typedef {object} DuelsSkyWars
 * @property {DuelsModeStats} v1 SkyWars Duel 1v1 stats
 * @property {DuelsModeStats} v2 SkyWars Duel 2v2 stats
 */
/**
 * @typedef {object} DuelsBridge
 * @property {DuelsModeStats} v1 The Bridge Duel 1v1 stats
 * @property {DuelsModeStats} v2 The Bridge Duel 2v2 stats
 * @property {DuelsModeStats} v4 The Bridge Duel 4v4 stats
 */
module.exports = Duels;
