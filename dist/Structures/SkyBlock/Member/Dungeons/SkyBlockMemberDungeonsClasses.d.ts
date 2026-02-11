import type { DungeonClass, SkillLevelData } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberDungeonsClasses {
    selected: DungeonClass | 'UNKNOWN';
    healer: SkillLevelData;
    berserk: SkillLevelData;
    mage: SkillLevelData;
    archer: SkillLevelData;
    tank: SkillLevelData;
    average: number;
    constructor(data: Record<string, any>);
    toString(): DungeonClass | 'UNKNOWN';
}
export default SkyBlockMemberDungeonsClasses;
//# sourceMappingURL=SkyBlockMemberDungeonsClasses.d.ts.map