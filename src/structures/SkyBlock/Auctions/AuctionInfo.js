/* eslint-disable require-jsdoc */
/**
 * Auction info class
 */
class AuctionInfo {
  /**
   * @param {object} data Auction info data
   */
  constructor (data) {
    /**
     * Page number
     * @type {number}
     */
    this.page = parseInt(data.page, 10) || 0;
    /**
     * Total pages
     * @type {number}
     */
    this.totalPages = parseInt(data.totalPages, 10) || 1;
    /**
     * Total auctions
     * @type {number}
     */
    this.totalAuctions = parseInt(data.totalAuctions, 10) || 0;
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
    this.age = parseInt(data._headers.get('age'), 10) || 0;
  }

  _extend (name, value) {
    this[name] = value;
    return this;
  }
  /**
   * Current Page / Total Page
   * @return {string}
   */
  toString() {
    return `${this.page} / ${this.totalPages}`;
  }
}
module.exports = AuctionInfo;
