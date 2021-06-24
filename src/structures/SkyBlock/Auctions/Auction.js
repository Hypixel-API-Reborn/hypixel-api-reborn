const Bid = require('./Bid');
const BaseAuction = require('./BaseAuction');
/**
 * Auction class
 */
class Auction extends BaseAuction {
  /**
   * @param {object} data
   * @param {boolean} includeItemBytes
   */
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
    /**
     * Auction end timestamp as Date
     * @type {Date}
     */
    this.auctionEnd = data.end ? new Date(data.end) : null;
    /**
     * Auction end timestamp as timestamp
     * @type {number}
     */
    this.auctionEndTimestamp = data.end || null;
    /**
     * Auction Item Name
     * @type {string}
     */
    this.item = data.item_name || null;
    /**
     * Auction Item lore ( plain text )
     * @type {string}
     */
    this.itemLore = data.item_lore ? data.item_lore.replace(/§([1-9]|[a-l])|§/gm, '') : null;
    /**
     * Auctipn Item Lore as it is from the API
     * @type {string}
     */
    this.itemLoreRaw = data.item_lore || null;
    /**
     * Rarity of Item
     * @type {Rarity}
     */
    this.rarity = data.tier || null;
    /**
     * Auction starting bid, or price for BIN
     * @type {number}
     */
    this.startingBid = data.starting_bid || 0;
    /**
    * Auction's highest bid, if it is bidded or price for BIN
    * @type {number}
    */
    this.highestBid = (this.bin) ? data.starting_bid : data.highest_bid_amount || 0;
    /**
     * Auction bids
     * @type {Bid[]}
     */
    this.bids = data.bids.length ? data.bids.map((b) => new Bid(b)) : [];
    /**
     * is Auction Claimed
     * @type {boolean}
     */
    this.claimed = data.claimed || false;
    /**
     * Which bidders, if any, claimed
     * @type {string[]}
     */
    this.claimedBidders = this.claimed ? data.claimed_bidders : [];
  }
  /**
   * Item Name
   * @return {string}
   */
  toString() {
    return this.item;
  }
}
/**
 * @typedef {string} Rarity
 * * `VERY_SPECIAL`
 * * `SPECIAL`
 * * `SUPREME`
 * * `MYTHIC`
 * * `LEGENDARY`
 * * `EPIC`
 * * `RARE`
 * * `UNCOMMON`
 * * `COMMON`
 */
module.exports = Auction;
