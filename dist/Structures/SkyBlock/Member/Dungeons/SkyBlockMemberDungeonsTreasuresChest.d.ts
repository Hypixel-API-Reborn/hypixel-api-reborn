import type { DungeonsTreasureType } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberDungeonsTreasuresChest {
    runId: string;
    chestId: string;
    chestType: DungeonsTreasureType;
    rewards: string[];
    rolledRNGMeter: boolean;
    quality: number;
    shinyEligible: boolean;
    paid: boolean;
    rerolls: boolean;
    constructor(data: Record<string, any>);
    toString(): string;
}
export default SkyBlockMemberDungeonsTreasuresChest;
//# sourceMappingURL=SkyBlockMemberDungeonsTreasuresChest.d.ts.map