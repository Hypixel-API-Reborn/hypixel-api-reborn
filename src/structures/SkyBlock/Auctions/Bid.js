/**
 * Bid class
 * @param {object} data Bid data
 */
class Bid {
  constructor (data) {
    /**
     * Auction ID
     * @type {string|null}
     */
    this.auctionId = data.auction_id || null;
    /**
     * Skyblock profile ID
     * @type {string|null}
     */
    this.profileId = data.profile_id || null;
    /**
     * Amount
     * @type {number}
     */
    this.amount = data.amount || 0;
    /**
     * Auction timestamp
     * @type {number}
     */
    this.timestamp = data.timestamp || null;
    /**
     * Auction timestamp as Date
     * @type {Date}
     */
    this.at = data.timestamp ? new Date(data.timestamp) : null;
    /**
     * Bidder
     * @type {string}
     */
    this.bidder = data.bidder || null;
  }
}
module.exports = Bid;
