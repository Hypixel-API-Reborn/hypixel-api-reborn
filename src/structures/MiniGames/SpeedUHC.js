const divide = require('../../utils/divide');
class SpeedUHC {
  constructor (data) {
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.playedGames = data.games || 0;
    this.winstreak = data.win_streak || 0;
  }
}
module.exports = SpeedUHC;
