import SkyBlockMemberMiningHotmForge from './SkyBlockMemberMiningHotmForge.js';
import { getLevelByXp } from '../../../../Utils/SkyBlockUtils.js';
import type { SkillLevelData } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberMiningHotm {
  level: SkillLevelData;
  nodes: Record<string, number | boolean>;
  tokensSpent: number;
  forge: SkyBlockMemberMiningHotmForge;
  constructor(data: Record<string, any>) {
    this.level = getLevelByXp(data?.experience || 0, { type: 'hotm' });
    this.nodes = data?.nodes || {};
    this.tokensSpent = data?.tokens_spent || 0;
    this.forge = new SkyBlockMemberMiningHotmForge(
      data?.forge_processes?.forge_1 || {},
      Number(this.nodes?.forge_time) || 0
    );
  }

  toString(): number {
    return this.level.level;
  }
}

export default SkyBlockMemberMiningHotm;
