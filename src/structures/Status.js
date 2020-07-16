const Game = require('./Game');
class Status {
  constructor (data) {
    this.online = data.online;
    this.game = data.gameType ? new Game(data.gameType) : null;
    this.mode = data.mode ? data.mode : null;
    this.map = data.map ? data.map : null;
  }
}
module.exports = Status;
