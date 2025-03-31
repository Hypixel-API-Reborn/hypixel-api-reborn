import type { SkyblockDragon } from '../../../../Types/Skyblock.js';

class SkyblockMemberPlayerStatsEndIslandDragonFightDragon {
  mostDamage: number;
  highestRank: number;
  fastestKill: number;
  amountSummoned: number;
  summoningEyesContributed: number;
  constructor(data: Record<string, any>, dragon: SkyblockDragon) {
    this.mostDamage = data?.most_damage?.[dragon] || 0;
    this.highestRank = data?.highest_rank?.[dragon] || 0;
    this.fastestKill = data?.fastest_kill?.[dragon] || 0;
    this.amountSummoned = data?.amount_summoned?.[dragon] || 0;
    this.summoningEyesContributed = data?.summoning_eyes_contributed?.[dragon] || 0;
  }

  toString(): number {
    return this.amountSummoned;
  }
}

export default SkyblockMemberPlayerStatsEndIslandDragonFightDragon;
