import SkyBlockMemberSkillTree from './SkyBlockMemberSkillTree.js';
import type { MiningPickaxeAbility } from '../../../../Types/SkyBlock.ts';

class SkyBlockMemberSkillTrees {
  mining: SkyBlockMemberSkillTree<MiningPickaxeAbility>;
  foraging: SkyBlockMemberSkillTree<MiningPickaxeAbility>;
  refundAbilityFree: boolean;
  constructor(data: Record<string, any>) {
    this.mining = new SkyBlockMemberSkillTree<MiningPickaxeAbility>(data, 'mining', 'mountain');
    this.foraging = new SkyBlockMemberSkillTree<MiningPickaxeAbility>(data, 'foraging', 'forest');
    this.refundAbilityFree = data?.refund_ability_free || false;
  }
}

export default SkyBlockMemberSkillTrees;
