const divide = require('../../utils/divide');
/**
 * UHC class
 * @param {object} data UHC data
 */
class UHC {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Score
     * @type {number}
     */
    this.score = data.score || 0;
    /**
     * Kills
     * @type {number}
     */
    this.kills = (data.kills || 0) + (data.kills_solo || 0) + (data['kills_red vs blue'] || 0) + (data['kills_no diamonds'] || 0) + (data.kills_brawl || 0) + (data['kills_solo brawl'] || 0) + (data['kills_duo brawl'] || 0);
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = (data.deaths || 0) + (data.deaths_solo || 0) + (data['deaths_red vs blue'] || 0) + (data['deaths_no diamonds'] || 0) + (data.deaths_brawl || 0) + (data['deaths_solo brawl'] || 0) + (data['deaths_duo brawl'] || 0);
    /**
     * Kill/Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Wins
     * @type {number}
     */
    this.wins = (data.wins || 0) + (data.wins_solo || 0) + (data['wins_red vs blue'] || 0) + (data['wins_no diamonds'] || 0) + (data.wins_brawl || 0) + (data['wins_solo brawl'] || 0) + (data['wins_duo brawl'] || 0);
    /**
     * Heads eaten
     * @type {number}
     */
    this.headsEaten = (data.heads_eaten || 0) + (data.heads_eaten_solo || 0) + (data['heads_eaten_red vs blue'] || 0) + (data['heads_eaten_no diamonds'] || 0) + (data.heads_eaten_brawl || 0) + (data['heads_eaten_solo brawl'] || 0) + (data['heads_eaten_duo brawl'] || 0);
    /**
     * Star level
     * @type {number}
     */
    this.starLevel = getStarLevel(data);
    /**
     * Solo
     * @type {UHCModeStats}
     */
    this.solo = {
      kills: data.kills_solo || 0,
      deaths: data.deaths_solo || 0,
      wins: data.wins_solo || 0,
      headsEaten: data.heads_eaten_solo || 0
    };
    /**
     * Team
     * @type {UHCModeStats}
     */
    this.team = {
      kills: data.kills || 0,
      deaths: data.deaths || 0,
      wins: data.wins || 0,
      headsEaten: data.heads_eaten || 0
    };
    /**
     * Red vs Blue
     * @type {UHCModeStats}
     */
    this.redVsBlue = {
      kills: data['kills_red vs blue'] || 0,
      deaths: data['deaths_red vs blue'] || 0,
      wins: data['wins_red vs blue'] || 0,
      headsEaten: data['heads_eaten_red vs blue'] || 0
    };
    /**
     * No Diamond
     * @type {UHCModeStats}
     */
    this.noDiamond = {
      kills: data['kills_no diamonds'] || 0,
      deaths: data['deaths_no diamonds'] || 0,
      wins: data['wins_no diamonds'] || 0,
      headsEaten: data['heads_eaten_no diamonds'] || 0
    };
    /**
     * Brawl
     * @type {UHCModeStats}
     */
    this.brawl = {
      kills: data.kills_brawl || 0,
      deaths: data.deaths_brawl || 0,
      wins: data.wins_brawl || 0,
      headsEaten: data.heads_eaten_brawl || 0
    };
    /**
     * Solo brawl
     * @type {UHCModeStats}
     */
    this.soloBrawl = {
      kills: data['kills_solo brawl'] || 0,
      deaths: data['deaths_solo brawl'] || 0,
      wins: data['wins_solo brawl'] || 0,
      headsEaten: data['heads_eaten_solo brawl'] || 0
    };
    /**
     * Duo Brawl
     * @type {UHCModeStats}
     */
    this.duoBrawl = {
      kills: data['kills_duo brawl'] || 0,
      deaths: data['deaths_duo brawl'] || 0,
      wins: data['wins_duo brawl'] || 0,
      headsEaten: data['heads_eaten_duo brawl'] || 0
    };
  }
}
function getStarLevel (data) {
  const kills = (data.kills || 0) + (data.kills_solo || 0) + (data['kills_red vs blue'] || 0) + (data['kills_no diamonds'] || 0) + (data.kills_brawl || 0) + (data['kills_solo brawl'] || 0) + (data['kills_duo brawl'] || 0);
  const wins = (data.wins || 0) + (data.wins_solo || 0) + (data['wins_red vs blue'] || 0) + (data['wins_no diamonds'] || 0) + (data.wins_brawl || 0) + (data['wins_solo brawl'] || 0) + (data['wins_duo brawl'] || 0);
  const sum = ((kills * 1) + (wins * 10));
  let starLevel = 1;
  const sums = [0, 1, 6, 21, 46, 96, 171, 271, 521, 1021, 1321, 1621, 1921, 2221, 2521, Infinity];
  starLevel += sums.map(x => x * 10 - sum).findIndex(x => x > 0) - 1;
  return starLevel;
}
/**
 * @typedef {object} UHCModeStats
 * @property {number} kills Kills
 * @property {number} deaths Deaths
 * @property {number} wins Wins
 * @property {number} headsEaten Heads eaten
 */
module.exports = UHC;
