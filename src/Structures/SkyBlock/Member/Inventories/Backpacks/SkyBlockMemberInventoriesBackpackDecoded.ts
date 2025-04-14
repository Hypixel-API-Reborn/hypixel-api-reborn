import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';

class SkyBlockMemberInventoriesBackpackDecoded {
  icon: SkyBlockInventoryItem;
  items: SkyBlockInventoryItem[];
  constructor(data: Record<string, any>) {
    this.icon = new SkyBlockInventoryItem(data?.backpackIconDecoded[0]);
    this.items = [];
    for (let i = 0; i < data?.backpackItemsDecoded.length; i++) {
      if (!data?.backpackItemsDecoded[i]?.id) continue;
      this.items.push(new SkyBlockInventoryItem(data?.backpackItemsDecoded[i]));
    }
  }
}

export default SkyBlockMemberInventoriesBackpackDecoded;
