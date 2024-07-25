const divide = require('../../utils/divide');

// eslint-disable-next-line jsdoc/require-jsdoc
function getStarLevel(kills, wins) {
  const sum = Number(kills) + wins * 10;
  let starLevel = 1;
  const sums = [0, 1, 6, 21, 46, 96, 171, 271, 521, 1021, 1321, 1621, 1921, 2221, 2521, Infinity];
  starLevel += sums.map((x) => x * 10 - sum).findIndex((x) => 0 < x) - 1;
  return starLevel;
}

class UHCGamemode {
  /**
   * @param {object} data UHC data
   * @param {string} mode UHC Mode Name
   */
  constructor(data, mode) {
    if (mode) mode = `_${mode}`;
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`kills${mode}`] || 0;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`deaths${mode}`] || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins${mode}`] || 0;
    /**
     * Golden Heads Eaten
     * @type {number}
     */
    this.headsEaten = data[`heads_eaten${mode}`] || 0;
    /**
     * Ultimates Crafted
     * @type {number}
     */
    this.ultimatesCrafted = data[`ultimates_crafted${mode}`] || 0;
    /**
     * Extra Ultimates Crafted
     * @type {number}
     */
    this.extraUltimatesCrafted = data[`extra_ultimates_crafted${mode}`] || 0;
  }
}

/**
 * UHC class
 */
class UHC {
  /**
   * @param {object} data UHC data
   */
  constructor(data) {
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
     * Selected Kit
     * @type {string}
     */
    this.kit = data.equippedKit || '';
    /**
     * Solo
     * @type {UHCGamemode}
     */
    this.solo = new UHCGamemode(data, 'solo');
    /**
     * Teams
     * @type {UHCGamemode}
     */
    this.team = new UHCGamemode(data);
    /**
     * Red vs Blue
     * @type {UHCGamemode}
     */
    this.redVsBlue = new UHCGamemode(data, 'red_vs_blue');
    /**
     * No Diamond
     * @type {UHCGamemode}
     */
    this.noDiamond = new UHCGamemode(data, 'no_diamonds');
    /**
     * Brawl
     * @type {UHCGamemode}
     */
    this.brawl = new UHCGamemode(data, 'brawl');
    /**
     * Solo brawl
     * @type {UHCGamemode}
     */
    this.soloBrawl = new UHCGamemode(data, 'solo_brawl');
    /**
     * Duo Brawl
     * @type {UHCGamemode}
     */
    this.duoBrawl = new UHCGamemode(data, 'duo_brawl');
    /**
     * Wins
     * @type {number}
     */
    this.wins =
      this.solo.wins +
      this.team.wins +
      this.redVsBlue.wins +
      this.noDiamond.wins +
      this.brawl.wins +
      this.soloBrawl.wins +
      this.duoBrawl.wins;
    /**
     * Kills
     * @type {number}
     */
    this.kills =
      this.solo.kills +
      this.team.kills +
      this.redVsBlue.kills +
      this.noDiamond.kills +
      this.brawl.kills +
      this.soloBrawl.kills +
      this.duoBrawl.kills;
    /**
     * Deaths
     * @type {number}
     */
    this.deaths =
      this.solo.deaths +
      this.team.deaths +
      this.redVsBlue.deaths +
      this.noDiamond.deaths +
      this.brawl.deaths +
      this.soloBrawl.deaths +
      this.duoBrawl.deaths;
    /**
     * Kill/Death ratio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Heads eaten
     * @type {number}
     */
    this.headsEaten =
      this.solo.headsEaten +
      this.team.headsEaten +
      this.redVsBlue.headsEaten +
      this.noDiamond.headsEaten +
      this.brawl.headsEaten +
      this.soloBrawl.headsEaten +
      this.duoBrawl.headsEaten;
    /**
     * Ultimates Crafted
     * @type {number}
     */
    this.ultimatesCrafted =
      this.solo.ultimatesCrafted +
      this.team.ultimatesCrafted +
      this.redVsBlue.ultimatesCrafted +
      this.noDiamond.ultimatesCrafted +
      this.brawl.ultimatesCrafted +
      this.soloBrawl.ultimatesCrafted +
      this.duoBrawl.ultimatesCrafted;
    /**
     * Extra Ultimates Crafted
     * @type {number}
     */
    this.extraUltimatesCrafted =
      this.solo.extraUltimatesCrafted +
      this.team.extraUltimatesCrafted +
      this.redVsBlue.extraUltimatesCrafted +
      this.noDiamond.extraUltimatesCrafted +
      this.brawl.extraUltimatesCrafted +
      this.soloBrawl.extraUltimatesCrafted +
      this.duoBrawl.extraUltimatesCrafted;
    /**
     * Star level
     * @type {number}
     */
    this.starLevel = getStarLevel(this.kills, this.wins);
  }
}
module.exports = UHC;
