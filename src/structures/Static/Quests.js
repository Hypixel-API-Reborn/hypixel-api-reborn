const GameQuests = require('./GameQuests.js');

/**
 * Quest class
 */
class Quests {
  /**
   * @param {object} data data
   * @example
   */
  constructor(data) {
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
     * Quests per game
     * @type {Record<StaticGameNames, GameQuests>}
     */
    this.questsPerGame = Object.fromEntries(
      Object.entries(data.quests).map(([game, data]) => [game, new GameQuests(game, data)])
    );
  }
}

module.exports = Quests;
