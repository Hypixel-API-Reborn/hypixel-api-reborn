const divide = require('../../utils/divide');
/**
 * Cops and crims class
 * @param {object} data Cops and crims data
 */
class CopsAndCrims {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
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
    this.wins = data.game_wins || 0;
    /**
     * Round wins
     * @type {number}
     */
    this.roundWins = data.round_wins || 0;
    /**
     * Shows fired
     * @type {number}
     */
    this.shotsFired = data.shots_fired || 0;
    /**
     * Headshot kills
     * @type {number}
     */
    this.headshotKills = data.headshot_kills || 0;
    /**
     * Bombs defused
     * @type {number}
     */
    this.bombsDefused = data.bombs_defused || 0;
    /**
     * Bombs planted
     * @type {number}
     */
    this.bombsPlanted = data.bombs_planted || 0;
    /**
     * Kills as Crim
     * @type {number}
     */
    this.killsAsCrim = data.criminal_kills || 0;
    /**
     * Kills as Cop
     * @type {number}
     */
    this.killsAsCop = data.cop_kills || 0;
    /**
     * Deathmatch stats
     * @type {CopsAndCrimsDeathmatch}
     */
    this.deathmatch = {
      kills: data.kills_deathmatch || 0,
      deaths: data.deaths_deathmatch || 0,
      KDRatio: divide(data.kills_deathmatch, data.deaths_deathmatch),
      killsAsCrim: data.criminal_kills_deathmatch || 0,
      killsAsCop: data.cop_kills_deathmatch || 0
    };
  }
}
/**
 * @typedef {object} CopsAndCrimsDeathmatch
 * @property {number} kills Deathmatch kills
 * @property {number} deaths Deathmatch deaths
 * @property {number} killsAsCrim Deathmatch kills as crim
 * @property {number} killsAsCop Deathmatch kills as cop
 */
module.exports = CopsAndCrims;
