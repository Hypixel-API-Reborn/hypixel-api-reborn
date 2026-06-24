import SkyBlockMemberInventoriesArmor from './Armor/SkyBlockMemberInventoriesArmor.js';
import SkyBlockMemberInventoriesBackpacks from './Backpacks/SkyBlockMemberInventoriesBackpacks.js';
import SkyBlockMemberInventoriesBags from './Bags/SkyBlockMemberInventoriesBags.js';
import SkyBlockMemberInventoriesEquipment from './Equipment/SkyBlockMemberInventoriesEquipment.js';
import SkyBlockMemberInventoriesInventory from './Inventory/SkyBlockMemberInventoriesInventory.js';
import SkyBlockMemberInventoriesWardrobe from './Wardrobe/SkyBlockMemberInventoriesWardrobe.ts';

class SkyBlockMemberInventories {
  inventory: SkyBlockMemberInventoriesInventory;
  armor: SkyBlockMemberInventoriesArmor;
  equipment: SkyBlockMemberInventoriesEquipment;
  backpacks: SkyBlockMemberInventoriesBackpacks;
  enderChest: SkyBlockMemberInventoriesInventory;
  bags: SkyBlockMemberInventoriesBags;
  personalVault: SkyBlockMemberInventoriesInventory;
  wardrobe: SkyBlockMemberInventoriesWardrobe;
  sacksCounts: Record<string, number>;
  candy: SkyBlockMemberInventoriesInventory;
  carnivalMask: SkyBlockMemberInventoriesInventory;
  constructor(data: Record<string, any>) {
    this.inventory = new SkyBlockMemberInventoriesInventory(data?.inventory?.inv_contents || {});
    this.armor = new SkyBlockMemberInventoriesArmor(data?.inventory?.inv_armor || {});
    this.equipment = new SkyBlockMemberInventoriesEquipment(data?.inventory?.equipment_contents || {});
    this.backpacks = new SkyBlockMemberInventoriesBackpacks({
      backpackIcons: data?.inventory?.backpack_icons || {},
      backpackContents: data?.inventory?.backpack_contents || {}
    });
    this.enderChest = new SkyBlockMemberInventoriesInventory(data?.inventory?.ender_chest_contents || {});
    this.bags = new SkyBlockMemberInventoriesBags(data?.inventory?.bag_contents || {});
    this.personalVault = new SkyBlockMemberInventoriesInventory(data?.inventory?.personal_vault_contents || {});
    this.wardrobe = new SkyBlockMemberInventoriesWardrobe(data?.loadout?.armor || {});
    this.sacksCounts = data?.inventory?.sacks_counts || {};
    this.candy = new SkyBlockMemberInventoriesInventory(data?.shared_inventory?.candy_inventory_contents || {});
    this.carnivalMask = new SkyBlockMemberInventoriesInventory(
      data?.shared_inventory?.carnival_mask_inventory_contents || {}
    );
  }
}

export default SkyBlockMemberInventories;
