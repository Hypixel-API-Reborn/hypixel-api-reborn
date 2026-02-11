import SkyBlockMemberAccessoryBagTuning from './SkyBlockMemberAccessoryBagTuning.js';
import type { SkyBlockMemberPower } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberAccessoryBag {
    selectedPower: SkyBlockMemberPower | null;
    unlockedPowers: SkyBlockMemberPower[];
    bagUpgradesPurchased: number;
    highestMagicalPower: number;
    tuning: SkyBlockMemberAccessoryBagTuning;
    constructor(data: Record<string, any>);
    toString(): SkyBlockMemberPower | null;
}
export default SkyBlockMemberAccessoryBag;
//# sourceMappingURL=SkyBlockMemberAccessoryBag.d.ts.map