class House {
    name;
    uuid;
    owner;
    createdAtTimestamp;
    createdAt;
    players;
    cookies;
    constructor(data) {
        this.name = data.name || '';
        this.uuid = data.uuid || '';
        this.owner = data.owner || '';
        this.createdAtTimestamp = data.createdAt || null;
        this.createdAt = this.createdAtTimestamp ? new Date(this.createdAtTimestamp) : null;
        this.players = data.players || 0;
        this.cookies = data.cookies?.current || 0;
    }
    toString() {
        return this.name;
    }
    isRaw() {
        return false;
    }
}
export default House;
//# sourceMappingURL=House.js.map