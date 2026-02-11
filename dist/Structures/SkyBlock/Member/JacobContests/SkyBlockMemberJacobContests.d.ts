import SkyBlockMemberJacobContestsMedals from './SkyBlockMemberJacobContestsMedals.js';
import SkyBlockMemberJacobContestsPerks from './SkyBlockMemberJacobContestsPerks.js';
import SkyBlockMemberJacobContestsUniqueBrackets from './SkyBlockMemberJacobContestsUniqueBrackets.js';
import type SkyBlockMemberJacobContest from './SkyBlockMemberJacobContest.js';
import type { JacobCrops } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberJacobContests {
    perks: SkyBlockMemberJacobContestsPerks;
    medals: SkyBlockMemberJacobContestsMedals;
    uniqueBrackets: SkyBlockMemberJacobContestsUniqueBrackets;
    personalBests: Record<keyof JacobCrops, number>;
    contests: Record<string, SkyBlockMemberJacobContest>;
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberJacobContests;
//# sourceMappingURL=SkyBlockMemberJacobContests.d.ts.map