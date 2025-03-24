import SkyblockMemberDungeonsTreasuresChest from './SkyblockMemberDungeonsTreasuresChest.js';
import type { DungeonGamemode } from '../../../../Types/Skyblock.js';
import type { UUID, UserInput } from '../../../../Types/Global.js';

class SkyblockMemberDungeonsTreasureRun {
  runId: string;
  completionTimestamp: number;
  completionDate: Date;
  type: DungeonGamemode;
  dungeonTier: number;
  participants: { playerUUID: UUID; displayName: UserInput; classMilestone: number }[];
  chests: SkyblockMemberDungeonsTreasuresChest[];
  constructor(data: Record<string, any>, chestData: Record<string, any>[]) {
    this.runId = data?.run_id || 'UNKNOWN';
    this.completionTimestamp = data?.completion_ts || 0;
    this.completionDate = new Date(this.completionTimestamp);
    this.type = data?.type || 'catacoombs';
    this.dungeonTier = data?.dungeon_tier || 0;
    this.participants = data?.participants || [];
    this.chests = chestData
      .filter((chest) => chest.run_id === this.runId)
      .map((chest) => new SkyblockMemberDungeonsTreasuresChest(chest));
  }

  toString(): string {
    return this.runId;
  }
}

export default SkyblockMemberDungeonsTreasureRun;
