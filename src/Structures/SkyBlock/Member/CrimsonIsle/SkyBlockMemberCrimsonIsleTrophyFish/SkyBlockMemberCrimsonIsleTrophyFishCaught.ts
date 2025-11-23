import SkyBlockMemberCrimsonIsleTrophyFishFish from './SkyBlockMemberCrimsonIsleTrophyFishFish.js';
import type SkyBlockMemberCrimsonIsleTrophyFish from './SkyBlockMemberCrimsonIsleTrophyFish.js';
import type { CrimsonIsleTrophyFishRank } from '../../../../../Types/SkyBlock.js';

class SkyBlockMemberCrimsonIsleTrophyFishCaught {
  total: number;
  bronze: number;
  silver: number;
  gold: number;
  diamond: number;
  constructor(data: SkyBlockMemberCrimsonIsleTrophyFish) {
    this.total = this.getTrophyFishPerRank(data, 'Total');
    this.bronze = this.getTrophyFishPerRank(data, 'Bronze');
    this.silver = this.getTrophyFishPerRank(data, 'Silver');
    this.gold = this.getTrophyFishPerRank(data, 'Gold');
    this.diamond = this.getTrophyFishPerRank(data, 'Diamond');
  }

  toString(): number {
    return this.total;
  }

  private getTrophyFishPerRank(
    data: SkyBlockMemberCrimsonIsleTrophyFish,
    rank: CrimsonIsleTrophyFishRank | 'Total'
  ): number {
    let num = 0;

    (Object.keys(data) as (keyof SkyBlockMemberCrimsonIsleTrophyFish)[])
      .filter((fish) => !['toString', 'rank', 'caught'].includes(fish as string))
      .forEach((fishName) => {
        const fish = data[fishName] as SkyBlockMemberCrimsonIsleTrophyFishFish;
        num += fish[rank.toLowerCase() as keyof SkyBlockMemberCrimsonIsleTrophyFishFish] as number;
      });

    return num;
  }
}

export default SkyBlockMemberCrimsonIsleTrophyFishCaught;
