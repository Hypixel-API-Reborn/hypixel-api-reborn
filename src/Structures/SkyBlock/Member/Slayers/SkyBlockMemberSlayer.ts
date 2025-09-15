import SkyBlockMemberSlayerClaimedLevels from './SkyBlockMemberSlayerClaimedLevels.js';
import { getSlayerLevel } from '../../../../Utils/SkyBlockUtils.js';
import type { LevelData, SkyBlockSlayer } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberSlayer {
  claimedLevels: SkyBlockMemberSlayerClaimedLevels;
  tier1Kills: number;
  tier2Kills: number;
  tier3Kills: number;
  tier4Kills: number;
  tier5Kills: number;
  level: LevelData;
  constructor(data: Record<string, any>, slayer: SkyBlockSlayer) {
    this.claimedLevels = new SkyBlockMemberSlayerClaimedLevels(data?.claimed_levels || {});
    this.tier1Kills = data?.boss_kills_tier_0 || 0;
    this.tier2Kills = data?.boss_kills_tier_1 || 0;
    this.tier3Kills = data?.boss_kills_tier_2 || 0;
    this.tier4Kills = data?.boss_kills_tier_3 || 0;
    this.tier5Kills = data?.boss_kills_tier_4 || 0;
    this.level = getSlayerLevel(slayer, data?.xp);
  }

  toString(): number {
    return this.level.level;
  }
}

export default SkyBlockMemberSlayer;
