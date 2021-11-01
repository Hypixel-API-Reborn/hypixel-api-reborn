/* eslint-disable max-len */
const divide = require('../../utils/divide');
const romanize = require('../../utils/romanize');
// eslint-disable-next-line camelcase
const { duels_divisions } = require('../../utils/Constants');

/**
 * @param {object<string,any>} data
 * @param {string|null} mode
 * @returns {string|undefined}
 */
function getDivision (data, mode) {
  for (const div of duels_divisions.slice().reverse()) {
    const prestige = data[`${mode ? mode : 'all_modes'}_${div.key}_title_prestige`];
    if (prestige !== undefined) {
      return `${div.name} ${romanize(prestige)}`;
    }
  }
  return null;
}
/**
 * @param {object<string,any>} data
 * @return {{kills:number,deaths:number}}
 */
function getTotalKillsDeaths (data) {
  let totalDeaths = 0;
  let totalKills = 0;
  for (const [k, v] of Object.entries(data)) {
    if (k.includes('deaths') && k !== 'deaths') {
      totalDeaths += v;
    } else if (k.includes('kills') && k !== 'kills') {
      totalKills += v;
    }
  }
  return {
    kills: totalKills,
    deaths: totalDeaths
  };
}
/**
 * Duels class
 */
class Duels {
  /**
   * @param {object} data Duels data
   */
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * All modes division
     * @type {string|null}
     */
    this.division = getDivision(data);
    /**
     * Kills
     * @type {number}
     */
    this.kills = getTotalKillsDeaths(data).kills;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = getTotalKillsDeaths(data).deaths;
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
     * Current winstreak
     * @type {number}
     */
    this.winstreak = data.current_winstreak || 0;
    /**
     * Best overall winstreak
     * @type {number}
     */
    this.bestWinstreak = data.best_overall_winstreak || 0;
    /**
     * UHC duels stats
     * @type {DuelsUHC}
     */
    this.uhc = {
      'overall': {
        division: getDivision(data, 'uhc'),
        winstreak: data.current_uhc_winstreak || 0,
        bestWinstreak: data.best_uhc_winstreak || 0,
        kills: (data.uhc_duel_kills || 0) + (data.uhc_doubles_kills || 0) + (data.uhc_four_kills || 0) + (data.uhc_meetup_kills || 0),
        deaths: (data.uhc_duel_deaths || 0) + (data.uhc_doubles_deaths || 0) + (data.uhc_four_deaths || 0) + (data.uhc_meetup_deaths || 0),
        KDRatio: divide((data.uhc_duel_kills || 0) + (data.uhc_doubles_kills || 0) + (data.uhc_four_kills || 0) + (data.uhc_meetup_kills || 0), (data.uhc_duel_deaths || 0) + (data.uhc_doubles_deaths || 0) + (data.uhc_four_deaths || 0) + (data.uhc_meetup_deaths || 0)),
        wins: (data.uhc_duel_wins || 0) + (data.uhc_doubles_wins || 0) + (data.uhc_four_wins || 0) + (data.uhc_meetup_wins || 0),
        losses: (data.uhc_duel_losses || 0) + (data.uhc_doubles_losses || 0) + (data.uhc_four_losses || 0) + (data.uhc_meetup_losses || 0),
        WLRatio: divide((data.uhc_duel_wins || 0) + (data.uhc_doubles_wins || 0) + (data.uhc_four_wins || 0) + (data.uhc_meetup_wins || 0), (data.uhc_duel_losses || 0) + (data.uhc_doubles_losses || 0) + (data.uhc_four_losses || 0) + (data.uhc_meetup_losses || 0)),
        playedGames: (data.uhc_duel_rounds_played || 0) + (data.uhc_doubles_rounds_played || 0) + (data.uhc_four_rounds_played || 0) + (data.uhc_meetup_rounds_played || 0)
      },
      '1v1': {
        division: getDivision(data, 'uhc'),
        winstreak: data.current_winstreak_mode_uhc_duel || 0,
        bestWinstreak: data.best_winstreak_mode_uhc_duel || 0,
        kills: data.uhc_duel_kills || 0,
        deaths: data.uhc_duel_deaths || 0,
        KDRatio: divide(data.uhc_duel_kills, data.uhc_duel_deaths),
        wins: data.uhc_duel_wins || 0,
        losses: data.uhc_duel_losses || 0,
        WLRatio: divide(data.uhc_duel_wins, data.uhc_duel_losses),
        playedGames: data.uhc_duel_rounds_played || 0
      },
      '2v2': {
        division: getDivision(data, 'uhc'),
        winstreak: data.current_winstreak_mode_uhc_doubles || 0,
        bestWinstreak: data.best_winstreak_mode_uhc_doubles || 0,
        kills: data.uhc_doubles_kills || 0,
        deaths: data.uhc_doubles_deaths || 0,
        KDRatio: divide(data.uhc_doubles_kills, data.uhc_doubles_deaths),
        wins: data.uhc_doubles_wins || 0,
        losses: data.uhc_doubles_losses || 0,
        WLRatio: divide(data.uhc_doubles_wins, data.uhc_doubles_losses),
        playedGames: data.uhc_doubles_rounds_played || 0
      },
      '4v4': {
        division: getDivision(data, 'uhc'),
        winstreak: data.current_winstreak_mode_uhc_four || 0,
        bestWinstreak: data.best_winstreak_mode_uhc_four || 0,
        kills: data.uhc_four_kills || 0,
        deaths: data.uhc_four_deaths || 0,
        KDRatio: divide(data.uhc_four_kills, data.uhc_four_deaths),
        wins: data.uhc_four_wins || 0,
        losses: data.uhc_four_losses || 0,
        WLRatio: divide(data.uhc_four_wins, data.uhc_four_losses),
        playedGames: data.uhc_four_rounds_played || 0
      },
      'meetup': {
        division: getDivision(data, 'uhc'),
        winstreak: data.current_winstreak_mode_uhc_meetup || 0,
        bestWinstreak: data.best_winstreak_mode_uhc_meetup || 0,
        kills: data.uhc_meetup_kills || 0,
        deaths: data.uhc_meetup_deaths || 0,
        KDRatio: divide(data.uhc_meetup_kills, data.uhc_meetup_deaths),
        wins: data.uhc_meetup_wins || 0,
        losses: data.uhc_meetup_losses || 0,
        WLRatio: divide(data.uhc_meetup_wins, data.uhc_meetup_losses),
        playedGames: data.uhc_meetup_rounds_played || 0
      }
    };
    /**
     * @type {DuelsParkour}
     */
    this.parkour = {
      division: getDivision(data, 'parkour'),
      deaths: data.parkour_eight_deaths || 0,
      wins: data.parkour_eight_wins || 0,
      losses: data.parkour_eight_losses || 0,
      WLRatio: divide(data.parkour_eight_wins, data.parkour_eight_losses),
      playedGames: data.parkour_eight_rounds_played || 0
    };
    /**
     * @type {DuelsBoxing}
     */
    this.boxing = {
      division: getDivision(data, 'boxing'),
      kills: data.boxing_duel_kills || 0,
      wins: data.boxing_duel_wins || 0,
      losses: data.boxing_duel_losses || 0,
      WLRatio: divide(data.boxing_duel_wins, data.boxing_duel_losses),
      playedGames: data.boxing_duel_rounds_played || 0,
      meleeSwings: data.boxing_duel_melee_swings || 0,
      meleeHits: data.boxing_duel_melee_hits || 0
    };
    /**
     * @type {DuelsBowspleef}
     */
    this.bowspleef = {
      division: getDivision(data, 'tnt_games'),
      winstreak: data.current_tnt_games_winstreak || 0,
      bestWinstreak: data.best_tnt_games_winstreak || 0,
      bowShots: data.bowspleef_duel_bow_shots || 0,
      deaths: data.bowspleef_duel_deaths || 0,
      wins: data.bowspleef_duel_wins || 0,
      losses: data.bowspleef_duel_losses || 0,
      WLRatio: divide((data.bowspleef_duel_wins || 0), (data.bowspleef_duel_losses || 0)),
      playedGames: data.bowspleef_duel_rounds_played || 0
    };
    /**
     * @type {DuelsArena}
     */
    this.arena = {
      kills: data.duel_arena_kills || 0,
      deaths: data.duel_arena_deaths || 0,
      KDRatio: divide(data.duel_arena_kills, data.duel_arena_deaths),
      wins: data.duel_arena_wins || 0,
      losses: data.duel_arena_losses || 0,
      WLRatio: divide(data.duel_arena_wins, data.duel_arena_losses),
      playedGames: data.duel_arena_rounds_played || 0
    };
    /**
     * MegaWalls duels stats
     * @type {DuelsModeStats}
     */
    this.megawalls = {
      division: getDivision(data, 'mega_walls'),
      winstreak: data.current_winstreak_mode_mw_duel || 0,
      bestWinstreak: data.best_winstreak_mode_mw_duel || 0,
      kills: data.mw_duel_kills || 0,
      deaths: data.mw_duel_deaths || 0,
      KDRatio: divide(data.mw_duel_kills, data.mw_duel_deaths),
      wins: data.mw_duel_wins || 0,
      losses: data.mw_duel_losses || 0,
      WLRatio: divide(data.mw_duel_wins, data.mw_duel_losses),
      playedGames: data.mw_duel_rounds_played || 0
    };
    /**
     * OP duels stats
     * @type {DuelsOP}
     */
    this.op = {
      'overall': {
        division: getDivision(data, 'op'),
        winstreak: data.current_op_winstreak || 0,
        bestWinstreak: data.best_op_winstreak || 0,
        kills: (data.op_duel_kills || 0) + (data.op_doubles_kills || 0),
        deaths: (data.op_duel_deaths || 0) + (data.op_doubles_deaths || 0),
        KDRatio: divide((data.op_duel_kills || 0) + (data.op_doubles_kills || 0), (data.op_duel_deaths || 0) + (data.op_doubles_deaths || 0)),
        wins: (data.op_duel_wins || 0) + (data.op_doubles_wins || 0),
        losses: (data.op_duel_losses || 0) + (data.op_doubles_losses || 0),
        WLRatio: divide((data.op_duel_wins || 0) + (data.op_doubles_wins || 0), (data.op_duel_losses || 0) + (data.op_doubles_losses || 0)),
        playedGames: (data.op_duel_rounds_played || 0) + (data.op_doubles_rounds_played || 0)
      },
      '1v1': {
        division: getDivision(data, 'op'),
        winstreak: data.current_winstreak_mode_op_duel || 0,
        bestWinstreak: data.best_winstreak_mode_op_duel || 0,
        kills: data.op_duel_kills || 0,
        deaths: data.op_duel_deaths || 0,
        KDRatio: divide(data.op_duel_kills, data.op_duel_deaths),
        wins: data.op_duel_wins || 0,
        losses: data.op_duel_losses || 0,
        WLRatio: divide(data.op_duel_wins, data.op_duel_losses),
        playedGames: data.op_duel_rounds_played || 0
      },
      '2v2': {
        division: getDivision(data, 'op'),
        winstreak: data.current_winstreak_mode_op_doubles || 0,
        bestWinstreak: data.best_winstreak_mode_op_doubles || 0,
        kills: data.op_doubles_kills || 0,
        deaths: data.op_doubles_deaths || 0,
        KDRatio: divide(data.op_doubles_kills, data.op_doubles_deaths),
        wins: data.op_doubles_wins || 0,
        losses: data.op_doubles_losses || 0,
        WLRatio: divide(data.op_doubles_wins, data.op_doubles_losses),
        playedGames: data.op_doubles_rounds_played || 0
      }
    };
    /**
     * SkyWars duels stats
     * @type {DuelsSkyWars}
     */
    this.skywars = {
      'overall': {
        division: getDivision(data, 'skywars'),
        winstreak: data.current_skywars_winstreak || 0,
        bestWinstreak: data.best_skywars_winstreak || 0,
        kills: ((data.sw_duel_kills || 0) + (data.sw_doubles_kills || 0)),
        deaths: ((data.sw_duel_deaths || 0) + (data.sw_doubles_deaths || 0)),
        KDRatio: divide((data.sw_duel_kills || 0) + (data.sw_doubles_kills || 0), (data.sw_duel_deaths || 0) + (data.sw_doubles_deaths || 0)),
        wins: ((data.sw_duel_wins || 0) + (data.sw_doubles_wins || 0)),
        losses: ((data.sw_duel_losses || 0) + (data.sw_doubles_losses || 0)),
        WLRatio: divide((data.sw_duel_wins || 0) + (data.sw_doubles_wins || 0), (data.sw_duel_losses || 0) + (data.sw_doubles_losses || 0)),
        playedGames: (data.sw_duel_rounds_played || 0) + (data.sw_doubles_rounds_played || 0)
      },
      '1v1': {
        division: getDivision(data, 'skywars'),
        winstreak: data.current_winstreak_mode_sw_duel || 0,
        bestWinstreak: data.best_winstreak_mode_sw_duel || 0,
        kills: data.sw_duel_kills || 0,
        deaths: data.sw_duel_deaths || 0,
        KDRatio: divide(data.sw_duel_kills, data.sw_duel_deaths),
        wins: data.sw_duel_wins || 0,
        losses: data.sw_duel_losses || 0,
        WLRatio: divide(data.sw_duel_wins, data.sw_duel_losses),
        playedGames: data.sw_duel_rounds_played || 0
      },
      '2v2': {
        division: getDivision(data, 'skywars'),
        winstreak: data.current_winstreak_mode_sw_doubles || 0,
        bestWinstreak: data.best_winstreak_mode_sw_doubles || 0,
        kills: data.sw_doubles_kills || 0,
        deaths: data.sw_doubles_deaths || 0,
        KDRatio: divide(data.sw_doubles_kills, data.sw_doubles_deaths),
        wins: data.sw_doubles_wins || 0,
        losses: data.sw_doubles_losses || 0,
        WLRatio: divide(data.sw_doubles_wins, data.sw_doubles_losses),
        playedGames: data.sw_doubles_rounds_played || 0
      }
    };
    /**
     * Sumo duels stats
     * @type {DuelsModeStats}
     */
    this.sumo = {
      division: getDivision(data, 'sumo'),
      winstreak: data.current_winstreak_mode_sumo_duel || 0,
      bestWinstreak: data.best_winstreak_mode_sumo_duel || 0,
      kills: data.sumo_duel_kills || 0,
      deaths: data.sumo_duel_deaths || 0,
      KDRatio: divide(data.sumo_duel_kills, data.sumo_duel_deaths),
      wins: data.sumo_duel_wins || 0,
      losses: data.sumo_duel_losses || 0,
      WLRatio: divide(data.sumo_duel_wins, data.sumo_duel_losses),
      playedGames: data.sumo_duel_rounds_played || 0
    };
    /**
     * Classic duels stats
     * @type {DuelsModeStats}
     */
    this.classic = {
      division: getDivision(data, 'classic'),
      winstreak: data.current_winstreak_mode_classic_duel || 0,
      bestWinstreak: data.best_winstreak_mode_classic_duel || 0,
      kills: data.classic_duel_kills || 0,
      deaths: data.classic_duel_deaths || 0,
      KDRatio: divide(data.classic_duel_kills, data.classic_duel_deaths),
      wins: data.classic_duel_wins || 0,
      losses: data.classic_duel_losses || 0,
      WLRatio: divide(data.classic_duel_wins, data.classic_duel_losses),
      playedGames: data.classic_duel_rounds_played || 0
    };
    /**
     * Combo duels stats
     * @type {DuelsModeStats}
     */
    this.combo = {
      division: getDivision(data, 'combo'),
      winstreak: data.current_winstreak_mode_combo_duel || 0,
      bestWinstreak: data.best_winstreak_mode_combo_duel || 0,
      kills: data.combo_duel_kills || 0,
      deaths: data.combo_duel_deaths || 0,
      KDRatio: divide(data.combo_duel_kills, data.combo_duel_deaths),
      wins: data.combo_duel_wins || 0,
      losses: data.combo_duel_losses || 0,
      WLRatio: divide(data.combo_duel_wins, data.combo_duel_losses),
      playedGames: data.combo_duel_rounds_played || 0
    };
    /**
     * The bridge duels stats
     * @type {DuelsBridge}
     */
    this.bridge = {
      'overall': {
        division: getDivision(data, 'bridge'),
        winstreak: data.current_bridge_winstreak || 0,
        bestWinstreak: data.best_bridge_winstreak || 0,
        kills: ((data.bridge_duel_bridge_kills || 0) + (data.bridge_doubles_bridge_kills || 0) + (data.bridge_2v2v2v2_bridge_kills || 0) + (data.bridge_3v3v3v3_bridge_kills || 0) + (data.bridge_four_bridge_kills || 0) + (data.bridge_threes_bridge_kills || 0) + (data.capture_threes_bridge_kills || 0)),
        deaths: ((data.bridge_duel_bridge_deaths || 0) + (data.bridge_doubles_bridge_deaths || 0) + (data.bridge_2v2v2v2_bridge_deaths || 0) + (data.bridge_3v3v3v3_bridge_deaths || 0) + (data.bridge_four_bridge_deaths || 0) + (data.bridge_threes_bridge_deaths || 0) + (data.capture_threes_bridge_deaths || 0)),
        KDRatio: divide(((data.bridge_duel_bridge_kills || 0) + (data.bridge_doubles_bridge_kills || 0) + (data.bridge_2v2v2v2_bridge_kills || 0) + (data.bridge_3v3v3v3_bridge_kills || 0) + (data.bridge_four_bridge_kills || 0) + (data.bridge_threes_bridge_kills || 0) + (data.capture_threes_bridge_kills || 0)), ((data.bridge_duel_bridge_deaths || 0) + (data.bridge_doubles_bridge_deaths || 0) + (data.bridge_2v2v2v2_bridge_deaths || 0) + (data.bridge_3v3v3v3_bridge_deaths || 0) + (data.bridge_four_bridge_deaths || 0) + (data.bridge_threes_bridge_deaths || 0) + (data.capture_threes_bridge_deaths || 0))),
        wins: ((data.bridge_duel_wins || 0) + (data.bridge_doubles_wins || 0) + (data.bridge_2v2v2v2_wins || 0) + (data.bridge_3v3v3v3_wins || 0) + (data.bridge_four_wins || 0) + (data.bridge_threes_bridge_wins || 0) + (data.capture_threes_wins || 0)),
        losses: ((data.bridge_duel_losses || 0) + (data.bridge_doubles_losses || 0) + (data.bridge_2v2v2v2_losses || 0) + (data.bridge_3v3v3v3_losses || 0) + (data.bridge_four_losses || 0) + (data.bridge_threes_bridge_losses || 0) + (data.capture_threes_bridge_losses || 0)),
        WLRatio: divide(((data.bridge_duel_wins || 0) + (data.bridge_doubles_wins || 0) + (data.bridge_2v2v2v2_wins || 0) + (data.bridge_3v3v3v3_wins || 0) + (data.bridge_four_wins || 0) + (data.bridge_threes_bridge_wins || 0) + (data.capture_threes_wins || 0)), ((data.bridge_duel_losses || 0) + (data.bridge_doubles_losses || 0) + (data.bridge_2v2v2v2_losses || 0) + (data.bridge_3v3v3v3_losses || 0) + (data.bridge_four_losses || 0) + (data.bridge_threes_bridge_losses || 0) + (data.capture_threes_bridge_losses || 0))),
        playedGames: ((data.bridge_duel_rounds_played || 0) + (data.bridge_doubles_rounds_played || 0) + (data.bridge_2v2v2v2_rounds_played || 0) + (data.bridge_3v3v3v3_rounds_played || 0) + (data.bridge_four_rounds_played || 0) + (data.bridge_threes_bridge_rounds_played || 0) + (data.capture_threes_rounds_played || 0))
      },
      '1v1': {
        division: getDivision(data, 'bridge'),
        winstreak: data.current_winstreak_mode_bridge_duel || 0,
        bestWinstreak: data.best_winstreak_mode_bridge_duel || 0,
        kills: data.bridge_duel_bridge_kills || 0,
        deaths: data.bridge_duel_bridge_deaths || 0,
        KDRatio: divide(data.bridge_duel_bridge_kills, data.bridge_duel_bridge_deaths),
        wins: data.bridge_duel_wins || 0,
        losses: data.bridge_duel_losses || 0,
        WLRatio: divide(data.bridge_duel_wins, data.bridge_duel_losses),
        playedGames: data.bridge_duel_rounds_played || 0
      },
      '2v2': {
        division: getDivision(data, 'bridge'),
        winstreak: data.current_winstreak_mode_bridge_doubles || 0,
        bestWinstreak: data.best_winstreak_mode_bridge_doubles || 0,
        kills: data.bridge_doubles_bridge_kills || 0,
        deaths: data.bridge_doubles_bridge_deaths || 0,
        KDRatio: divide(data.bridge_doubles_bridge_kills, data.bridge_doubles_bridge_deaths),
        wins: data.bridge_doubles_wins || 0,
        losses: data.bridge_doubles_losses || 0,
        WLRatio: divide(data.bridge_doubles_wins, data.bridge_doubles_losses),
        playedGames: data.bridge_doubles_rounds_played || 0
      },
      '3v3': {
        division: getDivision(data, 'bridge'),
        winstreak: data.current_winstreak_mode_bridge_threes || 0,
        bestWinstreak: data.best_winstreak_mode_bridge_threes || 0,
        kills: data.bridge_threes_bridge_kills || 0,
        deaths: data.bridge_threes_bridge_deaths || 0,
        KDRatio: divide(data.bridge_threes_bridge_kills, data.bridge_threes_bridge_deaths),
        wins: data.bridge_threes_wins || 0,
        losses: data.bridge_threes_losses || 0,
        WLRatio: divide(data.bridge_threes_wins, data.bridge_threes_losses),
        playedGames: data.bridge_threes_rounds_played || 0
      },
      '2v2v2v2': {
        division: getDivision(data, 'bridge'),
        winstreak: data.current_winstreak_mode_bridge_2v2v2v2 || 0,
        bestWinstreak: data.best_winstreak_mode_bridge_2v2v2v2 || 0,
        kills: data.bridge_2v2v2v2_bridge_kills || 0,
        deaths: data.bridge_2v2v2v2_bridge_deaths || 0,
        KDRatio: divide(data.bridge_2v2v2v2_bridge_kills, data.bridge_2v2v2v2_bridge_deaths),
        wins: data.bridge_2v2v2v2_wins || 0,
        losses: data.bridge_2v2v2v2_losses || 0,
        WLRatio: divide(data.bridge_2v2v2v2_wins, data.bridge_2v2v2v2_losses),
        playedGames: data.bridge_2v2v2v2_rounds_played || 0
      },
      '3v3v3v3': {
        division: getDivision(data, 'bridge'),
        winstreak: data.current_winstreak_mode_bridge_3v3v3v3 || 0,
        bestWinstreak: data.best_winstreak_mode_bridge_3v3v3v3 || 0,
        kills: data.bridge_3v3v3v3_bridge_kills || 0,
        deaths: data.bridge_3v3v3v3_bridge_deaths || 0,
        KDRatio: divide(data.bridge_3v3v3v3_bridge_kills, data.bridge_3v3v3v3_bridge_deaths),
        wins: data.bridge_3v3v3v3_wins || 0,
        losses: data.bridge_3v3v3v3_losses || 0,
        WLRatio: divide(data.bridge_3v3v3v3_wins, data.bridge_3v3v3v3_losses),
        playedGames: data.bridge_3v3v3v3_rounds_played || 0
      },
      '4v4': {
        division: getDivision(data, 'bridge'),
        winstreak: data.current_winstreak_mode_bridge_four || 0,
        bestWinstreak: data.best_winstreak_mode_bridge_four || 0,
        kills: data.bridge_four_bridge_kills || 0,
        deaths: data.bridge_four_bridge_deaths || 0,
        KDRatio: divide(data.bridge_four_bridge_kills, data.bridge_four_bridge_deaths),
        wins: data.bridge_four_wins || 0,
        losses: data.bridge_four_losses || 0,
        WLRatio: divide(data.bridge_four_wins, data.bridge_four_losses),
        playedGames: data.bridge_four_rounds_played || 0
      },
      // eslint-disable-next-line quote-props
      ctf: {
        division: getDivision(data, 'bridge'),
        kills: data.capture_threes_bridge_kills || 0,
        deaths: data.capture_threes_bridge_deaths || 0,
        KDRatio: divide(data.capture_threes_bridge_kills, data.capture_threes_bridge_deaths),
        wins: data.capture_threes_wins || 0,
        losses: data.capture_threes_losses || 0,
        WLRatio: divide(data.capture_threes_wins, data.capture_threes_losses),
        captures: data.capture_threes_captures || 0,
        playedGames: data.capture_threes_rounds_played || 0
      }
    };
    /**
     * Blitz duel stats
     * @type {DuelsModeStats}
     */
    this.blitz = {
      division: getDivision(data, 'blitz'),
      winstreak: data.current_winstreak_mode_blitz_duel || 0,
      bestWinstreak: data.best_winstreak_mode_blitz_duel || 0,
      kills: data.blitz_duel_kills || 0,
      deaths: data.blitz_duel_deaths || 0,
      KDRatio: divide(data.blitz_duel_kills, data.blitz_duel_deaths),
      wins: data.blitz_duel_wins || 0,
      losses: data.blitz_duel_losses || 0,
      WLRatio: divide(data.blitz_duel_wins, data.blitz_duel_losses),
      playedGames: data.blitz_duel_rounds_played || 0
    };
    /**
     * Nodebuff duel stats
     * @type {DuelsModeStats}
     */
    this.nodebuff = {
      division: getDivision(data, 'no_debuff'),
      winstreak: data.current_winstreak_mode_potion_duel || 0,
      bestWinstreak: data.best_winstreak_mode_potion_duel || 0,
      kills: data.potion_duel_kills || 0,
      deaths: data.potion_duel_deaths || 0,
      KDRatio: divide(data.potion_duel_kills, data.potion_duel_deaths),
      wins: data.potion_duel_wins || 0,
      losses: data.potion_duel_losses || 0,
      WLRatio: divide(data.potion_duel_wins, data.potion_duel_losses),
      playedGames: data.potion_duel_rounds_played || 0
    };
    /**
     * Bow duel stats
     * @type {DuelsModeStats}
     */
    this.bow = {
      division: getDivision(data, 'bow'),
      winstreak: data.current_winstreak_mode_bow_duel || 0,
      bestWinstreak: data.best_winstreak_mode_bow_duel || 0,
      kills: data.bow_duel_kills || 0,
      deaths: data.bow_duel_deaths || 0,
      KDRatio: divide(data.bow_duel_kills, data.bow_duel_deaths),
      wins: data.bow_duel_wins || 0,
      losses: data.bow_duel_losses || 0,
      WLRatio: divide(data.bow_duel_wins, data.bow_duel_losses),
      playedGames: data.bow_duel_rounds_played || 0
    };
  }
}
/**
 * @typedef {object} DuelsModeStats
 * @property {number|undefined} winstreak Current winstreak
 * @property {number|undefined} bestWinstreak Best winstreak
 * @property {string|null} division Division
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} WLRatio Win/Loss ratio
 * @property {number} playedGames Played games
 */
/**
 * @typedef {object} BridgeModeStats
 * @property {number|undefined} winstreak Current winstreak
 * @property {number|undefined} bestWinstreak Best winstreak
 * @property {string|null} division Division
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} WLRatio Win/Loss ratio
 * @property {number} playedGames Played games
 * @property {number} goals Goals
 */
/**
 * @typedef {object} DuelsBowspleef
 * @property {string|null} division Division
 * @property {number} winstreak Winstreak
 * @property {number} bestWinstreak Best winstreak
 * @property {number} bowShots Bow shots
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} WLRatio Win/Loss ratio
 * @property {number} playedGames Played games
 */
/**
 * @typedef {object} BridgeCTFModeStats
 * @property {string|null} division Division
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} WLRatio Win/Loss ratio
 * @property {number} playedGames Played games
 * @property {number} captures Captures
 */
/**
 * @typedef {object} DuelsParkour
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} WLRatio Win/Loss ratio
 * @property {number} playedGames Played games
 */
/**
 * @typedef {object} DuelsBoxing
 * @property {string} division Division
 * @property {number} kills Kills
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} WLRatio Win/Loss ratio
 * @property {number} playedGames Played games
 * @property {number} meleeSwings Melee swings
 * @property {number} meleeHits Melee hits
 */
/**
 * @typedef {object} DuelsArena
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} WLRatio Win/Loss ratio
 * @property {number} playedGames Played games
 */
/**
 * @typedef {object} DuelsOP
 * @property {DuelsModeStats} overall Overall OP duel stats
 * @property {DuelsModeStats} '1v1' OP Duel 1v1 stats
 * @property {DuelsModeStats} '2v2' OP Duel 2v2 stats
 */
/**
 * @typedef {object} DuelsUHC
 * @property {DuelsModeStats} overall Overall UHC duel stats
 * @property {DuelsModeStats} '1v1' UHC Duel 1v1 stats
 * @property {DuelsModeStats} '2v2' UHC Duel 2v2 stats
 * @property {DuelsModeStats} '4v4' UHC Duel 4v4 stats
 * @property {DuelsModeStats} meetup UHC Meetup
 */
/**
 * @typedef {object} DuelsSkyWars
 * @property {DuelsModeStats} overall Overall SkyWars duel stats
 * @property {DuelsModeStats} '1v1' SkyWars Duel 1v1 stats
 * @property {DuelsModeStats} '2v2' SkyWars Duel 2v2 stats
 */
/**
 * @typedef {object} DuelsBridge
 * @property {BridgeModeStats} overall Overall The Bridge duel stats
 * @property {BridgeModeStats} '1v1' The Bridge Duel 1v1 stats
 * @property {BridgeModeStats} '2v2' The Bridge Duel 2v2 stats
 * @property {BridgeModeStats} '3v3' The Bridge Duel 3v3 stats
 * @property {BridgeModeStats} '4v4' The Bridge Duel 4v4 stats
 * @property {BridgeModeStats} '2v2v2v2' The Bridge Duel 2v2v2v2 stats
 * @property {BridgeModeStats} '3v3v3v3' The Bridge Duel 3v3v3v3 stats
 * @property {BridgeCTFModeStats} ctf The Bridge Capture The Flag duel 3v3 stats
 */
module.exports = Duels;
