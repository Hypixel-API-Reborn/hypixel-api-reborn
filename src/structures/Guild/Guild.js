const { getGuildLevel, ranks, members, totalWeeklyGexp, calculateExpHistory } = require('../../utils/Guild');
const GuildMember = require('./GuildMember');
const GuildRank = require('./GuildRank');
const Color = require('../Color');
const Game = require('../Game');
/**
 * Guild class
 */
class Guild {
  /**
   * @param {data} data Guild data
   * @param {string} [me] Player uuid u#sed to search for this guild
   * @example
   */
  constructor(data, me = '') {
    /**
     * Guild ID
     * @type {string}
     */

    // eslint-disable-next-line no-underscore-dangle
    this.id = data._id;
    /**
     * Guild name
     * @type {string}
     */
    this.name = data.name;
    /**
     * Guild description
     * @type {string}
     */
    this.description = data.description ?? '';
    /**
     * Guild experience
     * @type {number}
     */
    this.experience = data.exp || 0;
    /**
     * Guild level
     * @type {number}
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
     * @example
     */
    this.getRanksByNewest = function () {
      return this.ranks.length
        ? this.ranks.map((r) => new GuildRank(r)).sort((a, b) => b.createdAt - a.createdAt)
        : null;
    };
    /**
     * A map containing all guild members, keyed by their uuids
     * @author linearaccelerator
     * @return {Map<string, GuildMember>}
     * @example
     */
    this.getMemberUUIDMap = function () {
      return this.members.length ? new Map(this.members.map((m) => [m.uuid, m])) : null;
    };
    /**
     * Returns a guild rank by priority
     * @author linearaccelerator
     * @param {number} priority - The priority of the guild rank
     * @return {GuildRank}
     * @example
     */
    this.getRankByPriority = function (priority) {
      if (!this.ranks.length || !this.ranks.some((r) => r.priority === priority)) return null;
      return new GuildRank(this.ranks.find((r) => r.priority === priority));
    };
    /**
     * Date of guild creation as timestamp
     * @type {string}
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
    this.joinable = data.joinable ?? false;
    /**
     * Whether this guild is listed in the Guild Finder
     * @type {boolean}
     */
    this.publiclyListed = Boolean(data.publiclyListed);
    /**
     * Timestamp guild chat will be unmuted at.
     * @type {number|null}
     */
    this.chatMuteUntilTimestamp = data.chatMute ?? null;
    /**
     * Timestamp guild chat will be unmuted at as Date.
     * @type {Date|null}
     */
    this.chatMuteUntil = data.chatMute ? new Date(data.chatMute) : null;
    /**
     * Timestamp guild chat will be unmuted at.
     * @type {Array<{ Pattern: string, Color: string }>}
     */
    this.banner = data.banner ?? null;
    /**
     * Guild tag
     * @type {string}
     */
    this.tag = data.tag ?? null;
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
      winners: data.achievements.WINNERS ?? 0,
      experienceKings: data.achievements.EXPERIENCE_KINGS ?? 0,
      onlinePlayers: data.achievements.ONLINE_PLAYERS ?? 0
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
   * @example
   */
  toString() {
    return this.name;
  }
  /**
   * The Guild Master of the guild as a GuildMember
   * @type {GuildMember}
   */
  get guildMaster() {
    return this.members.find((member) => 'Guild Master' === member.rank || 'GUILDMASTER' === member.rank);
  }
}

module.exports = Guild;
