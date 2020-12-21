const divide = require('../../utils/divide');
/**
 * ArenaBrawl class
 * @param {object} data ArenaBrawl data
 */
class ArenaBrawl {
  constructor (data) {
    /**
     * Coins
     * @type {number}
     */
    this.coins = data.coins || 0;
    /**
     * ArenaBrawl mode stats
     * @type {ArenaBrawlStats}
     */
    this.mode = {
      '1v1': generateModeStats(data, '1v1'),
      '2v2': generateModeStats(data, '2v2'),
      '4v4': generateModeStats(data, '4v4')
    };
  }
}
/**
 * @returns {{kills:number,deaths:number,KDRatio:number,wins:number,losses:number,WLRatio:number}}
 */
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
/**
 * @typedef {Object} ArenaBrawlStats
 * @property {ArenaBrawlModeStats} '1v1' ArenaBrawl 1v1 stats
 * @property {ArenaBrawlModeStats} '2v2' ArenaBrawl 2v2 stats
 * @property {ArenaBrawlModeStats} '4v4' ArenaBrawl 4v4 stats
 */
/**
 * @typedef {Object} ArenaBrawlModeStats
 * @property {number} kills ArenaBrawl kills
 * @property {number} deaths ArenaBrawl deaths
 * @property {number} KDRatio ArenaBrawl Kill Death ratio
 * @property {number} wins ArenaBrawl wins
 * @property {number} losses ArenaBrawl losses
 * @property {number} WLRatio ArenaBrawl Win Loss ratio
 */
module.exports = ArenaBrawl;
