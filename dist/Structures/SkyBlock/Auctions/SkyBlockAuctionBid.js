class SkyBlockAuctionBid {
    auctionId;
    profileId;
    amount;
    timestamp;
    at;
    bidder;
    constructor(data) {
        this.auctionId = data?.auction_id || 'UNKNOWN';
        this.profileId = data?.profile_id || 'UNKNOWN';
        this.amount = data?.amount || 0;
        this.timestamp = data?.timestamp || 0;
        this.at = new Date(this.timestamp);
        this.bidder = data?.bidder || 'UNKNOWN';
    }
    toString() {
        return this.amount;
    }
}
export default SkyBlockAuctionBid;
//# sourceMappingURL=SkyBlockAuctionBid.js.map