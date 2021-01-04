const divide = require('../../utils/divide');
/**
 * VampireZ class
 * @param {object} data VampireZ data
 */
class VampireZ {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Role Human
     * @type {VampireZHumanStats}
     */
    this.human = {
      kills: data.human_kills || 0,
      deaths: data.human_deaths || 0,
      KDRatio: divide(data.human_kills, data.human_wins),
      wins: data.human_wins || 0
    };
    /**
     * Role Zombie
     * @type {VampireZZombieStats}
     */
    this.zombie = {
      kills: data.zombie_kills || 0
    };
    /**
     * Role Vampire
     * @type {VampireZVampireStats}
     */
    this.vampire = {
      kills: data.vampire_kills || 0,
      deaths: data.vampire_deaths || 0,
      KDRatio: divide(data.vampire_kills, data.vampire_wins)
    };
  }
}
/**
 * @typedef {object} VampireZHumanStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill Death ratio
 * @property {number} wins Wins
 */
/**
 * @typedef {object} VampireZZombieStats
 * @property {number} kills Kills
 */
/**
 * @typedef {object} VampireZVampireStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill Death ratio
 */
module.exports = VampireZ;
