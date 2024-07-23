const divide = require('../../utils/divide');
/**
 * Paintball class
 */
class Paintball {
  /**
   * @param {object} data Paintball data
   */
  constructor(data) {
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
    this.forceFieldTime = data.forcefieldTime || 0;
    /**
     * Hat
     * @type {string}
     */
    this.hat = data.hat || 'None';
    /**
     * Adrenaline Perk Level
     * @type {number}
     */
    this.adrenaline = data.adrenaline || 0;
    /**
     * Endurance Perk Level
     * @type {number}
     */
    this.endurance = data.endurance || 0;
    /**
     * Fortune Perk Level
     * @type {number}
     */
    this.fortune = data.fortune || 0;
    /**
     * Godfather Perk Level
     * @type {number}
     */
    this.godfather = data.godfather || 0;
    /**
     * Superluck Perk Level
     * @type {number}
     */
    this.superluck = data.superluck || 0;
    /**
     * Transfusion Perk Level
     * @type {number}
     */
    this.transfusion = data.transfusion || 0;
  }
}
module.exports = Paintball;
