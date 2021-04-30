const {parseHistory} = require('../../utils/guildExp');
/**
 * GuildMember class
 */
class GuildMember {
  /**
   * @param {data} data Guild member data
   */
  constructor (data) {
    /**
     * Guild member UUID
     * @type {String}
     */
    this.uuid = data.uuid;
    /**
     * Timestamp this member joined at
     * @type {Number}
     */
    this.joinedAtTimestamp = data.joined;
    /**
     * Timestamp this member joined at as Date
     * @type {Date}
     */
    this.joinedAt = new Date(data.joined);
    /**
     * The number of challenges completed that count towards the current quest
     * @type {Number}
     */
    this.questParticipation = data.questParticipation || 0;
    /**
     * Member's rank
     * @type {String}
     */
    this.rank = data.rank;
    /**
     * Timestamp this member will be unmuted at ( if muted )
     * @type {Number|null}
     */
    this.mutedUntilTimestamp = data.mutedTill ? data.mutedTill : null;
    /**
     * Timestamp this member will be unmuted at as Date ( if muted )
     * @type {Date|null}
     */
    this.mutedUntil = data.mutedTill ? new Date(data.mutedTill) : null;
    const xpCheck = data.expHistory && typeof Object.values(data.expHistory)[0] === 'number';
    /**
     * Experience history per day, resets at 5 am UTC
     * @type {Array<ExpHistory>}
     */
    this.expHistory = parseHistory(data.expHistory);
    /**
     * Experience per week, resets every Monday at 5 am UTC
     * @type {Number}
     */
    this.weeklyExperience = xpCheck ? Object.values(data.expHistory).reduce((pV, cV) => pV + cV, 0) : null;
  }
  /**
   * UUID
   * @return {string}
   */
  toString() {
    return this.uuid;
  }
}

module.exports = GuildMember;
