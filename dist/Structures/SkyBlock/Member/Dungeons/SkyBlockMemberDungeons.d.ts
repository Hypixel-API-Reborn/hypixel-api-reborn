import SkyBlockMemberDungeonsClasses from './SkyBlockMemberDungeonsClasses.js';
import SkyBlockMemberDungeonsMode from './SkyBlockMemberDungeonsMode.js';
import SkyBlockMemberDungeonsTreasureRun from './SkyBlockMemberDungeonsTreasureRun.js';
import type { DungeonFloor, SkillLevelData } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberDungeons {
    catacombs: SkyBlockMemberDungeonsMode;
    masterCatacombs: SkyBlockMemberDungeonsMode;
    level: SkillLevelData;
    classes: SkyBlockMemberDungeonsClasses;
    unlockedJournals: string[];
    treasures: SkyBlockMemberDungeonsTreasureRun[];
    lastDungeonRun: DungeonFloor | 'UNKNOWN';
    secrets: number;
    constructor(data: Record<string, any>);
    toString(): number;
}
export default SkyBlockMemberDungeons;
//# sourceMappingURL=SkyBlockMemberDungeons.d.ts.map