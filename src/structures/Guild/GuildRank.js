class GuildRank {
  constructor (data) {
    console.log(data);
    this.name = data.name;
    this.default = data.default;
    this.tag = data.tag ? data.tag : null;
    this.createdAtTimestamp = data.created ? data.created : data.createdAtTimestamp;
    this.createdAt = new Date((data.created ? data.created : data.createdAtTimestamp));
    this.priority = data.priority;
  }
}
module.exports = GuildRank;
