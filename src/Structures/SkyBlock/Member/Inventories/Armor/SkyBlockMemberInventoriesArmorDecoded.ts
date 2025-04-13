import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';

class SkyBlockMemberInventoriesArmorDecoded {
  helmet: SkyBlockInventoryItem | null;
  chestplate: SkyBlockInventoryItem | null;
  leggings: SkyBlockInventoryItem | null;
  boots: SkyBlockInventoryItem | null;
  constructor(data: Record<string, any>) {
    this.helmet = data[3]?.id ? new SkyBlockInventoryItem(data[3]) : null;
    this.chestplate = data[2]?.id ? new SkyBlockInventoryItem(data[2]) : null;
    this.leggings = data[1]?.id ? new SkyBlockInventoryItem(data[1]) : null;
    this.boots = data[0]?.id ? new SkyBlockInventoryItem(data[0]) : null;
  }
}

export default SkyBlockMemberInventoriesArmorDecoded;
