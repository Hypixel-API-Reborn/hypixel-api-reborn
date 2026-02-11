class SkyBlockProfileCommunityUpgradesUpgrade {
    upgrade;
    startedTimestamp;
    startedAt;
    constructor(data) {
        this.upgrade = data.upgrade || 'UNKNOWN';
        this.startedTimestamp = data.started_ms || 0;
        this.startedAt = new Date(this.startedTimestamp);
    }
    toString() {
        return this.upgrade;
    }
}
export default SkyBlockProfileCommunityUpgradesUpgrade;
//# sourceMappingURL=SkyBlockProfileCommunityUpgradesUpgrade.js.map