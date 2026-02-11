import SkyBlockMemberMiningHotmForge from './SkyBlockMemberMiningHotmForge.js';
import { getLevelByXp } from '../../../../Utils/SkyBlockUtils.js';
class SkyBlockMemberMiningHotm {
    level;
    nodes;
    tokensSpent;
    forge;
    constructor(data) {
        this.level = getLevelByXp(data?.experience || 0, { type: 'hotm' });
        this.nodes = data?.nodes || {};
        this.tokensSpent = data?.tokens_spent || 0;
        this.forge = new SkyBlockMemberMiningHotmForge(data?.forge_processes?.forge_1 || {}, Number(this.nodes?.forge_time) || 0);
    }
    toString() {
        return this.level.level;
    }
}
export default SkyBlockMemberMiningHotm;
//# sourceMappingURL=SkyBlockMemberMiningHotm.js.map