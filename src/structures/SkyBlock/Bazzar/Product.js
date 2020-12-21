const Order = require('./Order');

/**
 * Product class
 * @param {object} data Product data
 */
class Product {
  constructor (data) {
    /**
     * Product ID
     * @type {string}
     */
    this.productId = data.product_id;
    /**
     * Product sell orders
     * @type {Order[]}
     */
    this.sellSummary = data.sell_summary.length ? data.sell_summary.map(sellOrder => new Order(sellOrder)) : [];
    /**
     * Product buy orders
     * @type {Order[]}
     */
    this.buySummary = data.buy_summary.length ? data.buy_summary.map(buyOrder => new Order(buyOrder)) : [];
    /**
     * Product status
     * @type {ProductStatus}
     */
    this.status = {
      sellPrice: isNaN(data.quick_status.sellPrice) ? 0 : Math.round(data.quick_status.sellPrice * 100) / 100,
      buyPrice: isNaN(data.quick_status.buyPrice) ? 0 : Math.round(data.quick_status.buyPrice * 100) / 100,
      sellVolume: isNaN(data.quick_status.sellVolume) ? 0 : data.quick_status.sellVolume,
      buyVolume: isNaN(data.quick_status.buyVolume) ? 0 : data.quick_status.buyVolume,
      sellMovingWeek: isNaN(data.quick_status.sellMovingWeek) ? 0 : data.quick_status.sellMovingWeek,
      buyMovingWeek: isNaN(data.quick_status.buyMovingWeek) ? 0 : data.quick_status.buyMovingWeek,
      sellOrders: isNaN(data.quick_status.sellOrders) ? 0 : data.quick_status.sellOrders,
      buyOrders: isNaN(data.quick_status.buyOrders) ? 0 : data.quick_status.buyOrders
    };
  }
}
/**
 * @typedef {object} ProductStatus
 * @property {number} sellPrice Sell price
 * @property {number} buyPrice Buy price
 * @property {number} sellVolume Sell volume
 * @property {number} buyVolume Buy volume
 * @property {number} sellMovingWeek Sell moving week
 * @property {number} buyMovingWeek Sell moving week
 * @property {number} sellOrders Sell orders
 * @property {number} buyOrders Buy orders
 */
module.exports = Product;
