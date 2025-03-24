import SkyblockMemberMiningHotmForge from './SkyblockMemberMiningHotmForge.js';
import { getLevelByXp } from '../../../../Utils/SkyblockUtils.js';
import type { SkillLevelData } from '../../../../Types/Skyblock.js';

class SkyblockMemberMiningHotm {
  level: SkillLevelData;
  nodes: Record<string, number | boolean>;
  tokensSpent: number;
  forge: SkyblockMemberMiningHotmForge;
  constructor(data: Record<string, any>) {
    this.level = getLevelByXp(data?.experience || 0, { type: 'hotm' });
    this.nodes = data?.nodes || {};
    this.tokensSpent = data?.tokens_spent || 0;
    this.forge = new SkyblockMemberMiningHotmForge(
      data?.forge_processes?.forge_1 || {},
      Number(this.nodes?.forge_time) || 0
    );
  }

  toString(): number {
    return this.level.level;
  }
}

export default SkyblockMemberMiningHotm;
