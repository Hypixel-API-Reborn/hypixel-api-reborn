import type { ForgeItemType, MiningForgeItemId, MiningForgeItemName } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberMiningHotmForgeItem {
    type: ForgeItemType | 'UNKNOWN';
    id: MiningForgeItemId | 'UNKNOWN';
    name: MiningForgeItemName | 'UNKNOWN';
    startTime: number;
    startTimeAt: Date;
    endTime: number;
    endTimeAt: Date;
    slot: number;
    notified: boolean;
    oldItem: string | null;
    constructor(data: Record<string, any>, quickForgeTime?: number);
    toString(): MiningForgeItemName | 'UNKNOWN';
}
export default SkyBlockMemberMiningHotmForgeItem;
//# sourceMappingURL=SkyBlockMemberMiningHotmForgeItem.d.ts.map