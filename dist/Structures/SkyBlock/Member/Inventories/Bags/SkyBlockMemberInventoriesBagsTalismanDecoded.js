import SkyBlockMemberInventoriesInventoryDecoded from '../Inventory/SkyBlockMemberInventoriesInventoryDecoded.js';
import { magicalPowerValues } from '../../../../../Utils/Constants.js';
class SkyBlockMemberInventoriesBagsTalismanDecoded extends SkyBlockMemberInventoriesInventoryDecoded {
    magicalPower;
    constructor(data) {
        super(data);
        this.magicalPower = this.getMagicalPower();
    }
    getMagicalPowerItem(rarity, id = 'UNKNOWN') {
        if (id === 'HEGEMONY_ARTIFACT')
            return 2 * (magicalPowerValues?.[rarity] || 0);
        if (id === 'RIFT_PRISM')
            return 11;
        return magicalPowerValues?.[rarity] || 0;
    }
    getMagicalPower() {
        let magicalPower = 0;
        this.items.forEach((item) => (magicalPower += this.getMagicalPowerItem(item.rarity, item.id)));
        return magicalPower;
    }
}
export default SkyBlockMemberInventoriesBagsTalismanDecoded;
//# sourceMappingURL=SkyBlockMemberInventoriesBagsTalismanDecoded.js.map