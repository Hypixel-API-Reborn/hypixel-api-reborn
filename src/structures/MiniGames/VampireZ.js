const divide = require('../../utils/divide');

class VampireZRole {
  /**
   * @param {object} data VampireZ data
   * @param {string} role VampireZ Role
   */
  constructor(data, role) {
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`${role}_kills`];
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`${role}_deaths`];
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`${role}_wins`];
  }
}

/**
 * VampireZ class
 */
class VampireZ {
  /**
   * @param {object} data VampireZ data
   */
  constructor(data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Gold Bought
     * @type {number}
     */
    this.goldBought = data.gold_bought || 0;
    /**
     * Blood
     * @type {boolean}
     */
    this.blood = data.blood || false;
    /**
     * Zombie Kills
     * @type {number}
     */
    this.zombieKills = data.zombie_kills || 0;
    /**
     * Human Stats
     * @type {VampireZRole}
     */
    this.human = new VampireZRole(data, 'human');
    /**
     * Vampire Stats
     * @type {VampireZRole}
     */
    this.vampire = new VampireZRole(data, 'vampire');
    /**
     * Kills
     * @type {number}
     */
    this.kills = this.human.kills + this.vampire.kills;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = this.human.deaths + this.vampire.deaths;
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = this.human.wins + this.vampire.wins;
  }
}

module.exports = VampireZ;
