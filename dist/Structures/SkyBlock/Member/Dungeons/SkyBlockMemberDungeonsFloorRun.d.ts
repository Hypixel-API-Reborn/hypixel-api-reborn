import type { DungeonClass } from '../../../../Types/SkyBlock.js';
import type { UUID } from '../../../../Types/Global.js';
declare class SkyBlockMemberDungeonsFloorRun {
    timestamp: number;
    explorationScore: number;
    speedScore: number;
    skillScore: number;
    bonusScore: number;
    score: number;
    selectedClass: DungeonClass;
    teammates: UUID[];
    elapsedTime: number;
    damageDealt: number;
    deaths: number;
    mobsKilled: number;
    secretsFound: number;
    damageMitigated: number;
    allyHealing: number;
    constructor(data: Record<string, any>);
    toString(): number;
}
export default SkyBlockMemberDungeonsFloorRun;
//# sourceMappingURL=SkyBlockMemberDungeonsFloorRun.d.ts.map