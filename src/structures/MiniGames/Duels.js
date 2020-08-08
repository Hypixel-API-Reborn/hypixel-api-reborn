const divide = require('../../utils/divide');
class Duels {
  constructor (data) {
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.playedGames = data.games_played_duels || 0;
    this.uhc = {
      v1: {
        kills: data.uhc_duel_kills || 0,
        deaths: data.uhc_duel_deaths || 0,
        wins: data.uhc_duel_wins || 0,
        losses: data.uhc_duel_losses || 0
      },
      v2: {
        kills: data.uhc_doubles_kills || 0,
        deaths: data.uhc_doubles_deaths || 0,
        wins: data.uhc_doubles_wins || 0,
        losses: data.uhc_doubles_losses || 0
      },
      v4: {
        kills: data.uhc_four_kills || 0,
        deaths: data.uhc_four_deaths || 0,
        wins: data.uhc_four_wins || 0,
        losses: data.uhc_four_losses || 0
      }
    };
    this.op = {

      v1: {
        kills: data.op_duel_kills || 0,
        deaths: data.op_duel_deaths || 0,
        wins: data.op_duel_wins || 0,
        losses: data.op_duel_losses || 0
      },
      v2: {
        kills: data.op_doubles_kills || 0,
        deaths: data.op_doubles_deaths || 0,
        wins: data.op_doubles_wins || 0,
        losses: data.op_doubles_losses || 0
      }
    };
    this.skywars = {

      v1: {
        kills: data.sw_duel_kills || 0,
        deaths: data.sw_duel_deaths || 0,
        wins: data.sw_duel_wins || 0,
        losses: data.sw_duel_losses || 0
      },
      v2: {
        kills: data.sw_doubles_kills || 0,
        deaths: data.sw_doubles_deaths || 0,
        wins: data.sw_doubles_wins || 0,
        losses: data.sw_doubles_losses || 0
      }
    };
    this.sumo = {
      kills: data.sumo_duel_kills || 0,
      deaths: data.sumo_duel_deaths || 0,
      wins: data.sumo_duel_wins || 0,
      losses: data.sumo_duel_losses || 0
    };
    this.classic = {
      kills: data.classic_duel_kills || 0,
      deaths: data.classic_duel_deaths || 0,
      wins: data.classic_duel_wins || 0,
      losses: data.classic_duel_losses || 0
    };

    this.combo = {
      kills: data.combo_duel_kills || 0,
      deaths: data.combo_duel_deaths || 0,
      wins: data.combo_duel_wins || 0,
      losses: data.combo_duel_losses || 0
    };
    this.bridge = {

      v1: {
        kills: (data.bridge_duel_kills || data.bridge_duel_bridge_kills) || 0,
        deaths: (data.bridge_duel_deaths || data.bridge_duel_bridge_deaths) || 0,
        wins: data.bridge_duel_wins || 0,
        losses: data.bridge_duel_losses || 0
      },
      v2: {
        kills: (data.bridge_doubles_kills || data.bridge_doubles_bridge_kills) || 0,
        deaths: (data.bridge_doubles_deaths || data.bridge_doubles_bridge_deaths) || 0,
        wins: data.bridge_doubles_wins || 0,
        losses: data.bridge_doubles_losses || 0
      },
      v4: {
        kills: (data.bridge_four_kills || data.bridge_four_bridge_kills) || 0,
        deaths: (data.bridge_four_deaths || data.bridge_four_bridge_deaths) || 0,
        wins: data.bridge_four_wins || 0,
        losses: data.bridge_four_losses || 0
      }
    };
  }
}
module.exports = Duels;
