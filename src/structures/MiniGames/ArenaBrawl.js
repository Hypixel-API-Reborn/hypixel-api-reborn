const divide = require('../../utils/divide');

class ArenaBrawlMode {
  /**
   * @param {object} data ArenaBrawl data
   * @param {string} mode mode
   */
  constructor(data, mode) {
    /**
     * Damage
     * @type {number}
     */
    this.damage = data[`damage_${mode}`];
    /**
     * Kills
     * @type {number}
     */
    this.kills = data[`kills_${mode}`];
    /**
     * Deaths
     * @type {number}
     */
    this.deaths = data[`deaths_${mode}`];
    /**
     * KDRatio
     * @type {number}
     */
    this.KDRatio = divide(this.kills, this.deaths);
    /**
     * Healed
     * @type {number}
     */
    this.healed = data[`healed_${mode}`];
    /**
     * Wins
     * @type {number}
     */
    this.wins = data[`wins_${mode}`];
    /**
     * Losses
     * @type {number}
     */
    this.losses = data[`losses_${mode}`];
    /**
     * WLRatio
     * @type {number}
     */
    this.WLRatio = divide(this.wins, this.losses);
    /**
     * Games Played
     * @type {number}
     */
    this.games = data[`games_${mode}`];
    /**
     * Winstreak
     * @type {number}
     */
    this.winstreak = data[`win_streaks_${mode}`];
  }
}

/**
 * ArenaBrawl class
 */
class ArenaBrawl {
  /**
   * @param {object} data ArenaBrawl data
   */
  constructor(data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * Coins Spent
     * @type {number}
     */
    this.coinsSpent = data.coins_spent || 0;
    /**
     * Wins
     * @type {number}
     */
    this.wins = data.wins || 0;
    /**
     * Keys
     * @type {number}
     */
    this.keys = data.keys || 0;
    /**
     * Chests
     * @type {number}
     */
    this.chests = data.magical_chest || 0;
    /**
     * Rune
     * @type {string}
     */
    this.rune = data.active_rune || '';
    /**
     * ArenaBrawl mode stats
     * @type {ArenaBrawlMode}
     */
    this['1v1'] = new ArenaBrawlMode(data, '1v1');
    /**
     * ArenaBrawl mode stats
     * @type {ArenaBrawlMode}
     */
    this['2v2'] = new ArenaBrawlMode(data, '2v2');
    /**
     * ArenaBrawl mode stats
     * @type {ArenaBrawlMode}
     */
    this['4v4'] = new ArenaBrawlMode(data, '4v4');
  }
}

module.exports = ArenaBrawl;
