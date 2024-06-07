const AchievementTier = require('./AchievementTier');

// eslint-disable-next-line jsdoc/require-jsdoc
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

/**
 * Achievement Class
 */
class Achievement {
  /**
   * constructor
   * @param {string} achievementName Name of achievement
   * @param {Object} data
   */
  constructor(achievementName, data) {
    /**
     * Name of achievement, trimmed trailing spaces
     * @type {string}
     */
    this.name = data.name.trim();
    /**
     * Code name of achievement
     * @type {string}
     */
    this.codeName = achievementName;
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
      globalPercentage: parseFloat(data.globalPercentUnlocked) * 100 || 0
    };
    /**
     * ONLY AVAILABLE FOR TIERED
     * @type {AchievementTier|null}
     */
    this.tierInformation = 'TIERED' === this.type ? new AchievementTier(data.tiers) : null;

    const { totalPoints, totalAmount } = 'TIERED' === this.type ? collectAll(this.tierInformation) : {};
    /**
     * Total points worth (sum of all tiers if tiered)
     * This is always 0 for Guild Achievements
     * @type {number}
     */
    this.points = 'ONE_TIME' === this.type ? parseInt(data.points, 10) : totalPoints;
    /**
     * Total amount required to reach max tier, only for tiered
     * @type {number|null}
     */
    this.totalAmountRequired = 'TIERED' === this.type ? totalAmount : null;
  }
  /**
   * As string
   * @return {string}
   */
  toString() {
    return this.achievementName;
  }
}

module.exports = Achievement;
