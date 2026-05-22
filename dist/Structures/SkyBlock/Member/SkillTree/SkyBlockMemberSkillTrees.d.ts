import SkyBlockMemberSkillTree from './SkyBlockMemberSkillTree.js';
import type { MiningPickaxeAbility } from '../../../../Types/SkyBlock.ts';
declare class SkyBlockMemberSkillTrees {
    mining: SkyBlockMemberSkillTree<MiningPickaxeAbility>;
    foraging: SkyBlockMemberSkillTree<MiningPickaxeAbility>;
    refundAbilityFree: boolean;
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberSkillTrees;
//# sourceMappingURL=SkyBlockMemberSkillTrees.d.ts.map