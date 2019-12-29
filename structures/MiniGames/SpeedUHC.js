class SpeedUHC {
    constructor(data) {
        this.coins = data.coins;
        this.wins = data.wins;
        this.kills = data.kills;
        this.playedGames = data.games;
        this.winstreak = data.winstreak;
        this.deaths = data.deaths;
        this.losses = data.losses
        this.KDRatio = Math.round(((this.kills || 0) / (this.deaths || 0)) * 100) / 100;
        this.WLRatio = Math.round(((this.wins || 0) / (this.losses || 0)) * 100) / 100;
    }
}
module.exports = SpeedUHC;