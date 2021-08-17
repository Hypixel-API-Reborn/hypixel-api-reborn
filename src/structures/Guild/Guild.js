const GuildMember = require('./GuildMember');
const GuildRank = require('./GuildRank');
const Color = require('../Color');
const Game = require('../Game');
const {getGuildLevel, parseHistory} = require('../../utils/guildExp');
/**
 * Guild class
 */
class Guild {
  /**
   * @param {data} data Guild data
   * @param {string} [me] Player uuid used to search for this guild
   */
  constructor (data, me = '') {
    /**
     * Guild ID
     * @type {string}
     */
    this.id = data._id;
    /**
     * Guild name
     * @type {String}
     */
    this.name = data.name;
    /**
     * Guild description
     * @type {String}
     */
    this.description = data.description ? data.description : null;
    /**
     * Guild experience
     * @type {Number}
     */
    this.experience = data.exp || 0;
    /**
     * Guild level
     * @type {Number}
     */
    this.level = getGuildLevel(this.experience);
    /**
     * Guild members
     * @type {Array<GuildMember>}
     */
    this.members = members(data);
    /**
     * Me, if a player UUID is used to get the guild
     * @type {GuildMember|null}
     */
    this.me = this.members.find((member) => member.uuid === me);
    /**
     * Guild ranks
     * @type {Array<GuildRank>}
     */
    this.ranks = ranks(data);
    /**
     * The total guild experience earned in the last 7 days
     * @author linearaccelerator
     * @type {number}
     */
    this.totalWeeklyGexp = totalWeeklyGexp(data);
    /**
     * An array containing all guild ranks sorted by newest
     * @author linearaccelerator
     * @return {Array<GuildRank>}
     */
    this.getRanksByNewest = function () {
      return this.ranks.length ? this.ranks.map((r) => new GuildRank(r)).sort((a, b) => b.createdAt - a.createdAt) : null;
    };
    /**
     * A map containing all guild members, keyed by their uuids
     * @author linearaccelerator
     * @return {Map<string, GuildMember>}
     */
    this.getMemberUUIDMap = function () {
      return this.members.length ? new Map(this.members.map((m) => [m.uuid, m])) : null;
    };
    /**
     * Returns a guild rank by priority
     * @author linearaccelerator
     * @param {number} priority - The priority of the guild rank
     * @return {GuildRank}
     */
    this.getRankByPriority = function (priority) {
      if (!this.ranks.length || !this.ranks.some((r) => r.priority === priority)) return null;
      return new GuildRank(this.ranks.find((r) => r.priority === priority));
    };
    /**
     * Date of guild creation as timestamp
     * @type {String}
     */
    this.createdAtTimestamp = data.created;
    /**
     * Date of guild creation
     * @type {Date}
     */
    this.createdAt = new Date(data.created);
    /**
     * Whether this guild can be joined using /g join
     * @type {boolean}
     */
    this.joinable = data.joinable ? data.joinable : false;
    /**
     * Whether this guild is listed in the Guild Finder
     * @type {boolean}
     */
    this.publiclyListed = !!data.publiclyListed;
    /**
     * Timestamp guild chat will be unmuted at.
     * @type {number|null}
     */
    this.chatMuteUntilTimestamp = data.chatMute ? data.chatMute : null;
    /**
     * Timestamp guild chat will be unmuted at as Date.
     * @type {Date|null}
     */
    this.chatMuteUntil = data.chatMute ? new Date(data.chatMute) : null;
    /**
     * Timestamp guild chat will be unmuted at.
     * @type {Array<{ Pattern: string, Color: string }>}
     */
    this.banner = data.banner ? data.banner : null;
    /**
     * Guild tag
     * @type {string}
     */
    this.tag = data.tag ? data.tag : null;
    /**
     * Guild tag color
     * @type {Color}
     */
    this.tagColor = data.tagColor ? new Color(data.tagColor) : null;
    /**
     * Ranking in the number of guild coins owned in the legacy guild system. (0 - indexed)
     * @deprecated
     * @type {number}
     */
    this.legacyRank = !isNaN(data.legacyRanking) ? parseInt(data.legacyRanking + 1, 10) : 0;
    /**
     * Experience history per day, resets at 5 am UTC. Please remember this is only an estimation based on the sum of every guild member's daily gexp.
     * @type {Array<ExpHistory>}
     */
    this.expHistory = calculateExpHistory(data);
    /**
     * Guild achievements
     * @type {{winners: number, experienceKings: number, onlinePlayers: number}}
     */
    this.achievements = {
      winners: data.achievements ? data.achievements.WINNERS : 0,
      experienceKings: data.achievements ? data.achievements.EXPERIENCE_KINGS : 0,
      onlinePlayers: data.achievements ? data.achievements.ONLINE_PLAYERS : 0
    };
    /**
     * Guild preferred games
     * @type {Array<Game>}
     */
    this.preferredGames = data.preferredGames ? data.preferredGames.map((g) => new Game(g)) : [];
  }
  /**
   * Guild name
   * @return {string}
   */
  toString() {
    return this.name;
  }
  /**
   * The Guild Master of the guild as a GuildMember
   * @type {GuildMember}
   */
  get guildMaster () {
    return this.members.find((member) => member.rank === 'Guild Master' || member.rank === 'GUILDMASTER');
  }
}
/**
 * @param {object} data
 * @return {GuildMember[]}
 */
function members (data) {
  return data.members.length ? data.members.map((m) => new GuildMember(m)) : [];
}
/**
 * @param {object} data
 * @return {GuildRank[]}
 */
function ranks (data) {
  return data.ranks && data.ranks.length ? data.ranks.map((r) => new GuildRank(r)).sort((a, b) => a.priority - b.priority) : [];
}
/**
 * @param {object} data
 * @return {number}
 */
function totalWeeklyGexp (data) {
  return members(data).map((m) => m.weeklyExperience).reduce((acc, cur) => acc + cur);
}
/**
 * @param {Object} data
 * @return {Array}
 */
function calculateExpHistory (data) {
  const finalObj = {};
  for (const day of Object.keys(data.members[0].expHistory)) {
    let gexp = 0;
    for (const member of data.members) {
      gexp += (member.expHistory[day] || 0);
    }
    finalObj[day] = expLimit(gexp);
  }
  return parseHistory(finalObj);
}
/**
 * Calculates and returns the exp after daily limit
 * @param {number} exp Experience
 * @return {number}
 */
function expLimit(exp) {
  return exp > 2e5 ? (exp > 7e5 ? 2.5e5+Math.round(exp * 0.03) : 2e5 + Math.round((exp-2e5) / 10)) : exp;
}

module.exports = Guild;
