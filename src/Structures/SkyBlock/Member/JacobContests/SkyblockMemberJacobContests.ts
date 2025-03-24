import SkyblockMemberJacobContestsMedals from './SkyblockMemberJacobContestsMedals.js';
import SkyblockMemberJacobContestsPerks from './SkyblockMemberJacobContestsPerks.js';
import type { JacobCrops } from '../../../../Types/Skyblock.js';

class SkyblockMemberJacobContests {
  perks: SkyblockMemberJacobContestsPerks;
  medals: SkyblockMemberJacobContestsMedals;
  uniqueBrackets: {
    bronze?: JacobCrops[];
    silver?: JacobCrops[];
    gold?: JacobCrops[];
    platinum?: JacobCrops[];
    diamond?: JacobCrops[];
  };
  personalBests: Record<keyof JacobCrops, number>;
  contests: Record<
    string,
    { collected: number; claimed_rewards?: boolean; claimed_position?: number; claimed_participants?: number }
  >;
  constructor(data: Record<string, any>) {
    this.perks = new SkyblockMemberJacobContestsPerks(data?.perks || {});
    this.medals = new SkyblockMemberJacobContestsMedals(data?.medals_inv || {});
    this.uniqueBrackets = data?.unique_brackets || {};
    this.personalBests = data?.personal_bests || {};
    this.contests = data?.contests || {};
  }
}

export default SkyblockMemberJacobContests;
