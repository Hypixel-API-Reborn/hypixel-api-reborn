const Bid = require('./Bid');

class Auction {
  constructor (data) {
    this.auctionId = data.uuid || null;
    this.auctioneerUuid = data.auctioneer || null;
    this.coop = data.coop || [];
    this.auctionStart = data.start || null;
    this.auctionEnd = data.end || null;
    this.item = data.item_name || null;
    this.itemLore = data.item_lore ? data.item_lore.replace(/§([1-9]|[a-l])|§/gm, '') : null;
    this.startingBid = data.starting_bid || 0;
    this.highestBid = data.highest_bid_amount || 0;
    this.bids = data.bids.length ? data.bids.map(b => new Bid(b)) : [];
    this.claimed = data.claimed || false;
    this.claimedBidders = this.claimed ? data.claimed_bidders : [];
    this.bin = data.bin || false;
  }
}
module.exports = Auction;
