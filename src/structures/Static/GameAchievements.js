const Achievement = require('./Achievement');

/**
 * Game achievements class
 */
class GameAchievements {
  /**
   * @param {string} name game name
   * @param {object} data data
   */
  constructor(name, data) {
    /**
     * Name of game/category
     * @type {StaticGameNames}
     */
    this.category = name;
    /**
     * Total points possible from all achievements in this game
     * @type {number}
     */
    this.totalPoints = parseInt(data.total_points, 10) || 0;
    /**
     * Total legacy points possible from all achievements in this game
     * @type {number}
     */
    this.totalLegacyPoints = parseInt(data.total_legacy_points, 10) || 0;
    /**
     * @type {Achievement[]}
     */
    this.achievements = Object.entries({ ...(data.one_time || {}), ...(data.tiered || {}) }).map(([name, data]) => new Achievement(name, data));
  }
}

/**
 * @typedef {import('../../utils/Constants.js').gamesStatic} StaticGameNames
 */
module.exports = GameAchievements;
