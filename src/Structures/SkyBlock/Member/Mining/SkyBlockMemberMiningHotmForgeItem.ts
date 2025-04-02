import { MiningForgeItems, MiningForgeQuickForgeMultiplier } from '../../../../Utils/Constants.js';
import type { ForgeItemType, MiningForgeItemId, MiningForgeItemName } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberMiningHotmForgeItem {
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
  constructor(data: Record<string, any>, quickForgeTime: number = 0) {
    this.type = data?.type || 'UNKNOWN';
    this.id = data?.id || 'UNKNOWN';
    this.name = MiningForgeItems?.[this.id].name || 'UNKNOWN';
    this.startTime = data?.startTime || 0;
    this.startTimeAt = new Date(this.startTime);
    this.endTime =
      this.startTime + MiningForgeItems?.[this.id].duration * (MiningForgeQuickForgeMultiplier[quickForgeTime] || 1);
    this.endTimeAt = new Date(this.endTime);
    this.slot = data?.slot || 0;
    this.notified = data?.notified || false;
    this.oldItem = data?.oldItem || null;
  }

  toString(): MiningForgeItemName | 'UNKNOWN' {
    return this.name;
  }
}

export default SkyBlockMemberMiningHotmForgeItem;
