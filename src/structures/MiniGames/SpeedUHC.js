class SpeedUHC {
  constructor (data) {
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = Math.round(((this.kills || 0) / (this.deaths || 0)) * 100) / 100;
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = Math.round(((this.wins || 0) / (this.losses || 0)) * 100) / 100;
    this.playedGames = data.games || 0;
    this.winstreak = data.win_streak || 0;
  }
}
module.exports = SpeedUHC;
