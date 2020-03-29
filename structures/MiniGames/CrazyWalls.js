class CrazyWalls {
	constructor(data) {
		this.coins = data.coins || 0;
		this.winstreak = data.win_streak || 0;
        
		this.kills = data.kills || 0;
		this.deaths = data.deaths || 0;
		this.KDRatio = Math.round((this.kills / this.deaths) * 100) / 100;
        
		this.wins = data.wins || 0;
		this.losses = data.losses || 0;
		this.WLRatio = Math.round((this.wins / this.losses) * 100) / 100;

		this.solo = {
			normal: {
				kills: data.crazywalls_kills_solo || 0,
				deaths: data.crazywalls_deaths_solo,
				KDRatio: Math.round(((data.crazywalls_kills_solo || 0) / (data.crazywalls_deaths_solo || 0)) * 100) / 100,
				wins: data.crazywalls_wins_solo || 0,
				losses: data.crazywalls_losses_solo || 0
			},
			lucky: {
				kills: data.crazywalls_kills_solo_chaos || 0,
				deaths: data.crazywalls_deaths_solo_chaos || 0,
				KDRatio: Math.round(((data.crazywalls_kills_solo_chaos || 0) / (data.crazywalls_deaths_solo_chaos || 0)) * 100) / 100,
				wins: data.crazywalls_wins_solo_chaos || 0,
				losses: data.crazywalls_losses_solo_chaos || 0
			}
		};

		this.team = {
			normal: {
				kills: data.crazywalls_kills_team || 0,
				deaths: data.crazywalls_deaths_team,
				KDRatio: Math.round(((data.crazywalls_kills_team || 0) / (data.crazywalls_deaths_team || 0)) * 100) / 100,
				wins: data.crazywalls_wins_team || 0,
				losses: data.crazywalls_losses_team || 0
			},
			lucky: {
				kills: data.crazywalls_kills_team_chaos || 0,
				deaths: data.crazywalls_deaths_team_chaos || 0,
				KDRatio: Math.round(((data.crazywalls_kills_team_chaos || 0) / (data.crazywalls_deaths_team_chaos || 0)) * 100) / 100,
				wins: data.crazywalls_wins_team_chaos || 0,
				losses: data.crazywalls_losses_team_chaos || 0
			}
		};
	}
}
module.exports = CrazyWalls;