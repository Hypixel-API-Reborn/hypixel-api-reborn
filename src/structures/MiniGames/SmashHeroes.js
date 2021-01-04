const divide = require('../../utils/divide');
/**
 * SmashHeroes class
 * @param {object} data SmashHeroes data
 */
class SmashHeroes {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Level
     * @type {number}
     */
    this.level = data.smash_level_total || 0;
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data.win_streak || 0;
    /**
     * Played games
     * @type {number}
     */
    this.playedGames = data.games || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.kills || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data.deaths || 0;
    /**
     * Kill/Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Losses
     * @type {number}
     */
    this.losses = data.losses || 0;
    /**
     * Win/Loss ratio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Stats for each mode
     * @type {SmashHeroesModes}
     */
    this.mode = {
      '1v1v1v1': generateModeStats(data, 'normal'),
      '2v2': generateModeStats(data, '2v2'),
      '2v2v2': generateModeStats(data, 'teams')
    };
    /**
     * Active class
     * @type {string}
     */
    this.activeClass = data.active_class ? data.active_class : null;
    /**
     * Stats for each class
     * @type {SmashHeroesClassStats[]|null}
     */
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
  for (const hero in data.class_stats) {
    stats.push({
      name: hero,
      level: data[`lastLevel_${hero}`] || 0,
      xp: data[`xp_${hero}`] || 0,
      prestige: data[`pg_${hero}`] || 0,
      playedGames: data.class_stats[hero].games || 0,
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
/**
 * @typedef {object} SmashHeroesModes
 * @property {SmashHeroesModeStats} '1v1v1v1' 1v1v1v1
 * @property {SmashHeroesModeStats} '2v2' 2v2
 * @property {SmashHeroesModeStats} '2v2v2' 2v2v2
 */
/**
 * @typedef {object} SmashHeroesModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} WLRatio Win/Loss ratio
 */
/**
 * @typedef {object} SmashHeroesClassStats
 * @property {string} name Name
 * @property {number} level Level
 * @property {number} xp XP
 * @property {number} prestige Prestige
 * @property {number} playedGames Played games
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill/Death ratio
 * @property {number} wins Wins
 * @property {number} losses Losses
 * @property {number} WLRatio Win/Loss ratio
 */
module.exports = SmashHeroes;
