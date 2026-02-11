import SkyBlockMemberSlayerClaimedLevels from './SkyBlockMemberSlayerClaimedLevels.js';
import { getSlayerLevel } from '../../../../Utils/SkyBlockUtils.js';
class SkyBlockMemberSlayer {
    claimedLevels;
    tier1Kills;
    tier2Kills;
    tier3Kills;
    tier4Kills;
    tier5Kills;
    level;
    constructor(data, slayer) {
        this.claimedLevels = new SkyBlockMemberSlayerClaimedLevels(data?.claimed_levels || {});
        this.tier1Kills = data?.boss_kills_tier_0 || 0;
        this.tier2Kills = data?.boss_kills_tier_1 || 0;
        this.tier3Kills = data?.boss_kills_tier_2 || 0;
        this.tier4Kills = data?.boss_kills_tier_3 || 0;
        this.tier5Kills = data?.boss_kills_tier_4 || 0;
        this.level = getSlayerLevel(slayer, data?.xp);
    }
    toString() {
        return this.level.level;
    }
}
export default SkyBlockMemberSlayer;
//# sourceMappingURL=SkyBlockMemberSlayer.js.map