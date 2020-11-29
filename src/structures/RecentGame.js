const Game = require('./Game');
class RecentGame extends Game {
  constructor (data) {
    super(data.gameType);
    this.date = data.date || null;
    this.at = data.date ? new Date(data.date) : null;
    this.mode = data.mode || null;
    this.map = data.map || null;
    // Per hypixel API docs : if ended isn't present, the game is ONGOING.
    this.endedAt = data.ended ? new Date(data.ended) : null;
    this.endedTimestamp = data.ended ? data.ended : null;
  }
}
module.exports = RecentGame;
