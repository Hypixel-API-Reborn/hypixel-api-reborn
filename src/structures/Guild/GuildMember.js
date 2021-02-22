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

const dateRegExp = /(\d{4})-(\d{2})-(\d{2})/;
/**
 * Parses exp history
 * @param {object} historyData History data from the API
 * @returns {Array<ExpHistory>} Array of ExpJistory
 */
function parseHistory(historyData) {
  return Object.entries(historyData).map((x, index) => ({
    day: x[0],
    date: parseDate(x[0].match(dateRegExp).slice(1).map((x) => parseInt(x, 10))) || undefined,
    exp: x[1] || 0,
    totalExp: Object.values(historyData).slice(0, index + 1).reduce((pV, cV) => pV + cV, 0)
  }));
}

/**
 * Parses date
 * Because hypixel's oscillation precises that exp resets at 5 am UTC, the hour is set accordingly
 * @param {number[]} date Date from regexp
 * @returns {Date} Parsed Date
 */
function parseDate(date) {
  date[1] -= 1;
  return new Date(Math.round(new Date(new Date().setUTCFullYear(...date)).setUTCHours(5, 0, 0) / 1000) * 1000);
}

/**
 * @typedef {object} ExpHistory
 * @property {string} day String Date ( unparsed )
 * @property {Date} date Parsed Date
 * @property {number} exp Experience of the day
 * @property {number} totalExp Experience earned from day 0 to this day
 */

module.exports = GuildMember;
