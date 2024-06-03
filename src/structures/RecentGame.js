const Game = require('./Game');
/**
 * RecentGame class
 * @extends {Game}
 */
class RecentGame extends Game {
  /**
   * @param {object} data Recent game data
   * @example
   */
  constructor(data) {
    super(data.gameType);
    /**
     * Date as timestamp
     * @type {number}
     */
    this.dateTimestamp = data.date || null;
    /**
     * Date
     * @type {Date}
     */
    this.date = data.date ? new Date(data.date) : null;
    /**
     * Game mode
     * @type {string}
     */
    this.mode = data.mode || null;
    /**
     * Map
     * @type {string}
     */
    this.map = data.map || null;
    // Per hypixel API docs : if ended isn't present, the game is ONGOING.
    /**
     * Is game ongoing?
     * @type {boolean}
     */
    this.ongoing = Boolean(!data.ended);
    /**
     * Game ended at as Date
     * @type {Date}
     */
    this.endedAt = data.ended ? new Date(data.ended) : null;
    /**
     * Game ended at
     * @type {number}
     */
    this.endedTimestamp = data.ended ? data.ended : null;
  }
  /**
   * Name of gamemode
   * @return {string}
   * @example
   */
  toString() {
    return this.mode;
  }
}
module.exports = RecentGame;
