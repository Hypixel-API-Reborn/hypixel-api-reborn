const Game = require('../Game');

class Booster {
  constructor (data) {
    this.purchaser = data.purchaserUuid;
    this.amount = data.amount;
    this.originalLength = data.originalLength;
    this.remaining = data.length;
    this.activatedTimestamp = data.dateActivated;
    this.activated = new Date(data.Activated);
    this.game = data.gameType ? new Game(data.gameType) : null;
  }
}
module.exports = Booster;
