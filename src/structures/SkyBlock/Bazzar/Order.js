class Order {
  constructor (data) {
    this.amount = data.amount || 0;
    this.pricePerUnit = data.pricePerUnit || 0;
    this.orders = data.orders || 0;
  }
}
module.exports = Order;
