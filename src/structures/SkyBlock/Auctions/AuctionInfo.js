/**
 * Auction info class
 * @param {object} data Auction info data
 */
class AuctionInfo {
  constructor (data) {
    /**
     * Page number
     * @type {number}
     */
    this.page = parseInt(data.page) || 0;
    /**
     * Total pages
     * @type {number}
     */
    this.totalPages = parseInt(data.totalPages) || 1;
    /**
     * Total auctions
     * @type {number}
     */
    this.totalAuctions = parseInt(data.totalAuctions) || 0;
    /**
     * Last updated timestamp
     * @type {number}
     */
    this.lastUpdatedTimestamp = data.lastUpdated;
    /**
     * Last updated timestamp as Date
     * @type {Date}
     */
    this.lastUpdatedAt = new Date(data.lastUpdated);
    /**
     * Age
     * @type {number}
     */
    this.age = parseInt(data._headers.get('age')) || 0;
  }

  _extend (name, value) {
    this[name] = value;
    return this;
  }
};
module.exports = AuctionInfo;
