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
  if (data.active_cosmetictitle === 'custom') {
    if (!data.equipped_custom_titles) return null;
    return `${data.equipped_custom_titles.replace(/§[0-9a-fl]{1}/g, '')}`;
  };
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
     * @type {DuelsUHC}
     */
    this.uhc = {
      '1v1': {
        kills: data.uhc_duel_kills || 0,
        deaths: data.uhc_duel_deaths || 0,
        KDRatio: divide(data.uhc_duel_kills, data.uhc_duel_deaths),
        wins: data.uhc_duel_wins || 0,
        losses: data.uhc_duel_losses || 0,
        WLRatio: divide(data.uhc_duel_wins, data.uhc_duel_losses)
      },
      '2v2': {
        kills: data.uhc_doubles_kills || 0,
        deaths: data.uhc_doubles_deaths || 0,
        KDRatio: divide(data.uhc_doubles_kills, data.uhc_doubles_deaths),
        wins: data.uhc_doubles_wins || 0,
        losses: data.uhc_doubles_losses || 0,
        WLRatio: divide(data.uhc_doubles_wins, data.uhc_doubles_losses)
      },
      '4v4': {
        kills: data.uhc_four_kills || 0,
        deaths: data.uhc_four_deaths || 0,
        KDRatio: divide(data.uhc_four_kills, data.uhc_four_deaths),
        wins: data.uhc_four_wins || 0,
        losses: data.uhc_four_losses || 0,
        WLRatio: divide(data.uhc_four_wins, data.uhc_four_losses)
      },
      meetup: {
        kills: data.uhc_meetup_kills || 0,
        deaths: data.uhc_meetup_deaths || 0,
        KDRatio: divide(data.uhc_meetup_kills, data.uhc_meetup_deaths),
        wins: data.uhc_meetup_wins || 0,
        losses: data.uhc_meetup_losses || 0,
        WLRatio: divide(data.uhc_meetup_wins, data.uhc_meetup_losses)
      }
    };
    this.megawalls = {
      kills: data.mw_duel_kills || 0,
      deaths: data.mw_duel_deaths || 0,
      KDRatio: divide(data.mw_duel_kills, data.mw_duel_deaths),
      wins: data.mw_duel_wins || 0,
      losses: data.mw_duel_losses || 0,
      WLRatio: divide(data.mw_duel_wins, data.mw_duel_losses)
    };
    /**
     * OP duels stats
     * @type {DuelsOP}
     */
    this.op = {
      '1v1': {
        kills: data.op_duel_kills || 0,
        deaths: data.op_duel_deaths || 0,
        KDRatio: divide(data.op_duel_kills, data.op_duel_deaths),
        wins: data.op_duel_wins || 0,
        losses: data.op_duel_losses || 0,
        WLRatio: divide(data.op_duel_wins, data.op_duel_losses)
      },
      '2v2': {
        kills: data.op_doubles_kills || 0,
        deaths: data.op_doubles_deaths || 0,
        KDRatio: divide(data.op_doubles_kills, data.op_doubles_deaths),
        wins: data.op_doubles_wins || 0,
        losses: data.op_doubles_losses || 0,
        WLRatio: divide(data.op_doubles_wins, data.op_doubles_losses)
      }
    };
    /**
     * SkyWars duels stats
     * @type {DuelsSkyWars}
     */
    this.skywars = {
      '1v1': {
        kills: data.sw_duel_kills || 0,
        deaths: data.sw_duel_deaths || 0,
        KDRatio: divide(data.sw_duel_kills, data.sw_duel_deaths),
        wins: data.sw_duel_wins || 0,
        losses: data.sw_duel_losses || 0,
        WLRatio: divide(data.sw_duel_wins, data.sw_duel_losses)
      },
      '2v2': {
        kills: data.sw_doubles_kills || 0,
        deaths: data.sw_doubles_deaths || 0,
        KDRatio: divide(data.sw_doubles_kills, data.sw_doubles_deaths),
        wins: data.sw_doubles_wins || 0,
        losses: data.sw_doubles_losses || 0,
        WLRatio: divide(data.sw_doubles_wins, data.sw_doubles_losses)
      }
    };
    /**
     * Sumo duels stats
     * @type {DuelsModeStats}
     */
    this.sumo = {
      kills: data.sumo_duel_kills || 0,
      deaths: data.sumo_duel_deaths || 0,
      KDRatio: divide(data.sumo_duel_kills, data.sumo_duel_deaths),
      wins: data.sumo_duel_wins || 0,
      losses: data.sumo_duel_losses || 0,
      WLRatio: divide(data.sumo_duel_wins, data.sumo_duel_losses)
    };
    /**
     * Classic duels stats
     * @type {DuelsModeStats}
     */
    this.classic = {
      kills: data.classic_duel_kills || 0,
      deaths: data.classic_duel_deaths || 0,
      KDRatio: divide(data.classic_duel_kills, data.classic_duel_deaths),
      wins: data.classic_duel_wins || 0,
      losses: data.classic_duel_losses || 0,
      WLRatio: divide(data.classic_duel_wins, data.classic_duel_losses)
    };
    /**
     * Combo duels stats
     * @type {DuelsModeStats}
     */
    this.combo = {
      kills: data.combo_duel_kills || 0,
      deaths: data.combo_duel_deaths || 0,
      KDRatio: divide(data.combo_duel_kills, data.combo_duel_deaths),
      wins: data.combo_duel_wins || 0,
      losses: data.combo_duel_losses || 0,
      WLRatio: divide(data.combo_duel_wins, data.combo_duel_losses)
    };
    /**
     * The bridge duels stats
     * @type {DuelsBridge}
     */
    this.bridge = {
      '1v1': {
        kills: (data.bridge_duel_kills || data.bridge_duel_bridge_kills) || 0,
        deaths: (data.bridge_duel_deaths || data.bridge_duel_bridge_deaths) || 0,
        KDRatio: divide((data.bridge_duel_kills || data.bridge_duel_bridge_kills), (data.bridge_duel_deaths || data.bridge_duel_bridge_deaths)),
        wins: data.bridge_duel_wins || 0,
        losses: data.bridge_duel_losses || 0,
        WLRatio: divide(data.bridge_duel_wins, data.bridge_duel_losses)
      },
      '2v2': {
        kills: (data.bridge_doubles_kills || data.bridge_doubles_bridge_kills) || 0,
        deaths: (data.bridge_doubles_deaths || data.bridge_doubles_bridge_deaths) || 0,
        KDRatio: divide((data.bridge_doubles_kills || data.bridge_doubles_bridge_kills), (data.bridge_doubles_deaths || data.bridge_doubles_bridge_deaths)),
        wins: data.bridge_doubles_wins || 0,
        losses: data.bridge_doubles_losses || 0,
        WLRatio: divide(data.bridge_doubles_wins, data.bridge_doubles_losses)
      },
      '4v4': {
        kills: (data.bridge_four_kills || data.bridge_four_bridge_kills) || 0,
        deaths: (data.bridge_four_deaths || data.bridge_four_bridge_deaths) || 0,
        KDRatio: divide((data.bridge_four_kills || data.bridge_four_bridge_kills), (data.bridge_four_deaths || data.bridge_four_bridge_deaths)),
        wins: data.bridge_four_wins || 0,
        losses: data.bridge_four_losses || 0,
        WLRatio: divide(data.bridge_four_wins, data.bridge_four_losses)
      }
    };
    /**
     * Blitz duel stats
     * @type {DuelsModeStats}
     */
    this.blitz = {
      kills: data.blitz_duel_kills || 0,
      deaths: data.blitz_duel_deaths || 0,
      KDRatio: divide(data.blitz_duel_kills, data.blitz_duel_deaths),
      wins: data.blitz_duel_wins || 0,
      losses: data.blitz_duel_losses || 0,
      WLRatio: divide(data.blitz_duel_wins, data.blitz_duel_losses)
    };
    /**
     * Nodebuff duel stats
     * @type {DuelsModeStats}
     */
    this.nodebuff = {
      kills: data.potion_duel_kills || 0,
      deaths: data.potion_duel_deaths || 0,
      KDRatio: divide(data.potion_duel_kills, data.potion_duel_deaths),
      wins: data.potion_duel_wins || 0,
      losses: data.potion_duel_losses || 0,
      WLRatio: divide(data.potion_duel_wins, data.potion_duel_losses)
    };
    /**
     * Bow duel stats
     * @type {DuelsModeStats}
     */
    this.bow = {
      kills: data.bow_duel_kills || 0,
      deaths: data.bow_duel_deaths || 0,
      KDRatio: divide(data.bow_duel_kills, data.bow_duel_deaths),
      wins: data.bow_duel_wins || 0,
      losses: data.bow_duel_losses || 0,
      WLRatio: divide(data.bow_duel_wins, data.bow_duel_losses)
    };
  }
}
/**
 * @typedef {object} DuelsModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} WLRatio Win/Loss ratio
 */
/**
 * @typedef {object} DuelsOP
 * @property {DuelsModeStats} '1v1' OP Duel 1v1 stats
 * @property {DuelsModeStats} '2v2' OP Duel 2v2 stats
 */
/**
 * @typedef {object} DuelsUHC
 * @property {DuelsModeStats} '1v1' UHC Duel 1v1 stats
 * @property {DuelsModeStats} '2v2' UHC Duel 2v2 stats
 * @property {DuelsModeStats} '4v4' UHC Duel 4v4 stats
 * @property {DuelsModeStats} meetup UHC Meetup
 */
/**
 * @typedef {object} DuelsSkyWars
 * @property {DuelsModeStats} '1v1' SkyWars Duel 1v1 stats
 * @property {DuelsModeStats} '2v2' SkyWars Duel 2v2 stats
 */
/**
 * @typedef {object} DuelsBridge
 * @property {DuelsModeStats} '1v1' The Bridge Duel 1v1 stats
 * @property {DuelsModeStats} '2v2' The Bridge Duel 2v2 stats
 * @property {DuelsModeStats} '4v4' The Bridge Duel 4v4 stats
 */
module.exports = Duels;
