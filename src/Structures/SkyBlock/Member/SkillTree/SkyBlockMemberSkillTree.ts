import { getLevelByXp } from '../../../../Utils/SkyBlockUtils.ts';
import type {
  SkillLevelData,
  SkyBlockMemberSkillTreeName,
  SkyBlockMemberSkillTreeTokenName
} from '../../../../Types/SkyBlock.ts';

class SkyBlockMemberSkillTree<Ability> {
  tree: SkyBlockMemberSkillTreeName;
  nodes: Record<string, number | boolean>;
  selectedAbility: Ability | 'UNKNOWN';
  tokensSpent: number;
  level: SkillLevelData;
  lastResetTimeStamp: number;
  lastReset: Date;
  constructor(
    data: Record<string, any>,
    tree: SkyBlockMemberSkillTreeName,
    tokenName: SkyBlockMemberSkillTreeTokenName
  ) {
    this.tree = tree;
    this.nodes = data?.nodes?.[tree] || {};
    this.selectedAbility = data?.selected_ability?.[tree] || 'UNKNOWN';
    this.tokensSpent = data?.tokens_spent?.[tokenName] || 0;
    this.level = getLevelByXp(data?.experience?.[tree] || 0, { type: `${tree}_tree` });
    this.lastResetTimeStamp = data?.last_reset?.[tree] || 0;
    this.lastReset = new Date(this.lastResetTimeStamp);
  }

  toString(): number {
    return this.level.level;
  }
}

export default SkyBlockMemberSkillTree;
