const AchievementTier = require('./AchievementTier');

/**
 * Achievement Class
 */
class Achievement {
  /**
   * constructor
   * @param {string} name Name of achievement
   * @param {Object} data
   */
  constructor(name, data) {
    /**
     * Name of achievement, trimmed trailing spaces
     * @type {string}
     */
    this.achievementName = data.name.trim();
    /**
     * Code name of achievement
     * @type {string}
     */
    this.achievementCodeName = name;
    /**
     * Description, trimmed trailing spaces
     * @type {string}
     */
    this.description = data.description.trim();
    /**
     * Type of achievement
     * @type {'ONE_TIME'|'TIERED'}
     */
    this.type = data.tiers ? 'TIERED' : 'ONE_TIME';
    /**
     * ONLY AVAILABLE IN PERSONAL ONE TIME ACHIEVEMENTS, last checked April 26th
     * Unlock rate of this achievement
     * Local : Fraction of players that have played the game and gotten this achievement (0 to 1 inclusive)
     * Global : Fraction of players that have played Hypixel and gotten this achievement (0 to 1 inclusive)
     * ...percentage : In percentage (0 to 100 inclusive)
     * @type {Record<'local'|'localPercentage'|'global'|'globalPercentage', number>|null}
     */
    this.rarity = {
      local: parseFloat(data.gamePercentUnlocked) || 0,
      localPercentage: parseFloat(data.gamePercentUnlocked) * 100 || 0,
      global: data.globalPercentUnlocked,
      globalPercentage: parseFloat(data.globalPercentUnlocked) * 100 || 0,
    };
    /**
     * ONLY AVAILABLE FOR TIERED
     * @type {AchievementTier|null}
     */
    this.tierInformation = this.type === 'TIERED' ? new AchievementTier(data.tiers) : null;

    const { totalPoints, totalAmount } = this.type === 'TIERED' ? collectAll(this.tierInformation) : {};
    /**
     * Total points worth (sum of all tiers if tiered)
     * This is always 0 for Guild Achievements
     * @type {number}
     */
    this.points = this.type === 'ONE_TIME' ? parseInt(data.points, 10) : totalPoints;
    /**
     * Total amount required to reach max tier, only for tiered
     * @type {number|null}
     */
    this.totalAmountRequired = this.type === 'TIERED' ? totalAmount : null;
  }
  /**
   * As string
   * @return {string}
   */
  toString() {
    return this.achievementName;
  }
}

/**
 * @param {AchievementTier} data
 * @returns {number}
 */
function collectAll(data) {
  const mTier = data.maxTier;
  let totalPoints = 0;
  let totalAmount = 0;
  for (let i = 1; i <= mTier; i++) {
    totalPoints += data.getTier(i).pointsRewarded;
    totalAmount += data.getTier(i).amountRequired;
  }
  return { totalPoints, totalAmount };
}
module.exports = Achievement;
