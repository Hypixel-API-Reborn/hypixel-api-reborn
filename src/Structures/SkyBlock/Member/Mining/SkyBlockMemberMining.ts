import SkyBlockMemberMiningCrystal from './SkyBlockMemberMiningCrystal.ts';
import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.ts';
import SkyBlockMemberMiningPowders from './SkyBlockMemberMiningPowders.ts';
import type SkyBlockMemberSkillTrees from '../SkillTree/SkyBlockMemberSkillTrees.ts';
import type { MiningCrystal, MiningPickaxeAbility, MiningSkyMallEffect } from '../../../../Types/index.ts';

class SkyBlockMemberMining {
  powder: SkyBlockMemberMiningPowders;
  crystals: Record<MiningCrystal, SkyBlockMemberMiningCrystal>;
  hotm: SkyBlockMemberMiningHotm;
  pickaxeAbility: MiningPickaxeAbility | 'UNKNOWN';
  dailyEffect: MiningSkyMallEffect | 'UNKNOWN';
  constructor(data: Record<string, any>, skillTrees: SkyBlockMemberSkillTrees) {
    this.powder = new SkyBlockMemberMiningPowders(data ?? {});
    this.crystals = Object.keys(data?.crystals ?? {}).reduce(
      (obj: Record<string, SkyBlockMemberMiningCrystal>, key: string) => {
        obj[key.split('_crystal')[0] ?? 'jade'] = new SkyBlockMemberMiningCrystal(data?.crystals?.[key]);
        return obj;
      },
      {}
    );
    this.hotm = new SkyBlockMemberMiningHotm(data ?? {}, skillTrees);
    this.pickaxeAbility = data?.selected_pickaxe_ability ?? 'UNKNOWN';
    this.dailyEffect = data?.current_daily_effect ?? 'UNKNOWN';
  }
}

export default SkyBlockMemberMining;
