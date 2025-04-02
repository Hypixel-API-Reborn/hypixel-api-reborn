import SkyBlockMemberAccessoryBagTuning from './SkyBlockMemberAccessoryBagTuning.js';
import type { SkyBlockMemberPower } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberAccessoryBag {
  selectedPower: SkyBlockMemberPower | null;
  unlockedPowers: SkyBlockMemberPower[];
  bagUpgradesPurchased: number;
  highestMagicalPower: number;
  tuning: SkyBlockMemberAccessoryBagTuning;
  constructor(data: Record<string, any>) {
    this.selectedPower = data?.selected_power || null;
    this.unlockedPowers = data?.unlocked_powers || [
      'Fortuitous ',
      'Pretty',
      'Protected',
      'Simple',
      'Warrior',
      'Commando',
      'Disciplined',
      'Inspired',
      'Ominous ',
      'Prepared'
    ];
    this.bagUpgradesPurchased = data?.bag_upgrades_purchased || 0;
    this.highestMagicalPower = data?.highest_magical_power || 0;
    this.tuning = new SkyBlockMemberAccessoryBagTuning(data?.tuning || {});
  }

  toString(): SkyBlockMemberPower | null {
    return this.selectedPower;
  }
}

export default SkyBlockMemberAccessoryBag;
