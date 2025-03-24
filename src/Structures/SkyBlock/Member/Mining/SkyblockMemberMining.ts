import SkyblockMemberMiningHotm from './SkyblockMemberMiningHotm.js';
import SkyblockMemberMiningPowders from './SkyblockMemberMiningPowders.js';
import SkyblockMemeberMiningCrystal from './SkyblockMemberMiningCrystal.js';
import type { MiningCrystal, MiningPickaxeAbility, MiningSkyMallEffect } from '../../../../Types/Skyblock.js';

class SkyblockMemberMining {
  powder: SkyblockMemberMiningPowders;
  crystals: Record<MiningCrystal, SkyblockMemeberMiningCrystal>;
  hotm: SkyblockMemberMiningHotm;
  pickaxeAbility: MiningPickaxeAbility | 'UNKNOWN';
  dailyEffect: MiningSkyMallEffect | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.powder = new SkyblockMemberMiningPowders(data || {});
    this.crystals = Object.keys(data?.crystals || {}).reduce(
      (obj: Record<string, SkyblockMemeberMiningCrystal>, key: string) => {
        obj[key.split('_crystal')[0] || 'jade'] = new SkyblockMemeberMiningCrystal(data?.crystals?.[key]);
        return obj;
      },
      {}
    );
    this.hotm = new SkyblockMemberMiningHotm(data || {});
    this.pickaxeAbility = data?.selected_pickaxe_ability || 'UNKNOWN';
    this.dailyEffect = data?.current_daily_effect || 'UNKNOWN';
  }
}

export default SkyblockMemberMining;
