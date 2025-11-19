import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';

class SkyBlockMemberInventoriesBackpackDecoded {
  icon: SkyBlockInventoryItem;
  items: SkyBlockInventoryItem[];
  constructor(data: Record<string, any>) {
    const decoded = data?.backpackItemsDecoded || [];
    this.icon = new SkyBlockInventoryItem(decoded?.[0] || {});
    this.items = [];
    for (let i = 0; i < decoded.length; i++) {
      if (!decoded?.[i]?.id) continue;
      this.items.push(new SkyBlockInventoryItem(decoded[i]));
    }
  }
}

export default SkyBlockMemberInventoriesBackpackDecoded;
