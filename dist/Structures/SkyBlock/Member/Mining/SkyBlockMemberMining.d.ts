import SkyBlockMemberMiningCrystal from './SkyBlockMemberMiningCrystal.js';
import SkyBlockMemberMiningHotm from './SkyBlockMemberMiningHotm.js';
import SkyBlockMemberMiningPowders from './SkyBlockMemberMiningPowders.js';
import type { MiningCrystal, MiningPickaxeAbility, MiningSkyMallEffect } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberMining {
    powder: SkyBlockMemberMiningPowders;
    crystals: Record<MiningCrystal, SkyBlockMemberMiningCrystal>;
    hotm: SkyBlockMemberMiningHotm;
    pickaxeAbility: MiningPickaxeAbility | 'UNKNOWN';
    dailyEffect: MiningSkyMallEffect | 'UNKNOWN';
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberMining;
//# sourceMappingURL=SkyBlockMemberMining.d.ts.map