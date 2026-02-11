import type { SkillLevelData } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberPlayerDataSkills {
    fishing: SkillLevelData;
    alchemy: SkillLevelData;
    runecrafting: SkillLevelData;
    mining: SkillLevelData;
    farming: SkillLevelData;
    enchanting: SkillLevelData;
    taming: SkillLevelData;
    foraging: SkillLevelData;
    social: SkillLevelData;
    carpentry: SkillLevelData;
    combat: SkillLevelData;
    average: number;
    nonCosmeticAverage: number;
    constructor(data: Record<string, any>, skillCaps: {
        farmingCap: number;
        tamingCap: number;
    });
    toString(): number;
}
export default SkyBlockMemberPlayerDataSkills;
//# sourceMappingURL=SkyBlockMemberPlayerDataSkills.d.ts.map