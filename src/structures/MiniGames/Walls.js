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
     * Assists
     * @type {number}
     */
    this.assists = data.assists || 0;
  }
}
/**
 * @param {object} data
 * @return {{kills:number,deaths:number,KDRatio:number,wins:number,losses:number,WLRatio:number}}
 */

/**
 * @typedef {Object} PaintballModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill Death ratio
 * @property {number} wins Wins
 * @property {number} killstreaks Killstreaks
 * @property {number} shotsFired Shots fired
 * @property {number} forcefieldTime Forcefield time
 * @property {string} hat Selected hat
 */
module.exports = Paintball;
