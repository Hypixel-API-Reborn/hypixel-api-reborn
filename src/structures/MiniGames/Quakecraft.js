const divide = require('../../utils/divide');
/**
 * Quakecraft class
 */
class Quakecraft {
  /**
   * @param {object} data Quakecraft data
   */
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = ((data.kills || 0) + (data.kills_teams || 0));
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = ((data.deaths || 0) + (data.deaths_teams || 0));
    /**
     * Kill Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = ((data.wins || 0) + (data.wins_teams || 0));
    /**
     * Distance travelled
     * @type {number}
     */
    this.distanceTravelled = (data.distance_travelled + data.distance_travelled_teams) || 0;
    /**
     * Headshots
     * @type {number}
     */
    this.headshots = ((data.headshots || 0) + (data.headshots_teams || 0));
    /**
     * Shots fired
     * @type {number}
     */
    this.shotsFired = ((data.shots_fired || 0) + (data.shots_fired_teams || 0));
    /**
     * Kill streaks
     * @type {number}
     */
    this.killstreaks = ((data.killstreaks || 0) + (data.killstreaks_teams || 0));
    /**
     * Highest killstreak
     * @type {number}
     */
    this.highestKillstreak = data.highest_killstreak || 0;
    /**
     * Solo
     * @type {QuakecraftModeStats}
     */
    this.solo = {
      kills: data.kills || 0,
      deaths: data.deaths|| 0,
      KDRatio: divide((data.kills), (data.deaths)),
      wins: data.wins || 0,
      distanceTravelled: data.distance_travelled || 0,
      headshots: data.headshots || 0,
      shotsFired: data.shots_fired || 0,
      killstreaks: data.killstreaks || 0
    };
    /**
     * Teams
     * @type {QuakecraftModeStats}
     */
    this.teams = {
      kills: data.kills_teams || 0,
      deaths: data.deaths_teams || 0,
      KDRatio: divide(data.kills_teams, data.deaths_teams),
      wins: data.wins_teams || 0,
      distanceTravelled: data.distance_travelled_teams || 0,
      headshots: data.headshots_teams || 0,
      shotsFired: data.shots_fired_teams || 0,
      killstreaks: data.killstreaks_teams || 0
    };
  }
}
module.exports = Quakecraft;
/**
 * @typedef {object} QuakecraftModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} KDRatio Kill Death ratio
 * @property {number} wins Wins
 * @property {number} distanceTravelled Distance travelled
 * @property {number} headshots Headshots
 * @property {number} killstreaks Killstreaks
 * @property {number} shotsFired Shots fired
 */
