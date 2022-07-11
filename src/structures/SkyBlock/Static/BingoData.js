const Bingo = require('./Bingo.js');

/**
 * SB Bingo Class
 */
class BingoData {
  /**
   * constructor
   * @param {Object} data
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
     * Bingo ID
     * @type {number|null}
     */
    this.id = parseInt(data.id, 10) || null;
    /**
     * Goals
     * @type {Bingo[]|null}
     */
    this.goals = Array.isArray(data.goals) ? data.goals.map((goal, index) => new Bingo(goal, index)) : null;
  }
  /**
   * Gets a goal on the bingo table by row and column
   * @param {number} column Column number (starts at 1)
   * @param {number} row Row number (starts at 1)
   * @returns {Bingo|undefined}
   */
  getGoal(column, row) {
    if (!this.goals || this.goals.length < 1) return;
    return this.goals.find((goal) => goal.row === row && goal.column === column);
  }
}

module.exports = BingoData;
