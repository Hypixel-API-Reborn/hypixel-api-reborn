import SkyblockMemberJacobContestsMedals from './SkyblockMemberJacobContestsMedals.js';
import SkyblockMemberJacobContestsPerks from './SkyblockMemberJacobContestsPerks.js';
import SkyblockMemberJacobContestsUniqueBrackets from './SkyblockMemberJacobContestsUniqueBrackets.js';
import type SkyblockMemberJacobContest from './SkyblockMemberJacobContest.js';
import type { JacobCrops } from '../../../../Types/Skyblock.js';

class SkyblockMemberJacobContests {
  perks: SkyblockMemberJacobContestsPerks;
  medals: SkyblockMemberJacobContestsMedals;
  uniqueBrackets: SkyblockMemberJacobContestsUniqueBrackets;
  personalBests: Record<keyof JacobCrops, number>;
  contests: Record<string, SkyblockMemberJacobContest>;
  constructor(data: Record<string, any>) {
    this.perks = new SkyblockMemberJacobContestsPerks(data?.perks || {});
    this.medals = new SkyblockMemberJacobContestsMedals(data?.medals_inv || {});
    this.uniqueBrackets = new SkyblockMemberJacobContestsUniqueBrackets(data?.unique_brackets || {});
    this.personalBests = data?.personal_bests || {};
    const contests = data?.contests || {};
    this.contests = Object.keys(contests).reduce((obj: Record<string, SkyblockMemberJacobContest>, key: string) => {
      obj[key] = contests[key];
      return obj;
    }, {});
  }
}

export default SkyblockMemberJacobContests;
