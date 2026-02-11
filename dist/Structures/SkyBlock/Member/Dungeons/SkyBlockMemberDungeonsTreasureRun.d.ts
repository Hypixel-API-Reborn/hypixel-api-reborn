import SkyBlockMemberDungeonsTreasuresChest from './SkyBlockMemberDungeonsTreasuresChest.js';
import type { DungeonGamemode } from '../../../../Types/SkyBlock.js';
import type { UUID, UserInput } from '../../../../Types/Global.js';
declare class SkyBlockMemberDungeonsTreasureRun {
    runId: string;
    completionTimestamp: number;
    completionDate: Date;
    type: DungeonGamemode;
    dungeonTier: number;
    participants: {
        playerUUID: UUID;
        displayName: UserInput;
        classMilestone: number;
    }[];
    chests: SkyBlockMemberDungeonsTreasuresChest[];
    constructor(data: Record<string, any>, chestData: Record<string, any>[]);
    toString(): string;
}
export default SkyBlockMemberDungeonsTreasureRun;
//# sourceMappingURL=SkyBlockMemberDungeonsTreasureRun.d.ts.map