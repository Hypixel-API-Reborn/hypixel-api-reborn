class SkyBlockBazaarProductOrder {
  amount: number;
  pricePerUnit: number;
  orders: number;
  constructor(data: Record<string, any>) {
    this.amount = data?.amount || 0;
    this.pricePerUnit = data?.pricePerUnit || 0;
    this.orders = data?.orders || 0;
  }

  toString(): number {
    return this.amount;
  }
}

export default SkyBlockBazaarProductOrder;
