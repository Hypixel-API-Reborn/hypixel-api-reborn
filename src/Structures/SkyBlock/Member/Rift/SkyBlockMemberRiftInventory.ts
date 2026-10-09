import SkyBlockMemberInventoriesArmor from '../Inventories/Armor/SkyBlockMemberInventoriesArmor.ts';
import SkyBlockMemberInventoriesEquipment from '../Inventories/Equipment/SkyBlockMemberInventoriesEquipment.ts';
import SkyBlockMemberInventoriesInventory from '../Inventories/Inventory/SkyBlockMemberInventoriesInventory.ts';

class SkyBlockMemberRiftInventory {
  enderChestPageIcons: string[];
  inventory: SkyBlockMemberInventoriesInventory;
  armor: SkyBlockMemberInventoriesArmor;
  equipment: SkyBlockMemberInventoriesEquipment;
  enderChest: SkyBlockMemberInventoriesInventory;
  constructor(data: Record<string, any>) {
    this.enderChestPageIcons = data?.ender_chest_page_icons ?? [];
    this.inventory = new SkyBlockMemberInventoriesInventory(data?.inv_contents ?? {});
    this.armor = new SkyBlockMemberInventoriesArmor(data?.inv_armor ?? {});
    this.equipment = new SkyBlockMemberInventoriesEquipment(data?.equipment_contents ?? {});
    this.enderChest = new SkyBlockMemberInventoriesInventory(data?.ender_chest_contents ?? {});
  }
}

export default SkyBlockMemberRiftInventory;
