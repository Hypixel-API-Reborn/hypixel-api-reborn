import SkyBlockMemberCrimsonIsleTrophyFishFish from './SkyBlockMemberCrimsonIsleTrophyFishFish.js';
import type { CrimsonIsleTrophyFishRank } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberCrimsonIsleTrophyFish {
  rank: CrimsonIsleTrophyFishRank;
  gusher: SkyBlockMemberCrimsonIsleTrophyFishFish;
  blobfish: SkyBlockMemberCrimsonIsleTrophyFishFish;
  lavaHorse: SkyBlockMemberCrimsonIsleTrophyFishFish;
  goldenFish: SkyBlockMemberCrimsonIsleTrophyFishFish;
  volcanicStonefish: SkyBlockMemberCrimsonIsleTrophyFishFish;
  slugfish: SkyBlockMemberCrimsonIsleTrophyFishFish;
  vanille: SkyBlockMemberCrimsonIsleTrophyFishFish;
  obfuscatedFish1: SkyBlockMemberCrimsonIsleTrophyFishFish;
  obfuscatedFish2: SkyBlockMemberCrimsonIsleTrophyFishFish;
  obfuscatedFish3: SkyBlockMemberCrimsonIsleTrophyFishFish;
  sulphurSkitter: SkyBlockMemberCrimsonIsleTrophyFishFish;
  skeletonFish: SkyBlockMemberCrimsonIsleTrophyFishFish;
  manaRay: SkyBlockMemberCrimsonIsleTrophyFishFish;
  flyfish: SkyBlockMemberCrimsonIsleTrophyFishFish;
  steamingHotFlounder: SkyBlockMemberCrimsonIsleTrophyFishFish;
  soulFish: SkyBlockMemberCrimsonIsleTrophyFishFish;
  karateFish: SkyBlockMemberCrimsonIsleTrophyFishFish;
  moldfin: SkyBlockMemberCrimsonIsleTrophyFishFish;
  bronze: number;
  silver: number;
  gold: number;
  diamond: number;
  constructor(data: Record<string, any>) {
    const rewards = data?.rewards || [1];
    this.rank = this.getTrophyFishRank(rewards[rewards.length - 1]);
    this.gusher = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'gusher');
    this.blobfish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'blobfish');
    this.lavaHorse = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'lava_horse');
    this.goldenFish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'golden_fish');
    this.volcanicStonefish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'volcanic_stonefish');
    this.slugfish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'slugfish');
    this.vanille = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'vanille');
    this.obfuscatedFish1 = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'obfuscated_fish_1');
    this.obfuscatedFish2 = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'obfuscated_fish_2');
    this.obfuscatedFish3 = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'obfuscated_fish_3');
    this.sulphurSkitter = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'sulphur_skitter');
    this.skeletonFish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'skeleton_fish');
    this.manaRay = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'mana_ray');
    this.flyfish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'flyfish');
    this.steamingHotFlounder = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'steaming_hot_flounder');
    this.soulFish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'soul_fish');
    this.karateFish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'karate_fish');
    this.moldfin = new SkyBlockMemberCrimsonIsleTrophyFishFish(data || {}, 'moldfin');
    this.bronze = this.getTrophyFishPerRank('Bronze');
    this.silver = this.getTrophyFishPerRank('Silver');
    this.gold = this.getTrophyFishPerRank('Gold');
    this.diamond = this.getTrophyFishPerRank('Diamond');
  }

  toString(): CrimsonIsleTrophyFishRank {
    return this.rank;
  }

  private getTrophyFishRank(level: number): CrimsonIsleTrophyFishRank {
    switch (level) {
      case 2:
        return 'Silver';
      case 3:
        return 'Gold';
      case 4:
        return 'Diamond';
      default:
        return 'Bronze';
    }
  }

  private getTrophyFishPerRank(rank: CrimsonIsleTrophyFishRank): number {
    const fishes = [
      this.gusher,
      this.blobfish,
      this.lavaHorse,
      this.goldenFish,
      this.volcanicStonefish,
      this.slugfish,
      this.vanille,
      this.obfuscatedFish1,
      this.obfuscatedFish2,
      this.obfuscatedFish3,
      this.sulphurSkitter,
      this.skeletonFish,
      this.manaRay,
      this.flyfish,
      this.steamingHotFlounder,
      this.soulFish,
      this.karateFish,
      this.moldfin
    ];

    const key = rank.toLowerCase() as keyof (typeof fishes)[number];
    return fishes.reduce((sum, fish) => {
      const value = fish[key];
      const num = typeof value === 'function' ? value() : value;
      return sum + (num ?? 0);
    }, 0);
  }
}

export default SkyBlockMemberCrimsonIsleTrophyFish;
