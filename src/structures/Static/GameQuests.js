const Quest = require('./Quest');

/**
 * Game quests class
 */
class GameQuests {
  /**
   * @param {string} name game name
   * @param {object} data data
   * @example
   */
  constructor(name, data) {
    /**
     * Name of game
     * @type {StaticGameNames}
     */
    this.game = name;
    /**
     * @type {Quest[]}
     */
    this.quests = (data || []).map((x) => new Quest(x));
  }
}

module.exports = GameQuests;
