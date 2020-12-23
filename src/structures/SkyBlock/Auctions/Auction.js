const Bid = require('./Bid');
const BaseAuction = require('./BaseAuction');
class Auction extends BaseAuction {
  constructor (data, includeItemBytes) {
    super(data, includeItemBytes);
    /**
     * Coop members. Array of UUIDs
     * @type {string[]}
     */
    this.coop = data.coop || [];
    /**
     * Auction start timestamp
     * @type {number|null}
     */
    this.auctionStartTimestamp = data.start || null;
    /**
     * Auction start timestamp as Date
     * @type {Date}
     */
    this.auctionStart = data.start ? new Date(data.start) : null;
    this.auctionEnd = data.end ? new Date(data.end) : null;
    this.auctionEndTimestamp = data.end || null;
    this.item = data.item_name || null;
    this.itemLore = data.item_lore ? data.item_lore.replace(/§([1-9]|[a-l])|§/gm, '') : null;
    this.itemLoreRaw = data.item_lore || null;
    this.rarity = data.tier || null;
    this.startingBid = data.starting_bid || 0;
    this.highestBid = data.highest_bid_amount || 0;
    this.bids = data.bids.length ? data.bids.map(b => new Bid(b)) : [];
    this.claimed = data.claimed || false;
    this.claimedBidders = this.claimed ? data.claimed_bidders : [];
  }
}
module.exports = Auction;
