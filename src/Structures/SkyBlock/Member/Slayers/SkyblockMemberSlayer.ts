import SkyblockMemberSlayerClaimedLevels from './SkyblockMemberSlayerClaimedLevels.js';
import { getSlayerLevel } from '../../../../Utils/SkyblockUtils.js';
import type { LevelData, SkyblockSlayer } from '../../../../Types/Skyblock.js';

class SkyblockMemberSlayer {
  claimedLevels: SkyblockMemberSlayerClaimedLevels;
  tier0Kills: number;
  tier1Kills: number;
  tier2Kills: number;
  tier3Kills: number;
  tier4Kills: number;
  level: LevelData;
  constructor(data: Record<string, any>, slayer: SkyblockSlayer) {
    this.claimedLevels = new SkyblockMemberSlayerClaimedLevels(data?.claimed_levels || {});
    this.tier0Kills = data?.boss_kills_tier_0 || 0;
    this.tier1Kills = data?.boss_kills_tier_1 || 0;
    this.tier2Kills = data?.boss_kills_tier_2 || 0;
    this.tier3Kills = data?.boss_kills_tier_3 || 0;
    this.tier4Kills = data?.boss_kills_tier_4 || 0;
    this.level = getSlayerLevel(slayer, data?.xp);
  }

  toString(): number {
    return this.level.level;
  }
}

export default SkyblockMemberSlayer;
