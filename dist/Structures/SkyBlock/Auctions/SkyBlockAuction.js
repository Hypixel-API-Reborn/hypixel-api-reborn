import SkyBlockAuctionBid from './SkyBlockAuctionBid.js';
import SkyBlockBaseAuction from './SkyBlockBaseAuction.js';
class SkyBlockAuction extends SkyBlockBaseAuction {
    coop;
    auctionStartTimestamp;
    auctionStartAt;
    auctionEndTimestamp;
    auctionEndAt;
    item;
    itemLore;
    rarity;
    startingBid;
    highestBid;
    bids;
    claimed;
    claimedBidders;
    constructor(data, includeItemBytes = false) {
        super(data, includeItemBytes);
        this.coop = data?.coop || [];
        this.auctionStartTimestamp = data?.start || 0;
        this.auctionStartAt = new Date(this.auctionStartTimestamp);
        this.auctionEndTimestamp = data.end || null;
        this.auctionEndAt = this.auctionEndTimestamp ? new Date(this.auctionEndTimestamp) : null;
        this.item = data?.item_name || 'UNKNOWN';
        this.itemLore = data?.item_lore || 'UNKNOWN';
        this.rarity = data?.tier || 'UNKNOWN';
        this.startingBid = data?.starting_bid || 0;
        this.highestBid = this.bin ? data.starting_bid : data.highest_bid_amount || 0;
        this.bids = (data?.bids || []).map((bid) => new SkyBlockAuctionBid(bid));
        this.claimed = data.claimed || false;
        this.claimedBidders = this.claimed ? data.claimed_bidders : [];
    }
    toString() {
        return this.item;
    }
}
export default SkyBlockAuction;
//# sourceMappingURL=SkyBlockAuction.js.map