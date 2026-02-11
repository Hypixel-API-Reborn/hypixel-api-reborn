class GuildRank {
    name;
    default;
    tag;
    createdAtTimestamp;
    createdAt;
    priority;
    constructor(data) {
        this.name = data.name || '';
        this.default = data.default || false;
        this.tag = data.tag || null;
        this.createdAtTimestamp = data.created || data.createdAtTimestamp || null;
        this.createdAt = this.createdAtTimestamp ? new Date(this.createdAtTimestamp) : null;
        this.priority = data?.priority || 0;
    }
    toString() {
        return this.name;
    }
}
export default GuildRank;
//# sourceMappingURL=GuildRank.js.map