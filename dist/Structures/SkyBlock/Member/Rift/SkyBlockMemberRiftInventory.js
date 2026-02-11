import SkyBlockMemberInventoriesArmor from '../Inventories/Armor/SkyBlockMemberInventoriesArmor.js';
import SkyBlockMemberInventoriesEquipment from '../Inventories/Equipment/SkyBlockMemberInventoriesEquipment.js';
import SkyBlockMemberInventoriesInventory from '../Inventories/Inventory/SkyBlockMemberInventoriesInventory.js';
class SkyBlockMemberRiftInventory {
    enderChestPageIcons;
    inventory;
    armor;
    equipment;
    enderChest;
    constructor(data) {
        this.enderChestPageIcons = data?.ender_chest_page_icons || [];
        this.inventory = new SkyBlockMemberInventoriesInventory(data?.inv_contents || {});
        this.armor = new SkyBlockMemberInventoriesArmor(data?.inv_armor || {});
        this.equipment = new SkyBlockMemberInventoriesEquipment(data?.equipment_contents || {});
        this.enderChest = new SkyBlockMemberInventoriesInventory(data?.ender_chest_contents || {});
    }
}
export default SkyBlockMemberRiftInventory;
//# sourceMappingURL=SkyBlockMemberRiftInventory.js.map