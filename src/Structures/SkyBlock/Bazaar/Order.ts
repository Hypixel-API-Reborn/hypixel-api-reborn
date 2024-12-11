class Order {
  amount: number;
  pricePerUnit: number;
  totalPrice: number;
  orders: number;
  constructor(data: Record<string, any>) {
    this.amount = data.amount || 0;
    this.pricePerUnit = data.pricePerUnit || 0;
    this.totalPrice = Math.round(this.amount * this.pricePerUnit * 10) / 10;
    this.orders = data.orders || 0;
  }

  toString(): number {
    return this.totalPrice;
  }
}

export default Order;
