const divide = require('../../utils/divide');
class VampireZ {
  constructor (data) {
    this.coins = data.coins || 0;
    this.human = {
      kills: data.human_kills || 0,
      deaths: data.human_deaths || 0,
      KDRatio: divide(data.human_kills, data.human_wins),
      wins: data.human_wins || 0
    };
    this.zombie = {
      kills: data.zombie_kills || 0
    };
    this.vampire = {
      kills: data.vampire_kills || 0,
      deaths: data.vampire_deaths || 0,
      KDRatio: divide(data.vampire_kills, data.vampire_wins)
    };
  }
}
module.exports = VampireZ;
