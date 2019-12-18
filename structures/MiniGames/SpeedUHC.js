class SpeedUHC {
    constructor(data) {
        this.coins = data.coins;
        this.wins = data.wins;
        this.kills = data.kills;
        this.playedGames = data.games;
        this.winstreak = data.winstreak;
        this.deaths = data.deaths;
        this.KDRatio = Math.round((data.kills / data.deaths) * 100) / 100;
        this.WLRatio = Math.round((data.wins / data.losses) * 100) / 100; 
    }
}
module.exports = SpeedUHC;