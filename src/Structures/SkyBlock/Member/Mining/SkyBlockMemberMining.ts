import SkyBlockMemberMiningCrystal from './SkyBlockMemberMiningCrystal.js';
import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.js';
import SkyBlockMemberMiningPowders from './SkyBlockMemberMiningPowders.js';
import type { MiningCrystal, MiningPickaxeAbility, MiningSkyMallEffect } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberMining {
  powder: SkyBlockMemberMiningPowders;
  crystals: Record<MiningCrystal, SkyBlockMemberMiningCrystal>;
  hotm: SkyBlockMemberMiningHotm;
  pickaxeAbility: MiningPickaxeAbility | 'UNKNOWN';
  dailyEffect: MiningSkyMallEffect | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.powder = new SkyBlockMemberMiningPowders(data || {});
    this.crystals = Object.keys(data?.crystals || {}).reduce(
      (obj: Record<string, SkyBlockMemberMiningCrystal>, key: string) => {
        obj[key.split('_crystal')[0] || 'jade'] = new SkyBlockMemberMiningCrystal(data?.crystals?.[key]);
        return obj;
      },
      {}
    );
    this.hotm = new SkyBlockMemberMiningHotm(data || {});
    this.pickaxeAbility = data?.selected_pickaxe_ability || 'UNKNOWN';
    this.dailyEffect = data?.current_daily_effect || 'UNKNOWN';
  }
}

export default SkyBlockMemberMining;
