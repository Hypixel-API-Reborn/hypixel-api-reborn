const Order = require('./Order');

class Product {
  constructor (data) {
    this.productId = data.product_id;

    this.sellSummary = data.sell_summary.length ? data.sell_summary.map(sellOrder => new Order(sellOrder)) : [];
    this.buySummary = data.buy_summary.length ? data.buy_summary.map(buyOrder => new Order(buyOrder)) : [];

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
module.exports = Product;
