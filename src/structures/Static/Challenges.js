const GameChallenges = require('./GameChallenges.js');
/**
 * Achievement class
 */
class Challenges {
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
     * @type {Record<StaticGameNames, GameChallenges>}
     */
    this.challengesPerGame = Object.fromEntries(Object.entries(data.challenges).map((game, data) => [game, new GameChallenges(game, data)]));
  }
}

/**
 * @typedef {import('../../utils/Constants.js').gamesStatic} StaticGameNames
 */

module.exports = Challenges;
