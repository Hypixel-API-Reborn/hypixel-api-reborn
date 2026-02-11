import type { TaskLevelingSort } from '../../../Types/SkyBlock.js';
declare class SkyBlockMemberLeveling {
    experience: number;
    level: number;
    completions: Record<string, number>;
    completed: string[];
    completedTasks: string[];
    lastViewedTasks: string[];
    highestPetScore: number;
    miningFiestaOresMined: number;
    fishingFestivalSharksKilled: number;
    taskSort: TaskLevelingSort | 'UNKNOWN';
    claimedTalisman: boolean;
    emblemUnlocks: string[];
    constructor(data: Record<string, any>);
    toString(): number;
}
export default SkyBlockMemberLeveling;
//# sourceMappingURL=SkyBlockMemberLeveling.d.ts.map