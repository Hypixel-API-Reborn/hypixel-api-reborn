const Achievement = require('./Achievement.js');

/**
 * Achievement class
 */
class GuildAchievements {
  /**
   * @param {object} data data
   * @example
   */
  constructor(data) {
    /**
     * Last time this resource was updated
     * @type {number}
     */
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    /**
     * Last time this resource was updated, as Date
     * @type {Date|null}
     */
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    /**
     * Achievements
     * @type {Record<string, Achievement>}
     */
    this.achievements = Object.fromEntries(
      Object.entries({ ...(data.tiered || {}), ...(data.one_time || {}) }).map(([name, value]) => [
        name,
        new Achievement(name, value)
      ])
    );
  }
}

module.exports = GuildAchievements;
