import type RequestData from '../../../Private/RequestData.js';

class SkyBlockFireSale {
  itemId: string;
  startTimestamp: number;
  startAt: Date;
  endTimestamp: number;
  endAt: Date;
  amount: number;
  price: number;
  constructor(data: Record<string, any>) {
    this.itemId = data.item_id || 'UNKNOWN';
    this.startTimestamp = data.start || 0;
    this.startAt = new Date(this.startTimestamp);
    this.endTimestamp = data.end || 0;
    this.endAt = new Date(this.endTimestamp);
    this.amount = data.amount || 0;
    this.price = data.price || 0;
  }

  toString(): string {
    return this.itemId;
  }

  isRaw(): this is RequestData {
    return false;
  }
}

export default SkyBlockFireSale;
