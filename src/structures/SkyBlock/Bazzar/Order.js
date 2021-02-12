/**
 * Order class
 */
class Order {
  /**
   * @param {object} data Order data
   */
  constructor (data) {
    /**
     * Amount
     * @type {number}
     */
    this.amount = data.amount || 0;
    /**
     * Price per unit
     * @type {number}
     */
    this.pricePerUnit = data.pricePerUnit || 0;
    /**
     * Total price
     * @type {number}
     */
    this.totalPrice = Math.round((this.amount * this.pricePerUnit) * 10) / 10;
    /**
     * Orders
     * @type {number}
     */
    this.orders = data.orders || 0;
  }
  /**
   * Price as string
   * @return {string}
   */
  toString() {
    return this.totalPrice;
  }
}
module.exports = Order;
