/**
 * GuildRank class
 * @param {data} data Guild rank data
 */
class GuildRank {
  constructor (data) {
    /**
     * Guild rank name
     * @type {String}
     */
    this.name = data.name;
    /**
     * Whether this rank is the default rank a player gets when they join a guild
     * @type {boolean}
     */
    this.default = data.default;
    /**
    * Guild rank tag that appears in guild chat. null if none
    * @type {string|null}
    */
    this.tag = data.tag ? data.tag : null;
    /**
    * Timestamp this rank was created at
    * @type {number}
    */
    this.createdAtTimestamp = data.created ? data.created : data.createdAtTimestamp;
    /**
    * Timestamp this rank was created at as Date
    * @type {Date}
    */
    this.createdAt = new Date((data.created ? data.created : data.createdAtTimestamp));
    /**
    * Guild rank priority - Higher number = higher up in the hierarchy
    * @type {number}
    */
    this.priority = data.priority;
  }
}
module.exports = GuildRank;
