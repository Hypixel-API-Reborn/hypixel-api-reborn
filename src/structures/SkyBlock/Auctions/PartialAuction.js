const BaseAuction = require('./BaseAuction');
/**
 * Partial auction class
 * @param {object} data Partial auction data
 * @param {boolean} includeItemBytes
 */
class PartialAuction extends BaseAuction {
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
    this.price = parseInt(data.price) || 0;
  }
}
module.exports = PartialAuction;
