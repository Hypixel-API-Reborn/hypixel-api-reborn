class CrazyWalls {
  constructor (data) {
    this.coins = data.coins || 0;
    this.winstreak = data.win_streak || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = isNaN((this.kills / this.deaths)) ? 0 : Math.round((this.kills / this.deaths) * 100) / 100;
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = isNaN((this.wins / this.losses)) ? 0 : Math.round((this.wins / this.losses) * 100) / 100;
    this.solo = {
      normal: {
        kills: data.crazywalls_kills_solo || 0,
        deaths: data.crazywalls_deaths_solo,
        KDRatio: isNaN((data.crazywalls_kills_solo || 0) / (data.crazywalls_deaths_solo || 0)) ? 0 : Math.round(((data.crazywalls_kills_solo) / (data.crazywalls_deaths_solo)) * 100) / 100,
        wins: data.crazywalls_wins_solo || 0,
        losses: data.crazywalls_losses_solo || 0,
        WLRatio: isNaN((data.crazywalls_wins_solo || 0) / (data.crazywalls_losses_solo || 0)) ? 0 : Math.round(((data.crazywalls_wins_solo) / (data.crazywalls_losses_solo)) * 100) / 100
      },
      lucky: {
        kills: data.crazywalls_kills_solo_chaos || 0,
        deaths: data.crazywalls_deaths_solo_chaos || 0,
        KDRatio: isNaN((data.crazywalls_kills_solo_chaos || 0) / (data.crazywalls_deaths_solo_chaos || 0)) ? 0 : Math.round((((data.crazywalls_kills_solo_chaos) / (data.crazywalls_deaths_solo_chaos))) * 100) / 100,
        wins: data.crazywalls_wins_solo_chaos || 0,
        losses: data.crazywalls_losses_solo_chaos || 0,
        WLRatio: isNaN((data.crazywalls_wins_solo_chaos || 0) / (data.crazywalls_losses_solo_chaos || 0)) ? 0 : Math.round(((data.crazywalls_wins_solo_chaos) / (data.crazywalls_losses_solo_chaos)) * 100) / 100
      }
    };
    this.team = {
      normal: {
        kills: data.crazywalls_kills_team || 0,
        deaths: data.crazywalls_deaths_team || 0,
        KDRatio: isNaN((data.crazywalls_kills_team || 0) / (data.crazywalls_deaths_team || 0)) ? 0 : Math.round(((data.crazywalls_kills_team) / (data.crazywalls_deaths_team)) * 100) / 100,
        wins: data.crazywalls_wins_team || 0,
        losses: data.crazywalls_losses_team || 0,
        WLRatio: isNaN((data.crazywalls_wins_team || 0) / (data.crazywalls_losses_team || 0)) ? 0 : Math.round(((data.crazywalls_wins_team) / (data.crazywalls_losses_team)) * 100) / 100
      },
      lucky: {
        kills: data.crazywalls_kills_team_chaos || 0,
        deaths: data.crazywalls_deaths_team_chaos || 0,
        KDRatio: isNaN((data.crazywalls_kills_team_chaos || 0) / (data.crazywalls_deaths_team_chaos || 0)) ? 0 : Math.round(((data.crazywalls_kills_team_chaos) / (data.crazywalls_deaths_team_chaos)) * 100) / 100,
        wins: data.crazywalls_wins_team_chaos || 0,
        losses: data.crazywalls_losses_team_chaos || 0,
        WLRatio: isNaN((data.crazywalls_wins_team_chaos || 0) / (data.crazywalls_losses_team_chaos || 0)) ? 0 : Math.round(((data.crazywalls_wins_team_chaos) / (data.crazywalls_losses_team_chaos)) * 100) / 100
      }
    };
  }
}
module.exports = CrazyWalls;
