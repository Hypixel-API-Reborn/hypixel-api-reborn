class GuildRank {
  constructor (data) {
    this.name = data.name;
    this.default = data.default;
    this.tag = data.tag ? data.tag : null;
    this.createdAtTimestamp = data.created;
    this.createdAt = new Date(data.created);
    this.priority = data.priority;
  }
}
module.exports = GuildRank;
