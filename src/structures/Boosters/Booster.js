const Game = require('../Game');
/**
 * Booster class
 */
class Booster {
  /**
   * @param {object} data
   * @example
   */
  constructor(data) {
    /**
     * Booster's purchaser's UUID
     * @type {string}
     */
    this.purchaser = data.purchaserUuid;
    /**
     * Booster's multiplier
     * @type {number}
     */
    this.amount = data.amount;
    /**
     * Booster's length in seconds
     * @type {number}
     */
    this.originalLength = data.originalLength;
    /**
     * Length remaining in seconds
     * @type {number}
     */
    this.remaining = data.length;
    /**
     * Date activated timestamp
     * @type {number}
     */
    this.activatedTimestamp = data.dateActivated;
    /**
     * Date activated
     * @type {Date}
     */
    this.activated = new Date(data.dateActivated);
    /**
     * Game type
     * @type {Game}
     */
    this.game = data.gameType ? new Game(data.gameType) : null;
    /**
     * Is Booster Active
     * @type {boolean}
     */
    this.isActive = Array.isArray(data.stacked);
    /**
     * Booster type : either 'QUEUED', 'STACKED'* or 'ACTIVE'.
     * *STACKED is always queued, when active, they disappear into stackers of the active game booster
     * @type {string}
     */
    this.type = parseType(data);
    /**
     * Stacked by ( if any )
     * @type {string[]}
     */
    this.stackers = Array.isArray(data.stacked) ? Array.from(data.stacked) : [];
    /**
     * Possibly expired booster
     * Works by checking if date.length is negative
     * @type {boolean}
     */
    this.expired = data.length < 0;
  }
  /**
   * Beautiful format
   * @return {string}
   * @example
   */
  toString() {
    return `${this.purchaser}'s booster in ${this.game}`;
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
function parseType(data) {
  if (data.stacked === true) return 'STACKED';
  if (!data.stacked) return 'QUEUED';
  return 'ACTIVE';
}
module.exports = Booster;
