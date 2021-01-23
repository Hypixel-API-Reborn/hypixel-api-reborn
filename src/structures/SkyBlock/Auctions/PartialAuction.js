const BaseAuction = require('./BaseAuction');
/**
 * Partial auction class
 * @extends {BaseAuction}
 */
class PartialAuction extends BaseAuction {
  /**
   * @param {object} data Partial auction data
   * @param {boolean} includeItemBytes
   */
  constructor (data, includeItemBytes) {
    super(data, includeItemBytes);
    /**
     * Buyer UUID
     * @type {string}
     */
    this.buyer = data.buyer || null;
    /**
     * Price
     * @type {number}
     */
    this.price = parseInt(data.price, 10) || 0;
  }
}
module.exports = PartialAuction;
