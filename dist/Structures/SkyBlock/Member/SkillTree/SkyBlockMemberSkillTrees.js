import SkyBlockMemberSkillTree from './SkyBlockMemberSkillTree.js';
class SkyBlockMemberSkillTrees {
    mining;
    foraging;
    refundAbilityFree;
    constructor(data) {
        this.mining = new SkyBlockMemberSkillTree(data, 'mining', 'mountain');
        this.foraging = new SkyBlockMemberSkillTree(data, 'foraging', 'forest');
        this.refundAbilityFree = data?.refund_ability_free || false;
    }
}
export default SkyBlockMemberSkillTrees;
//# sourceMappingURL=SkyBlockMemberSkillTrees.js.map