import SkyblockMemberCrimsonIsleTrophyFishFish from './SkyblockMemberCrimsonIsleTrophyFishFish.js';
import type { CrimsonIsleTrophyFishRank } from '../../../../Types/Skyblock.js';

class SkyblockMemberCrimsonIsleTrophyFish {
  rank: CrimsonIsleTrophyFishRank;
  gusher: SkyblockMemberCrimsonIsleTrophyFishFish;
  blobfish: SkyblockMemberCrimsonIsleTrophyFishFish;
  lavaHorse: SkyblockMemberCrimsonIsleTrophyFishFish;
  goldenFish: SkyblockMemberCrimsonIsleTrophyFishFish;
  volcanicStonefish: SkyblockMemberCrimsonIsleTrophyFishFish;
  slugfish: SkyblockMemberCrimsonIsleTrophyFishFish;
  vanille: SkyblockMemberCrimsonIsleTrophyFishFish;
  obfuscatedFish1: SkyblockMemberCrimsonIsleTrophyFishFish;
  obfuscatedFish2: SkyblockMemberCrimsonIsleTrophyFishFish;
  obfuscatedFish3: SkyblockMemberCrimsonIsleTrophyFishFish;
  sulphurSkitter: SkyblockMemberCrimsonIsleTrophyFishFish;
  skeletonFish: SkyblockMemberCrimsonIsleTrophyFishFish;
  manaRay: SkyblockMemberCrimsonIsleTrophyFishFish;
  flyfish: SkyblockMemberCrimsonIsleTrophyFishFish;
  steamingHotFlounder: SkyblockMemberCrimsonIsleTrophyFishFish;
  soulFish: SkyblockMemberCrimsonIsleTrophyFishFish;
  karateFish: SkyblockMemberCrimsonIsleTrophyFishFish;
  moldfin: SkyblockMemberCrimsonIsleTrophyFishFish;
  constructor(data: Record<string, any>) {
    this.rank = this.getTrophyFishRank((data?.rewards || [1]).length - 1);
    this.gusher = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'gusher');
    this.blobfish = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'blobfish');
    this.lavaHorse = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'lava_horse');
    this.goldenFish = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'golden_fish');
    this.volcanicStonefish = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'volcanic_stonefish');
    this.slugfish = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'slugfish');
    this.vanille = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'vanille');
    this.obfuscatedFish1 = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'obfuscated_fish_1');
    this.obfuscatedFish2 = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'obfuscated_fish_2');
    this.obfuscatedFish3 = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'obfuscated_fish_3');
    this.sulphurSkitter = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'sulphur_skitter');
    this.skeletonFish = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'skeleton_fish');
    this.manaRay = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'mana_ray');
    this.flyfish = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'flyfish');
    this.steamingHotFlounder = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'steaming_hot_flounder');
    this.soulFish = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'soul_fish');
    this.karateFish = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'karate_fish');
    this.moldfin = new SkyblockMemberCrimsonIsleTrophyFishFish(data || {}, 'moldfin');
  }

  toString(): CrimsonIsleTrophyFishRank {
    return this.rank;
  }

  getTrophyFishRank(level: number): CrimsonIsleTrophyFishRank {
    switch (level) {
      case 1:
        return 'Bronze';
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
}

export default SkyblockMemberCrimsonIsleTrophyFish;
