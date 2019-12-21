class MurderMystery {
    constructor(data) {
        this.coins = data.coins;
        this.playedGames = data.games;
        this.kills = data.kills;
        this.deaths = data.deaths;
        this.winsAsMurderer = data.murderer_wins;
        this.winsAsDetective = data.detective_wins;
        this.wins = data.wins;

        this.assassins = {
            wins: data.games_MURDER_ASSASSINS,
            kills: data.kills_MURDER_ASSASSINS,
            deaths: data.deaths_MURDER_ASSASSINS,
            playedGames: data.games_MURDER_ASSASSINS,
        }
        this.doubleUp = {
            wins: data.games_MURDER_DOUBLE_UP,
            kills: data.kills_MURDER_DOUBLE_UP,
            deaths: data.deaths_MURDER_DOUBLE_UP,
            playedGames: data.games_MURDER_DOUBLE_UP,
        }
        this.infection = {
            wins: data.games_MURDER_INFECTION,
            kills: data.kills_MURDER_INFECTION,
            deaths: data.deaths_MURDER_INFECTION,
            playedGames: data.games_MURDER_INFECTION,
        }
    }
}
module.exports = MurderMystery;