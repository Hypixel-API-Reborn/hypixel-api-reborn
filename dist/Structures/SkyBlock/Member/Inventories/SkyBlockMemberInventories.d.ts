import SkyBlockMemberInventoriesArmor from './Armor/SkyBlockMemberInventoriesArmor.js';
import SkyBlockMemberInventoriesBackpacks from './Backpacks/SkyBlockMemberInventoriesBackpacks.js';
import SkyBlockMemberInventoriesBags from './Bags/SkyBlockMemberInventoriesBags.js';
import SkyBlockMemberInventoriesEquipment from './Equipment/SkyBlockMemberInventoriesEquipment.js';
import SkyBlockMemberInventoriesInventory from './Inventory/SkyBlockMemberInventoriesInventory.js';
declare class SkyBlockMemberInventories {
    inventory: SkyBlockMemberInventoriesInventory;
    armor: SkyBlockMemberInventoriesArmor;
    equipment: SkyBlockMemberInventoriesEquipment;
    backpacks: SkyBlockMemberInventoriesBackpacks;
    enderChest: SkyBlockMemberInventoriesInventory;
    bags: SkyBlockMemberInventoriesBags;
    personalVault: SkyBlockMemberInventoriesInventory;
    wardrobe: SkyBlockMemberInventoriesInventory;
    sacksCounts: Record<string, number>;
    candy: SkyBlockMemberInventoriesInventory;
    carnivalMask: SkyBlockMemberInventoriesInventory;
    constructor(data: Record<string, any>, shared: Record<string, any>);
}
export default SkyBlockMemberInventories;
//# sourceMappingURL=SkyBlockMemberInventories.d.ts.map