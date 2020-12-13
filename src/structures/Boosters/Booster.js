const Game = require('../Game');

class Booster {
  constructor (data) {
    /**
     * Booster purchaser's UUID
     * @type {String}
     */
    this.purchaser = data.purchaserUuid;
    /**
     * Booster multiplier
     * @type {Number}
     */
    this.amount = data.amount;
    /**
     * Booster length in seconds
     * @type {Number}
     */
    this.originalLength = data.originalLength;
    /**
     * Length remaining in seconds
     * @type {Number}
     */
    this.remaining = data.length;
    /**
     * Date activated timestamp
     * @type {Number}
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
  }
}
module.exports = Booster;
