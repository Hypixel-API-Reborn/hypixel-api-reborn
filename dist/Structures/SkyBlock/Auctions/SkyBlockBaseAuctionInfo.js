class SkyBlockBaseAuctionInfo {
    lastUpdatedTimestamp;
    lastUpdatedAt;
    constructor(data) {
        this.lastUpdatedTimestamp = data?.lastUpdated || 0;
        this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    }
}
export default SkyBlockBaseAuctionInfo;
//# sourceMappingURL=SkyBlockBaseAuctionInfo.js.map