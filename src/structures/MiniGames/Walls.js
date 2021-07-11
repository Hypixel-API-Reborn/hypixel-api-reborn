const divide = require('../../utils/divide');
/**
 * Walls class
 */
class Walls {
  /**
   * @param {object} data Walls data
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
module.exports = Walls;
