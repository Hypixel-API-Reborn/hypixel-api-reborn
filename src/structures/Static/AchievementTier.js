/**
 * AchievementTier class
 */
class AchievementTier {
  /**
   * @param {Record<string, number>} data
   * @example
   */
  constructor(data) {
    /**
     * Maximum tier reachable
     * getTier will be take any integer from 1 to this number (inclusive)
     * @type {number}
     */
    this.maxTier = data.length;
    // Still make sure it is well sorted
    this.tierInfo = data.sort(({ tier: tierA }, { tier: tierB }) => Number(tierA) - Number(tierB));
  }
  /**
   * Gets information for tier
   * @param {number} tier Tier number (1-indexed!)
   * @returns {Record<'pointsRewarded'|'amountRequired', number>}
   * @example
   */
  getTier(tier) {
    const index = tier - 1;
    const info = this.tierInfo[index];
    return {
      pointsRewarded: parseInt(info.points, 10) || 0,
      amountRequired: parseInt(info.amount, 10) || 0
    };
  }
}

module.exports = AchievementTier;
