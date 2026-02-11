import SkyBlockMemberJacobContestsMedals from './SkyBlockMemberJacobContestsMedals.js';
import SkyBlockMemberJacobContestsPerks from './SkyBlockMemberJacobContestsPerks.js';
import SkyBlockMemberJacobContestsUniqueBrackets from './SkyBlockMemberJacobContestsUniqueBrackets.js';
class SkyBlockMemberJacobContests {
    perks;
    medals;
    uniqueBrackets;
    personalBests;
    contests;
    constructor(data) {
        this.perks = new SkyBlockMemberJacobContestsPerks(data?.perks || {});
        this.medals = new SkyBlockMemberJacobContestsMedals(data?.medals_inv || {});
        this.uniqueBrackets = new SkyBlockMemberJacobContestsUniqueBrackets(data?.unique_brackets || {});
        this.personalBests = data?.personal_bests || {};
        const contests = data?.contests || {};
        this.contests = Object.keys(contests).reduce((obj, key) => {
            obj[key] = contests[key];
            return obj;
        }, {});
    }
}
export default SkyBlockMemberJacobContests;
//# sourceMappingURL=SkyBlockMemberJacobContests.js.map