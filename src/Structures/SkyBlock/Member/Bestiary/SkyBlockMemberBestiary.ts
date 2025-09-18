import { BestiaryBrackets, BestiaryMobs } from '../../../../Utils/Constants.js';
import type { BestiaryCategory, BestiaryMob, BestiaryStats, RawBestiaryMob } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberBestiary {
  kills: Record<string, number>;
  deaths: Record<string, number>;
  lastClaimedMilestone: number;
  level: number;
  maxLevel: number;
  familiesUnlocked: number;
  familiesCompleted: number;
  totalFamilies: number;
  familyTiers: number;
  maxFamilyTiers: number;
  categories: Record<string, BestiaryCategory>;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills || {};
    this.deaths = data?.deaths || {};
    this.lastClaimedMilestone = data?.milestone?.last_claimed_milestone || 0;
    const parsed = this.getBestiary();
    this.level = parsed.level;
    this.maxLevel = parsed.maxLevel;
    this.familiesUnlocked = parsed.familiesUnlocked;
    this.familiesCompleted = parsed.familiesCompleted;
    this.totalFamilies = parsed.totalFamilies;
    this.familyTiers = parsed.familyTiers;
    this.maxFamilyTiers = parsed.maxFamilyTiers;
    this.categories = parsed.categories;
  }

  // Credit: https://github.com/SkyCryptWebsite/SkyCryptv2/blob/d73d449ec52f0af3c8a2fa04b79a969a6734e0b2/src/lib/server/stats/bestiary.ts
  private getBestiaryMobs(mobList: RawBestiaryMob[]): BestiaryMob[] {
    const output: BestiaryMob[] = [];
    for (const mob of mobList) {
      const mobBracket = BestiaryBrackets?.[mob.bracket] || [];

      const totalKills = mob.mobs.reduce((acc, mob) => acc + (this.kills[mob] || 0), 0);
      const maxKills = mob.cap;
      const nextTierKills = mobBracket.find((tier: number) => totalKills < tier && tier <= maxKills);
      const tier = nextTierKills ? mobBracket.indexOf(nextTierKills) : mobBracket.indexOf(maxKills) + 1;

      output.push({
        name: mob.name,
        kills: totalKills,
        nextTierKills: nextTierKills ?? null,
        maxKills: maxKills,
        tier: tier,
        maxTier: mobBracket.indexOf(maxKills) + 1
      });
    }

    return output;
  }

  private getBestiary(): BestiaryStats {
    const categories = {} as Record<string, BestiaryCategory>;
    for (const [category, categoryData] of Object.entries(BestiaryMobs)) {
      categories[category] = {
        name: categoryData.name,
        mobs: this.getBestiaryMobs(categoryData.mobs),
        mobsUnlocked: 0,
        mobsMaxed: 0
      };

      categories[category].mobsUnlocked = categories[category].mobs.reduce(
        (acc, mob) => acc + (mob.kills > 0 ? 1 : 0),
        0
      );
      categories[category].mobsMaxed = categories[category].mobs.reduce(
        (acc, mob) => acc + (mob.kills >= mob.maxKills ? 1 : 0),
        0
      );
    }

    const mobs = Object.values(categories).flatMap((category) => Object.values(category.mobs));
    const maxMilestone = mobs.map((mob) => mob.maxTier).reduce((acc, cur) => acc + cur, 0);
    const milestone = mobs.map((mob) => mob.tier).reduce((acc, cur) => acc + cur, 0);
    const familiesMaxed = mobs.filter((mob) => mob.tier === mob.maxTier).length;
    const familiesUnlocked = mobs.filter((mob) => mob.kills > 0).length;
    const totalFamilies = mobs.length;

    return {
      level: milestone / 10,
      maxLevel: maxMilestone / 10,
      familiesUnlocked: familiesUnlocked,
      familiesCompleted: familiesMaxed,
      totalFamilies: totalFamilies,
      familyTiers: milestone,
      maxFamilyTiers: maxMilestone,
      categories: categories
    };
  }
}

export default SkyBlockMemberBestiary;
