import SkyBlockMemberMiningHotmForge from './SkyBlockMemberMiningHotmForge.js';
import type { SkillLevelData } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberMiningHotm {
    level: SkillLevelData;
    nodes: Record<string, number | boolean>;
    tokensSpent: number;
    forge: SkyBlockMemberMiningHotmForge;
    constructor(data: Record<string, any>);
    toString(): number;
}
export default SkyBlockMemberMiningHotm;
//# sourceMappingURL=SkyBlockMemberMiningHotm.d.ts.map