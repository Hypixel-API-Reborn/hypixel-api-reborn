const divide = require('../../utils/divide');
class SmashHeroes {
  constructor (data) {
    this.coins = data.coins || 0;
    this.level = data.smash_level_total || 0;
    this.winstreak = data.win_streak || 0;
    this.games = data.games || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.quits = data.quits || 0;
    this.mode = {
      '1v1v1v1': generateModeStats(data, 'normal'),
      '2v2': generateModeStats(data, '2v2'),
      '2v2v2': generateModeStats(data, 'teams')
    };
    this.activeClass = data.active_class ? data.active_class : null;
    this.heroStats = data.class_stats ? generateHeroStats(data) : null;
  }
}
function generateModeStats (data, mode) {
  return {
    kills: data[`kills_${mode}`] || 0,
    deaths: data[`deaths_${mode}`] || 0,
    KDRatio: divide(data[`kills_${mode}`], data[`deaths_${mode}`]),
    wins: data[`wins_${mode}`] || 0,
    losses: data[`losses_${mode}`] || 0,
    WLRatio: divide(data[`wins_${mode}`], data[`losses_${mode}`])
  };
}
function generateHeroStats (data) {
  // eslint-disable-next-line no-useless-return
  const stats = [];
  if (!data.class_stats) return;
  for (const hero in data.class_stats) {
    stats.push({
      name: hero,
      level: data[`lastLevel_${hero}`] || 0,
      xp: data[`xp_${hero}`] || 0,
      prestige: data[`pg_${hero}`] || 0,
      games: data.class_stats[hero].games || 0,
      kills: data.class_stats[hero].kills || 0,
      deaths: data.class_stats[hero].deaths || 0,
      KDRatio: divide(data.class_stats[hero].kills, data.class_stats[hero].deaths),
      wins: data.class_stats[hero].wins || 0,
      losses: data.class_stats[hero].losses || 0,
      WLRatio: divide(data.class_stats[hero].wins, data.class_stats[hero].losses)
    });
  }
  return stats;
}
module.exports = SmashHeroes;
