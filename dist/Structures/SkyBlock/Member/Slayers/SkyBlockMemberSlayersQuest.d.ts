import type { SkyBlockArea, SkyBlockSlayer } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberSlayersQuest {
    type: SkyBlockSlayer | 'UNKNOWN';
    tier: number;
    startTimestamp: number;
    startAt: Date;
    completionState: number;
    usedArmor: boolean;
    solo: boolean;
    combatXp: number;
    recentMobKills: {
        xp: number;
        timestamp: number;
        timestampAt: Date;
    }[];
    lastKilledMobIsland: SkyBlockArea | 'UNKNOWN';
    xpOnLastFollowerSpawn: number;
    spawnTimestamp: number;
    spawnAt: Date;
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberSlayersQuest;
//# sourceMappingURL=SkyBlockMemberSlayersQuest.d.ts.map