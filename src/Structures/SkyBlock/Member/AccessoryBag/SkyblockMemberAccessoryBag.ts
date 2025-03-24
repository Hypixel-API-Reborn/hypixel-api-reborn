import SkyblockMemberAccessoryBagTuning from './SkyblockMemberAccessoryBagTuning.js';
import type { SkyblockMemberPower } from '../../../../Types/Skyblock.js';

class SkyblockMemberAccessoryBag {
  selectedPower: SkyblockMemberPower | null;
  unlockedPowers: SkyblockMemberPower[];
  bagUpgradesPurchased: number;
  highestMagicalPower: number;
  tuning: SkyblockMemberAccessoryBagTuning;
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
    this.tuning = new SkyblockMemberAccessoryBagTuning(data?.tuning || {});
  }

  toString(): SkyblockMemberPower | null {
    return this.selectedPower;
  }
}

export default SkyblockMemberAccessoryBag;
