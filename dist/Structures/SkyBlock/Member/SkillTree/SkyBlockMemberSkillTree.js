import { getLevelByXp } from "../../../../Utils/SkyBlockUtils.js";
class SkyBlockMemberSkillTree {
    tree;
    nodes;
    selectedAbility;
    tokensSpent;
    level;
    lastResetTimeStamp;
    lastReset;
    constructor(data, tree, tokenName) {
        this.tree = tree;
        this.nodes = data?.nodes?.[tree] || {};
        this.selectedAbility = data?.selected_ability?.[tree] || 'UNKNOWN';
        this.tokensSpent = data?.tokens_spent?.[tokenName] || 0;
        this.level = getLevelByXp(data?.experience?.[tree] || 0, { type: `${tree}_tree` });
        this.lastResetTimeStamp = data?.last_reset?.[tree] || 0;
        this.lastReset = new Date(this.lastResetTimeStamp);
    }
    toString() {
        return this.level.level;
    }
}
export default SkyBlockMemberSkillTree;
//# sourceMappingURL=SkyBlockMemberSkillTree.js.map