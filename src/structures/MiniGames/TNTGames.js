const divide = require('../../utils/divide');
class TNTGames {
  constructor (data) {
    this.coins = data.coins || 0;
    this.winstreak = data.winstreal || 0;
    this.wins = data.wins || 0;
    this.tntrun = {
      wins: data.wins_tntrun || 0,
      deaths: data.deaths_tntrun || 0,
      record: data.record_tntrun || 0
    };
    this.pvprun = {
      kills: data.kills_pvprun || 0,
      wins: data.wins_pvprun || 0,
      deaths: data.deaths_pvprun || 0,
      KDRatio: divide(data.kills_pvprun, data.deaths_pvprun),
      record: data.record_pvprun || 0
    };
    this.tnttag = {
      kills: data.kills_tntag || 0,
      wins: data.wins_tntag || 0,
      speed: data.tag_speed || 0
    };
    this.bowspleef = {
      wins: data.wins_bowspleef || 0,
      tags: data.tags_bowspleef || 0,
      deaths: data.deaths_bowspleef || 0
    };
    this.wizards = {
      points: data.points_capture || 0,
      class: (data.capture_class ? data.capture_class : null),
      kills: data.kills_capture || 0,
      assists: data.assists_capture || 0,
      wins: data.wins_capture || 0,
      deaths: data.deaths_capture || 0,
      KDRatio: divide(data.kills_capture, data.deaths_capture)
    };
  }
}
module.exports = TNTGames;
