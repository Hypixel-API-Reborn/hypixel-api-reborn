import SkyBlockMemberInventoriesInventoryDecoded from '../Inventory/SkyBlockMemberInventoriesInventoryDecoded.js';
import { magicalPowerValues } from '../../../../../Utils/Constants.js';
import type { Rarity } from '../../../../../Types/SkyBlock.js';

class SkyBlockMemberInventoriesBagsTalismanDecoded extends SkyBlockMemberInventoriesInventoryDecoded {
  magicalPower: number;
  constructor(data: any[]) {
    super(data);
    this.magicalPower = this.getMagicalPower();
  }

  private getMagicalPowerItem(rarity: Rarity, id: string = 'UNKNOWN') {
    if (id === 'HEGEMONY_ARTIFACT') return 2 * (magicalPowerValues?.[rarity] || 0);
    if (id === 'RIFT_PRISM') return 11;
    return magicalPowerValues?.[rarity] || 0;
  }

  private getMagicalPower() {
    let magicalPower = 0;
    this.items.forEach((item) => (magicalPower += this.getMagicalPowerItem(item.rarity, item.id)));
    return magicalPower;
  }
}

export default SkyBlockMemberInventoriesBagsTalismanDecoded;
