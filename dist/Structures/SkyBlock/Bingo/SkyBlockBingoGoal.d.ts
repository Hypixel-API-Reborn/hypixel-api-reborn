import type { SkyBlockBingoGoalType } from '../../../Types/SkyBlock.js';
declare class SkyBlockBingoGoal {
    name: string;
    id: string;
    row: number | null;
    column: number | null;
    lore: string;
    progress: number;
    tiers: number[];
    requiredAmount: number | null;
    type: SkyBlockBingoGoalType;
    constructor(data: Record<string, any>, position?: number);
    toString(): string;
}
export default SkyBlockBingoGoal;
//# sourceMappingURL=SkyBlockBingoGoal.d.ts.map