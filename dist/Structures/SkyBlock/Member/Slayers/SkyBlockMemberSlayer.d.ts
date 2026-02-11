import SkyBlockMemberSlayerClaimedLevels from './SkyBlockMemberSlayerClaimedLevels.js';
import type { LevelData, SkyBlockSlayer } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberSlayer {
    claimedLevels: SkyBlockMemberSlayerClaimedLevels;
    tier1Kills: number;
    tier2Kills: number;
    tier3Kills: number;
    tier4Kills: number;
    tier5Kills: number;
    level: LevelData;
    constructor(data: Record<string, any>, slayer: SkyBlockSlayer);
    toString(): number;
}
export default SkyBlockMemberSlayer;
//# sourceMappingURL=SkyBlockMemberSlayer.d.ts.map