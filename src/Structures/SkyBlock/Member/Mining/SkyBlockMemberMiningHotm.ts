import SkyBlockMemberMiningHotmForge from './SkyBlockMemberMiningHotmForge.js';
import type SkyBlockMemberSkillTrees from '../SkillTree/SkyBlockMemberSkillTrees.ts';

class SkyBlockMemberMiningHotm {
  forge: SkyBlockMemberMiningHotmForge;
  constructor(data: Record<string, any>, skillTrees: SkyBlockMemberSkillTrees) {
    this.forge = new SkyBlockMemberMiningHotmForge(
      data?.forge_processes?.forge_1 || {},
      Number(skillTrees.mining.nodes?.forge_time) || 0
    );
  }
}

export default SkyBlockMemberMiningHotm;
