import SkyBlockInventoryItem from '../../../Inventory/SkyBlockInventoryItem.js';

class SkyBlockMemberInventoriesEquipmentDecoded {
  gauntlet: SkyBlockInventoryItem | null;
  belt: SkyBlockInventoryItem | null;
  cloak: SkyBlockInventoryItem | null;
  necklace: SkyBlockInventoryItem | null;
  constructor(data: any[]) {
    this.gauntlet = data[3]?.id ? new SkyBlockInventoryItem(data[3]) : null;
    this.belt = data[2]?.id ? new SkyBlockInventoryItem(data[2]) : null;
    this.cloak = data[1]?.id ? new SkyBlockInventoryItem(data[1]) : null;
    this.necklace = data[0]?.id ? new SkyBlockInventoryItem(data[0]) : null;
  }
}

export default SkyBlockMemberInventoriesEquipmentDecoded;
