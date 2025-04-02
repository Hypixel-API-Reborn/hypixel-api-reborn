import SkyBlockMemberJacobContestsMedals from './SkyBlockMemberJacobContestsMedals.js';
import SkyBlockMemberJacobContestsPerks from './SkyBlockMemberJacobContestsPerks.js';
import SkyBlockMemberJacobContestsUniqueBrackets from './SkyBlockMemberJacobContestsUniqueBrackets.js';
import type SkyBlockMemberJacobContest from './SkyBlockMemberJacobContest.js';
import type { JacobCrops } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberJacobContests {
  perks: SkyBlockMemberJacobContestsPerks;
  medals: SkyBlockMemberJacobContestsMedals;
  uniqueBrackets: SkyBlockMemberJacobContestsUniqueBrackets;
  personalBests: Record<keyof JacobCrops, number>;
  contests: Record<string, SkyBlockMemberJacobContest>;
  constructor(data: Record<string, any>) {
    this.perks = new SkyBlockMemberJacobContestsPerks(data?.perks || {});
    this.medals = new SkyBlockMemberJacobContestsMedals(data?.medals_inv || {});
    this.uniqueBrackets = new SkyBlockMemberJacobContestsUniqueBrackets(data?.unique_brackets || {});
    this.personalBests = data?.personal_bests || {};
    const contests = data?.contests || {};
    this.contests = Object.keys(contests).reduce((obj: Record<string, SkyBlockMemberJacobContest>, key: string) => {
      obj[key] = contests[key];
      return obj;
    }, {});
  }
}

export default SkyBlockMemberJacobContests;
