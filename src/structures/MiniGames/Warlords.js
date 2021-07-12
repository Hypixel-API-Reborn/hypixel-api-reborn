const divide = require('../../utils/divide');
/**
 * Warlords class
 */
class Warlords {
  /**
   * @param {object} data Warlords data
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
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.win_streak || 0;
    /**
     * Assists
     * @type {number}
     */
    this.assists = data.assists || 0;
    /**
     * Chosen class
     * @type {string}
     */
    this.class = data.chosen_class || 0;
  }
}
module.exports = Warlords;
