class GuildRank {
  constructor (data) {
    this.name = data.name;
    this.default = data.default;
    this.tag = data.tag ? data.tag : null;
    this.createdAt = data.created;
    this.priority = data.priority;
  }
}
module.exports = GuildRank;
