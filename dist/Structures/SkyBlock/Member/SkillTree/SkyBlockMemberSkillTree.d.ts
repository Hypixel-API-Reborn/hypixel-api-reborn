import type { SkillLevelData, SkyBlockMemberSkillTreeName, SkyBlockMemberSkillTreeTokenName } from '../../../../Types/SkyBlock.ts';
declare class SkyBlockMemberSkillTree<Ability> {
    tree: SkyBlockMemberSkillTreeName;
    nodes: Record<string, number | boolean>;
    selectedAbility: Ability | 'UNKNOWN';
    tokensSpent: number;
    level: SkillLevelData;
    lastResetTimeStamp: number;
    lastReset: Date;
    constructor(data: Record<string, any>, tree: SkyBlockMemberSkillTreeName, tokenName: SkyBlockMemberSkillTreeTokenName);
    toString(): number;
}
export default SkyBlockMemberSkillTree;
//# sourceMappingURL=SkyBlockMemberSkillTree.d.ts.map