class FireSale {
  itemId: string;
  startTimestamp: number;
  startAt: Date;
  endTimestamp: number;
  endAt: Date;
  amount: number;
  price: number;
  constructor(data: Record<string, any>) {
    this.itemId = data.item_id;
    this.startTimestamp = data.start;
    this.startAt = new Date(this.startTimestamp);
    this.endTimestamp = data.end;
    this.endAt = new Date(this.endTimestamp);
    this.amount = data.amount;
    this.price = data.price;
  }

  toString(): string {
    return this.itemId;
  }
}

export default FireSale;
