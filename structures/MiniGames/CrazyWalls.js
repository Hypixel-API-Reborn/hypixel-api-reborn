class CrazyWalls {
    constructor(data) {
        this.coins = data.coins || 0;
        this.winstreak = data.win_streak || 0;
        
        this.kills = data.kills;
        this.deaths = data.deaths;
        this.KDRatio = Math.round((this.kills / this.deaths) * 100) / 100;
        
        this.wins = data.wins;
        this.losses = data.losses;
        this.WLRatio = Math.round((this.wins / this.losses) * 100) / 100;

        this.solo = {
            normal: {
                kills: data.crazywalls_kills_solo_chaos,
                deaths: data.crazywalls_deaths_solo_chaos,
                KDRatio: Math.round(((data.crazywalls_kills_solo_chaos || 0) / (data.crazywalls_deaths_solo_chaos || 0)) * 100) / 100,
                wins: data.crazywalls_wins_solo_chaos,
                losses: data.crazywalls_losses_solo_chaos
            },
            lucky: {

            }
        }

        this.team = {
            normal: {

            },
            lucky: {

            }
        }
    }
}
module.exports = CrazyWalls;