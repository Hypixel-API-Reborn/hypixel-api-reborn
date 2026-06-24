import RawSkyBlockInventoryItem from '../../../Inventory/RawSkyBlockInventoryItem.js';

class SkyBlockMemberInventoriesWardrobeSlot {
  id: number;
  helmet: RawSkyBlockInventoryItem | null;
  chestplate: RawSkyBlockInventoryItem | null;
  leggings: RawSkyBlockInventoryItem | null;
  boots: RawSkyBlockInventoryItem | null;
  constructor(data: Record<string, any>) {
    this.id = data.id;
    this.helmet = data?.HELMET ? new RawSkyBlockInventoryItem(data.HELMET) : null;
    this.chestplate = data?.CHESTPLATE ? new RawSkyBlockInventoryItem(data.CHESTPLATE) : null;
    this.leggings = data?.LEGGINGS ? new RawSkyBlockInventoryItem(data.LEGGINGS) : null;
    this.boots = data?.BOOTS ? new RawSkyBlockInventoryItem(data.BOOTS) : null;
  }
}
export default SkyBlockMemberInventoriesWardrobeSlot;
