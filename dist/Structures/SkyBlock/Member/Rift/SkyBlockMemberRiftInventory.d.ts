import SkyBlockMemberInventoriesArmor from '../Inventories/Armor/SkyBlockMemberInventoriesArmor.js';
import SkyBlockMemberInventoriesEquipment from '../Inventories/Equipment/SkyBlockMemberInventoriesEquipment.js';
import SkyBlockMemberInventoriesInventory from '../Inventories/Inventory/SkyBlockMemberInventoriesInventory.js';
declare class SkyBlockMemberRiftInventory {
    enderChestPageIcons: [];
    inventory: SkyBlockMemberInventoriesInventory;
    armor: SkyBlockMemberInventoriesArmor;
    equipment: SkyBlockMemberInventoriesEquipment;
    enderChest: SkyBlockMemberInventoriesInventory;
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberRiftInventory;
//# sourceMappingURL=SkyBlockMemberRiftInventory.d.ts.map