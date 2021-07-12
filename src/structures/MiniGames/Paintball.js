const divide = require('../../utils/divide');
/**
 * Paintball class
 */
class Paintball {
  /**
   * @param {object} data Paintball data
   */
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
     * Shots fired
     * @type {number}
     */
    this.shotsFired = data.shots_fired || 0;
    /**
     * Kill streaks
     * @type {number}
     */
    this.killstreaks = data.killstreaks || 0;
    /**
     * Forcefield Time
     * @type {number}
     */
    this.forcefieldTime = data.forcefieldTime || 0;
    /**
     * Hat
     * @type {string}
     */
    this.hat = data.hat || 'None';
  }
}
module.exports = Paintball;
