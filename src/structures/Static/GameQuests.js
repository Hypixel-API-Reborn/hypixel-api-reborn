const Quest = require('./Quest');

/**
 * Game quests class
 */
class GameQuests {
  /**
   * @param {string} name game name
   * @param {object} data data
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

/**
 * @typedef {import('../../utils/Constants.js').gamesStatic} StaticGameNames
 */
module.exports = GameQuests;