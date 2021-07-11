/**
 * TurboKartRacers class
 */
class TurboKartRacers {
  /**
   * @param {object} data TurboKartRacers data
   */
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
      * Wins
      * @type {number}
      */
    this.wins = data.wins || 0;
    /**
     * Completed laps
     * @type {number}
     */
    this.completedLaps = data.laps_completed || 0;
    /**
     * Bronze trophies
     * @type {number}
     */
    this.bronzeTrophies = data.bronze_trophy || 0;
    /**
     * Silver trophies
     * @type {number}
     */
    this.silverTrophies = data.silver_trophy || 0;
    /**
     * Gold trophies
     * @type {number}
     */
    this.goldTrophies = data.gold_trophy || 0;
    /**
     * Box pickups
     * @type {number}
     */
    this.boxPickups = data.box_pickups || 0;
  }
}
/**
 * @param {object} data
 * @return {{kills:number,deaths:number,KDRatio:number,wins:number,losses:number,WLRatio:number}}
 */

/**
 * @typedef {Object} TurboKartRacersModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill Death ratio
 * @property {number} wins Wins
 * @property {number} killstreaks Killstreaks
 * @property {number} shotsFired Shots fired
 * @property {number} forcefieldTime Forcefield time
 * @property {string} hat Selected hat
 */
module.exports = TurboKartRacers;
