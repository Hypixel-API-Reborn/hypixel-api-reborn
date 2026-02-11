import type { BestiaryCategory } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberBestiary {
    kills: Record<string, number>;
    deaths: Record<string, number>;
    lastClaimedMilestone: number;
    level: number;
    maxLevel: number;
    familiesUnlocked: number;
    familiesCompleted: number;
    totalFamilies: number;
    familyTiers: number;
    maxFamilyTiers: number;
    categories: Record<string, BestiaryCategory>;
    constructor(data: Record<string, any>);
    private getBestiaryMobs;
    private getBestiary;
}
export default SkyBlockMemberBestiary;
//# sourceMappingURL=SkyBlockMemberBestiary.d.ts.map