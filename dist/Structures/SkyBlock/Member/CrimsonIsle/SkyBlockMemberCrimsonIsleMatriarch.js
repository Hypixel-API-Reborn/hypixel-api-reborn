class SkyBlockMemberCrimsonIsleMatriarch {
    pearlsCollected;
    lastAttempt;
    recentRefreshes;
    constructor(data) {
        this.pearlsCollected = data?.pearls_collected || 0;
        this.lastAttempt = data?.last_attempt || 0;
        this.recentRefreshes = data?.recent_refreshes || [];
    }
    toString() {
        return this.pearlsCollected;
    }
}
export default SkyBlockMemberCrimsonIsleMatriarch;
//# sourceMappingURL=SkyBlockMemberCrimsonIsleMatriarch.js.map