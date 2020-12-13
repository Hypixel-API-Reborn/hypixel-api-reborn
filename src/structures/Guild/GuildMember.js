/**
 * GuildMember class
 * @param {data} data Guild member data
 */
class GuildMember {
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
     * Timestamp this member will be unmuted at
     * @type {Number}
     */
    this.mutedUntilTimestamp = data.mutedTill ? data.mutedTill : null;
    /**
     * Timestamp this member will be unmuted at as Date
     * @type {Date}
     */
    this.mutedUntil = data.mutedTill ? new Date(data.mutedTill) : null;
    let gexp = 0;
    const history = [];
    if (Object.keys(data.expHistory).length) {
      for (const day in data.expHistory) {
        gexp += data.expHistory[day];
        history.push({ day: day, exp: data.expHistory[day] });
      }
    }
    /**
     * Experience history per day
     * @type {Array<{day: string, exp: number}>}
     */
    this.expHistory = history;
    /**
     * Experience per week
     * @type {Number}
     */
    this.weeklyExperience = gexp;
  }
}
module.exports = GuildMember;
