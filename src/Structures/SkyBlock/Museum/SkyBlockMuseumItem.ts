import SkyBlockInventoryItem from '../Inventory/SkyBlockInventoryItem.js';

class SkyBlockMuseumItem {
  name: string;
  donated: number;
  donatedAt: Date;
  featuredSlot: string | null;
  borrowing: boolean;
  items: SkyBlockInventoryItem[];
  constructor(name: string, data: Record<string, any>, decoded: any[]) {
    this.name = name;
    this.donated = data?.donated_time || 0;
    this.donatedAt = new Date(this.donated);
    this.featuredSlot = data?.featured_slot || null;
    this.borrowing = data?.borrowing || false;
    this.items = [];
    decoded.forEach((item) => {
      if (!item.tag) return;
      this.items.push(new SkyBlockInventoryItem(item));
    });
  }

  toString(): string {
    return this.name;
  }
}

export default SkyBlockMuseumItem;
