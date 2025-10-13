import SkyBlockMemberInventoriesArmor from './Armor/SkyBlockMemberInventoriesArmor.js';
import SkyBlockMemberInventoriesBackpacks from './Backpacks/SkyBlockMemberInventoriesBackpacks.js';
import SkyBlockMemberInventoriesBags from './Bags/SkyBlockMemberInventoriesBags.js';
import SkyBlockMemberInventoriesEquipment from './Equipment/SkyBlockMemberInventoriesEquipment.js';
import SkyBlockMemberInventoriesInventory from './Inventory/SkyBlockMemberInventoriesInventory.js';

class SkyBlockMemberInventories {
  inventory: SkyBlockMemberInventoriesInventory;
  armor: SkyBlockMemberInventoriesArmor;
  equipment: SkyBlockMemberInventoriesEquipment;
  backpacks: SkyBlockMemberInventoriesBackpacks;
  enderChest: SkyBlockMemberInventoriesInventory;
  bags: SkyBlockMemberInventoriesBags;
  personalVault: SkyBlockMemberInventoriesInventory;
  wardrobe: SkyBlockMemberInventoriesInventory;
  sacksCounts: Record<string, number>;
  constructor(data: Record<string, any>) {
    this.inventory = new SkyBlockMemberInventoriesInventory(data?.inv_contents || {});
    this.armor = new SkyBlockMemberInventoriesArmor(data?.inv_armor || {});
    this.equipment = new SkyBlockMemberInventoriesEquipment(data?.equipment_contents || {});
    this.backpacks = new SkyBlockMemberInventoriesBackpacks({
      backpackIcons: data?.backpack_icons || {},
      backpackContents: data?.backpack_contents || {}
    });
    this.enderChest = new SkyBlockMemberInventoriesInventory(data?.ender_chest_contents || {});
    this.bags = new SkyBlockMemberInventoriesBags(data?.bag_contents || {});
    this.personalVault = new SkyBlockMemberInventoriesInventory(data?.personal_vault_contents || {});
    this.wardrobe = new SkyBlockMemberInventoriesInventory({ ...(data?.wardrobe_contents || {}) });
    this.sacksCounts = data?.sacks_counts || {};
  }
}

export default SkyBlockMemberInventories;
