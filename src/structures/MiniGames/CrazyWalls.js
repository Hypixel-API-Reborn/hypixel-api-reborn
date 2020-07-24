const divide = require('../../utils/divide');
class CrazyWalls {
  constructor (data) {
    this.coins = data.coins || 0;
    this.winstreak = data.win_streak || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.solo = {
      normal: {
        kills: data.crazywalls_kills_solo || 0,
        deaths: data.crazywalls_deaths_solo,
        KDRatio: divide(data.crazywalls_kills_solo, data.crazywalls_deaths_solo),
        wins: data.crazywalls_wins_solo || 0,
        losses: data.crazywalls_losses_solo || 0,
        WLRatio: divide(data.crazywalls_wins_solo, data.crazywalls_losses_solo)
      },
      lucky: {
        kills: data.crazywalls_kills_solo_chaos || 0,
        deaths: data.crazywalls_deaths_solo_chaos || 0,
        KDRatio: divide(data.crazywalls_kills_solo_chaos, data.crazywalls_deaths_solo_chaos),
        wins: data.crazywalls_wins_solo_chaos || 0,
        losses: data.crazywalls_losses_solo_chaos || 0,
        WLRatio: divide(data.crazywalls_wins_solo_chaos, data.crazywalls_losses_solo_chaos)
      }
    };
    this.team = {
      normal: {
        kills: data.crazywalls_kills_team || 0,
        deaths: data.crazywalls_deaths_team || 0,
        KDRatio: divide(data.crazywalls_kills_team, data.crazywalls_deaths_team),
        wins: data.crazywalls_wins_team || 0,
        losses: data.crazywalls_losses_team || 0,
        WLRatio: divide(data.crazywalls_wins_team, data.crazywalls_losses_team)
      },
      lucky: {
        kills: data.crazywalls_kills_team_chaos || 0,
        deaths: data.crazywalls_deaths_team_chaos || 0,
        KDRatio: divide(data.crazywalls_kills_team_chaos, data.crazywalls_deaths_team_chaos),
        wins: data.crazywalls_wins_team_chaos || 0,
        losses: data.crazywalls_losses_team_chaos || 0,
        WLRatio: divide(data.crazywalls_wins_team_chaos, data.crazywalls_losses_team_chaos)
      }
    };
  }
}
module.exports = CrazyWalls;
