/* eslint-disable max-len */
/**
 * Pit Class
 */
class Pit {
  /**
   * Constructor
   * @param {Record<string,unknown>} data Data from API
   */
  constructor(data) {
    /**
     * Kills
     * @type {number}
     */
    this.kills = data.pit_stats_ptl.kills || 0;
  }
}

module.exports = Pit;
