class SkyBlockMemberPlayerStatsGifts {
    received;
    given;
    total;
    constructor(data) {
        this.received = data?.total_received || 0;
        this.given = data?.total_given || 0;
        this.total = this.received + this.given;
    }
    toString() {
        return this.total;
    }
}
export default SkyBlockMemberPlayerStatsGifts;
//# sourceMappingURL=SkyBlockMemberPlayerStatsGifts.js.map