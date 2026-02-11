import { MiningForgeItems, MiningForgeQuickForgeMultiplier } from '../../../../Utils/Constants.js';
class SkyBlockMemberMiningHotmForgeItem {
    type;
    id;
    name;
    startTime;
    startTimeAt;
    endTime;
    endTimeAt;
    slot;
    notified;
    oldItem;
    constructor(data, quickForgeTime = 0) {
        this.type = data?.type || 'UNKNOWN';
        this.id = data?.id || 'UNKNOWN';
        this.name = MiningForgeItems?.[this.id]?.name || 'UNKNOWN';
        this.startTime = data?.startTime || 0;
        this.startTimeAt = new Date(this.startTime);
        this.endTime =
            this.startTime +
                (MiningForgeItems?.[this.id]?.duration ?? 0) * (MiningForgeQuickForgeMultiplier[quickForgeTime] ?? 1);
        this.endTimeAt = new Date(this.endTime);
        this.slot = data?.slot ?? 0;
        this.notified = data?.notified ?? false;
        this.oldItem = data?.oldItem ?? null;
    }
    toString() {
        return this.name;
    }
}
export default SkyBlockMemberMiningHotmForgeItem;
//# sourceMappingURL=SkyBlockMemberMiningHotmForgeItem.js.map