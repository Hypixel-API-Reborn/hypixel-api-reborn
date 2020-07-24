const divide = require('../../utils/divide');
class MegaWalls {
  constructor (data) {
    this.selectedClass = data.chosen_class || null;
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.assists = data.assists || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.finalKills = data.final_kills || 0;
    this.finalAssists = data.final_assists || 0;
    this.finalDeaths = isNaN(data.final_deaths + data.finalDeaths) ? 0 : Math.floor(data.final_deaths + data.finalDeaths);
    this.playedGames = data.games_played || 0;
    this.witherDamage = data.wither_damage || 0;
    this.defenderKills = data.defender_kills || 0;
    this.mode = {
      normal: {
        kills: data.kills_standard || 0,
        deaths: data.deaths_standard || 0,
        wins: data.wins_standard || 0,
        losses: data.losses_standard || 0
      },
      faceoff: {
        kills: data.kills_face_off || 0,
        deaths: data.deaths_face_off || 0,
        wins: data.wins_face_off || 0,
        losses: data.losses_face_off || 0
      },
      casualBrawl: {
        kills: data.kills_gvg || 0,
        deaths: data.deaths_gvg || 0,
        wins: data.wins_gvg || 0,
        losses: data.losses_gvg || 0
      }
    };
  }
}
module.exports = MegaWalls;
