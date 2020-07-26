const divide = require('../../utils/divide');
class CopsAndCrims {
  constructor (data) {
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.game_wins || 0;
    this.roundWins = data.round_wins || 0;
    this.shotsFired = data.shots_fired || 0;
    this.headshotKills = data.headshot_kills || 0;
    this.bombsDefused = data.bombs_defused || 0;
    this.bombsPlanted = data.bombs_planted || 0;
    this.killsAsCrim = data.criminal_kills || 0;
    this.killsAsCop = data.cop_kills || 0;
    this.deathmatch = {
      kills: data.kills_deathmatch || 0,
      deaths: data.deaths_deathmatch || 0,
      killsAsCrim: data.criminal_kills_deathmatch || 0,
      killsAsCop: data.cop_kills_deathmatch || 0
    };
  }
}
module.exports = CopsAndCrims;
