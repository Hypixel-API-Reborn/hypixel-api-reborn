import type { DungeonsTreasureType } from '../../../../Types/Skyblock.js';

class SkyblockMemberDungeonsTreasuresChest {
  runId: string;
  chestId: string;
  chestType: DungeonsTreasureType;
  rewards: string[];
  rolledRNGMeter: boolean;
  quality: number;
  shinyEligible: boolean;
  paid: boolean;
  rerolls: boolean;
  constructor(data: Record<string, any>) {
    this.runId = data?.run_id || 'UNKNOWN';
    this.chestId = data?.chest_id || 'UNKNOWN';
    this.chestType = data?.treasure_type || 0;
    this.rewards = data?.rewards?.rewards || [];
    this.rolledRNGMeter = data?.rewards?.rolled_rng_meter_randomly || false;
    this.quality = data?.quality || 0;
    this.shinyEligible = data?.shiny_eligible || false;
    this.paid = data?.paid || false;
    this.rerolls = 0 !== (data?.rerolls || 0);
  }

  toString(): string {
    return this.runId;
  }
}

export default SkyblockMemberDungeonsTreasuresChest;
