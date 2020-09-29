class Leaderboard {
  constructor (data) {
    this.name = data.prefix || null;
    this.title = data.title || null;
    this.playerCount = data.count || 0;
    this.leaders = data.leaders || [];
  }
};
module.exports = Leaderboard;
