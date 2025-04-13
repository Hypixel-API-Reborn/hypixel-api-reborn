import SkyBlockMemberInventoriesBagsTalisman from './SkyBlockMemberInventoriesBagsTalisman.js';
import SkyBlockMemberInventoriesInventory from '../Inventory/SkyBlockMemberInventoriesInventory.js';

class SkyBlockMemberInventoriesBags {
  potion: SkyBlockMemberInventoriesInventory;
  talisman: SkyBlockMemberInventoriesBagsTalisman;
  fishing: SkyBlockMemberInventoriesInventory;
  sacks: SkyBlockMemberInventoriesInventory;
  quiver: SkyBlockMemberInventoriesInventory;
  constructor(data: Record<string, any>) {
    this.potion = new SkyBlockMemberInventoriesInventory(data?.potion_bag || {});
    this.talisman = new SkyBlockMemberInventoriesBagsTalisman(data?.talisman_bag || {});
    this.fishing = new SkyBlockMemberInventoriesInventory(data?.fishing_bag || {});
    this.sacks = new SkyBlockMemberInventoriesInventory(data?.sacks_bag || {});
    this.quiver = new SkyBlockMemberInventoriesInventory(data?.quiver || {});
  }
}

export default SkyBlockMemberInventoriesBags;
