const divide = require('../../utils/divide');
/**
 * MurderMystery class
 * @param {object} data MurderMystery data
 */
class MurderMystery {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games || 0;
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
     * Kill/Death ratio
     * @type {number}
     */
    this.KDRatio = divide(data.kills, data.deaths);
    /**
     * Wins as Murderer
     * @type {number}
     */
    this.winsAsMurderer = data.murderer_wins || 0;
    /**
     * Wins as Detective
     * @type {number}
     */
    this.winsAsDetective = data.detective_wins || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Assasins
     * @type {MurderMysteryModeStats}
     */
    this.assassins = {
      kills: data.kills_MURDER_ASSASSINS || 0,
      deaths: data.deaths_MURDER_ASSASSINS || 0,
      KDRatio: divide(data.kills_MURDER_ASSASSINS, data.deaths_MURDER_ASSASSINS),
      wins: data.wins_MURDER_ASSASSINS || 0,
      playedGames: data.games_MURDER_ASSASSINS || 0
    };
    /**
     * Double Up
     * @type {MurderMysteryModeStats}
     */
    this.doubleUp = {
      kills: data.kills_MURDER_DOUBLE_UP || 0,
      deaths: data.deaths_MURDER_DOUBLE_UP || 0,
      KDRatio: divide(data.kills_MURDER_DOUBLE_UP, data.deaths_MURDER_DOUBLE_UP),
      wins: data.wins_MURDER_DOUBLE_UP || 0,
      playedGames: data.games_MURDER_DOUBLE_UP || 0
    };
    /**
     * Infection
     * @type {MurderMysteryModeStats}
     */
    this.infection = {
      kills: data.kills_MURDER_INFECTION || 0,
      deaths: data.deaths_MURDER_INFECTION || 0,
      KDRatio: divide(data.kills_MURDER_INFECTION, data.deaths_MURDER_INFECTION),
      wins: data.wins_MURDER_INFECTION || 0,
      playedGames: data.games_MURDER_INFECTION || 0
    };
  }
}
/**
 * @typedef {object} MurderMysteryModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} wins Wins
 * @property {number} playedGames Played games
 */
module.exports = MurderMystery;
