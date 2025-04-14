import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';
import { writeFileSync } from 'fs';

class SkyBlockMemberInventoriesBackpackDecoded {
  icon: SkyBlockInventoryItem;
  items: SkyBlockInventoryItem[];
  constructor(data: Record<string, any>) {
    writeFileSync('fixed.json', JSON.stringify(data));
    this.icon = new SkyBlockInventoryItem(data?.backpackIconDecoded[0]);
    this.items = [];
    for (let i = 0; i < data?.backpackItemsDecoded.length; i++) {
      if (!data?.backpackItemsDecoded[i]?.id) continue;
      this.items.push(new SkyBlockInventoryItem(data?.backpackItemsDecoded[i]));
    }
  }
}

export default SkyBlockMemberInventoriesBackpackDecoded;
