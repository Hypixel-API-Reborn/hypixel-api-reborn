import SkyBlockMemberDungeonsTreasuresChest from './SkyBlockMemberDungeonsTreasuresChest.js';
import type { DungeonGamemode } from '../../../../Types/SkyBlock.js';
import type { UUID, UserInput } from '../../../../Types/Global.js';

class SkyBlockMemberDungeonsTreasureRun {
  runId: string;
  completionTimestamp: number;
  completionDate: Date;
  type: DungeonGamemode;
  dungeonTier: number;
  participants: { playerUUID: UUID; displayName: UserInput; classMilestone: number }[];
  chests: SkyBlockMemberDungeonsTreasuresChest[];
  constructor(data: Record<string, any>, chestData: Record<string, any>[]) {
    this.runId = data?.run_id || 'UNKNOWN';
    this.completionTimestamp = data?.completion_ts || 0;
    this.completionDate = new Date(this.completionTimestamp);
    this.type = data?.type || 'catacombs';
    this.dungeonTier = data?.dungeon_tier || 0;
    this.participants = data?.participants || [];
    this.chests = chestData
      .filter((chest) => chest.run_id === this.runId)
      .map((chest) => new SkyBlockMemberDungeonsTreasuresChest(chest));
  }

  toString(): string {
    return this.runId;
  }
}

export default SkyBlockMemberDungeonsTreasureRun;
