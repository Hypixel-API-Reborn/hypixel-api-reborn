const GameAchievements = require('./GameAchievements.js');

/**
 * Achievement class
 */
class Achievements {
  /**
   * @param {object} data data
   */
  constructor (data) {
    /**
     * Last time this resource was updated
     * @type {number}
     */
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    /**
     * Last time this resource was updated, as Date
     * @type {Date|null}
     */
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    /**
     * @type {Record<StaticGameNames, GameAchievements>}
     */
    this.achievementsPerGame = Object.fromEntries(Object.entries(data.achievements).map((game, data) => [game, new GameAchievements(game, data)]));
  }
}

/**
 * @typedef {import('../../utils/Constants.js').gamesStatic} StaticGameNames
 */

module.exports = Achievements;
