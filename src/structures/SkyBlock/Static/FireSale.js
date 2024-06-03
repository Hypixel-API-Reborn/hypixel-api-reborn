/**
 * SB Fire Sale
 */
class FireSale {
  /**
   * constructor
   * @param {Object} data
   * @example
   */
  constructor(data) {
    /**
     * Item ID
     * @type {string|null}
     */
    this.itemId = data.item_id || null;
    /**
     * Start Timestamp as a unix
     * @type {number}
     */
    this.startTimestamp = parseInt(data.start, 10);
    /**
     * Start Date
     * @type {Date}
     */
    this.startAt = new Date(this.startTimestamp);
    /**
     * End Timestamp as a unix
     * @type {number}
     */
    this.endTimestamp = parseInt(data.end, 10);
    /**
     * End Date
     * @type {Date}
     */
    this.endAt = new Date(this.endTimestamp);
    /**
     * Amount of items being sold
     * @type {number}
     */
    this.amount = data.amount || 0;
    /**
     * Price
     * @type {number}
     */
    this.price = data.price || 0;
  }
  /**
   * Item Id
   * @return {string|null}
   * @example
   */
  toString() {
    return this.itemId;
  }
}

module.exports = FireSale;
