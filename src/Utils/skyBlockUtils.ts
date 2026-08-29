import {
  CACTUS,
  CARROT,
  COCOA_BEANS,
  CustomPetLeveling,
  DEFAULT_LEVELING_XP,
  DEFAULT_SKILL_CAPS,
  DUNGEONEERING_XP,
  GARDEN_XP,
  HOTF_XP,
  HOTM_XP,
  INFINITE,
  MELON,
  MOONFLOWER,
  MUSHROOM,
  NETHER_WART,
  POTATO,
  PUMPKIN,
  PetLevels,
  RUNECRAFTING_XP,
  SLAYER_XP,
  SOCIAL_XP,
  SUGAR_CANE,
  SUNFLOWER,
  WHEAT,
  WILD_ROSE,
  petRarityOffset
} from './constants.ts';
import {
  type LevelData,
  type OverflowLevelData,
  type PetLevelData,
  type Rarity,
  type Skill,
  type SkillLevelData,
  Skills,
  type SkyBlockPetId,
  type SkyBlockSlayer,
  type SkyBlockXPTable,
  type SkyblockProfileWithMe
} from '../Types/index.js';
import { parse, simplify } from 'prismarine-nbt';
import type SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';

export async function decode(base64: any, isBuffer: boolean = false): Promise<any[]> {
  // Credit: https://github.com/SkyCryptWebsite/SkyCryptv2/blob/3b5b3ae4fe77c60eff90691797f09024baf68872/src/lib/server/stats/items/processing.ts#L215-L218
  const buffer = isBuffer ? base64 : Buffer.from(base64, 'base64');
  const parseData = await parse(buffer);
  const data = simplify(parseData.parsed);
  const newData = [];
  for (let i = 0; i < data.i.length; i++) {
    newData.push(data.i[i]);
  }
  return newData;
}

// Credit: https://github.com/SkyCryptWebsite/SkyCryptv2/blob/2d4d0317b1f7a9f27e59d25afd4df24c0e49b0da/src/lib/server/stats/pets.ts#L70-L101 (modified)
export function getPetLevel(petExp: number, type: SkyBlockPetId | 'UNKNOWN', rarity: Rarity | 'UNKNOWN'): PetLevelData {
  const rarityOffset =
    type === 'BINGO' ? (CustomPetLeveling[type]?.rarityOffset?.[rarity] ?? petRarityOffset[rarity]) : 0;

  const maxLevel = type === 'GOLDEN_DRAGON' ? CustomPetLeveling[type]?.maxLevel : 100;

  const levels: number[] = PetLevels.slice(rarityOffset, rarityOffset + maxLevel - 1).concat(
    type === 'GOLDEN_DRAGON' ? CustomPetLeveling[type]?.petLevels : PetLevels
  );

  let level: number = 1;
  let xpMaxLevel: number = 0;
  let currentXp: number = 0;
  for (let i: number = 0; i < maxLevel - 1; i++) {
    xpMaxLevel += levels?.[i] || 0;
    if (xpMaxLevel <= petExp) {
      level++;
      currentXp = petExp - xpMaxLevel;
    }
  }

  const xpForNext: number | null = levels[level - 1] ?? null;
  const progress = xpForNext !== null ? (isNaN(currentXp / xpForNext) ? 0 : currentXp / xpForNext) : 0;

  return {
    xp: petExp,
    level,
    xpForNext,
    progress,
    levelWithProgress: level + progress,
    maxed: maxLevel === level,
    maxLevel,
    xpMaxLevel,
    currentXp
  };
}

// CREDITS: https://github.com/SkyCryptWebsite/SkyCryptv2/blob/2d4d0317b1f7a9f27e59d25afd4df24c0e49b0da/src/lib/server/stats/slayer.ts#L24-L59 (modified)
export function getSlayerLevel(slayer: SkyBlockSlayer, xp: number): LevelData {
  if (SLAYER_XP[slayer] === undefined) {
    return { xp: 0, level: 0, xpForNext: null, progress: 0, levelWithProgress: 0, maxed: false, maxLevel: 0 };
  }

  const reversed = Object.entries(SLAYER_XP[slayer]).reverse();
  const maxLevel = Object.keys(SLAYER_XP[slayer]).length;

  for (const [rawLevel, requiredXP] of reversed) {
    if (xp >= requiredXP) {
      const level = parseInt(rawLevel, 10);
      const xpForNext = SLAYER_XP[slayer][level + 1] ?? null;
      const progress = xpForNext !== null && xpForNext > 0 ? xp / xpForNext : 0;
      return {
        xp,
        xpForNext,
        level,
        maxLevel,
        maxed: level === maxLevel,
        progress,
        levelWithProgress: level + progress
      };
    }
  }

  return { xp, xpForNext: 0, level: 0, maxLevel, maxed: false, progress: 0, levelWithProgress: 0 };
}

export function getXpTable(type: SkyBlockXPTable): Record<number, number> {
  const SKILL_TABLES = {
    default: DEFAULT_LEVELING_XP,
    runecrafting: RUNECRAFTING_XP,
    social: SOCIAL_XP,
    dungeoneering: DUNGEONEERING_XP,
    mining_tree: HOTM_XP,
    foraging_tree: HOTF_XP,
    farming: DEFAULT_LEVELING_XP,
    mining: DEFAULT_LEVELING_XP,
    combat: DEFAULT_LEVELING_XP,
    foraging: DEFAULT_LEVELING_XP,
    fishing: DEFAULT_LEVELING_XP,
    enchanting: DEFAULT_LEVELING_XP,
    alchemy: DEFAULT_LEVELING_XP,
    taming: DEFAULT_LEVELING_XP,
    carpentry: DEFAULT_LEVELING_XP,
    hunting: DEFAULT_LEVELING_XP,
    garden: GARDEN_XP,
    wheat: WHEAT,
    carrot: CARROT,
    sugarCane: SUGAR_CANE,
    potato: POTATO,
    pumpkin: PUMPKIN,
    melon: MELON,
    cactus: CACTUS,
    cocoaBeans: COCOA_BEANS,
    mushroom: MUSHROOM,
    netherWart: NETHER_WART,
    moonFlower: MOONFLOWER,
    sunFlower: SUNFLOWER,
    wildRose: WILD_ROSE
  };

  return SKILL_TABLES[type] ?? DEFAULT_LEVELING_XP;
}

export type Extra = { type: SkyBlockXPTable; cap?: number };

export function getOverflowLevelByExperience(overflowExperience: number, baseLevel = 60): OverflowLevelData {
  let level = baseLevel;
  let slope = 600000;
  let xpForCurrentLevel = 7600000;

  if (typeof overflowExperience !== 'number' || isNaN(overflowExperience) || overflowExperience < 0) {
    overflowExperience = 0;
  }

  while (overflowExperience >= xpForCurrentLevel) {
    level += 1;
    overflowExperience -= xpForCurrentLevel;
    xpForCurrentLevel += slope;
    if (level % 10 === 0) slope *= 2;
  }

  const progress = xpForCurrentLevel === 0 ? 0 : Math.max(0, Math.min(overflowExperience / xpForCurrentLevel, 1));
  return {
    level,
    currentXp: overflowExperience,
    xpForNext: xpForCurrentLevel,
    progress,
    levelWithProgress: level + progress
  };
}

// Credit: https://github.com/SkyCryptWebsite/SkyCryptv2/blob/2d4d0317b1f7a9f27e59d25afd4df24c0e49b0da/src/lib/server/stats/leveling/leveling.ts#L43-L126 (modified)
export function getLevelByXp(xp: number, extra: Extra = { type: 'default' }): SkillLevelData {
  const xpTable = getXpTable(extra.type) as Record<number, number>;
  if (typeof xp !== 'number' || isNaN(xp)) {
    xp = 0;
  }

  const levelCap = extra.cap ?? DEFAULT_SKILL_CAPS[extra.type] ?? Math.max(...Object.keys(xpTable).map(Number));
  let uncappedLevel = 0;
  let currentXp = xp;
  let xpRemaining = xp;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  while (xpTable[uncappedLevel + 1] <= xpRemaining) {
    uncappedLevel++;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    xpRemaining -= xpTable[uncappedLevel];
    if (uncappedLevel <= levelCap) {
      currentXp = xpRemaining;
    }
  }

  const isInfiniteLevelAble = INFINITE.includes(extra.type);
  if (isInfiniteLevelAble) {
    const maxExperience = Object.values(xpTable).at(-1) as number;
    uncappedLevel += Math.floor(xpRemaining / maxExperience);
    xpRemaining %= maxExperience;
    currentXp = xpRemaining;
  }

  const maxLevel = isInfiniteLevelAble ? Math.max(uncappedLevel, levelCap) : levelCap;
  const level = isInfiniteLevelAble ? uncappedLevel : Math.min(levelCap, uncappedLevel);

  const xpForNext = (
    level < maxLevel
      ? Math.ceil(xpTable[level + 1] ?? Object.values(xpTable).at(-1) ?? 0)
      : isInfiniteLevelAble
        ? Object.values(xpTable).at(-1)
        : Infinity
  ) as number;

  const progress = level >= maxLevel && !isInfiniteLevelAble ? 0 : Math.max(0, Math.min(currentXp / xpForNext, 1));
  const maxed = level >= maxLevel;

  let overflowLevel: OverflowLevelData | null = null;
  if (!isInfiniteLevelAble && Skills.includes(extra.type as Skill)) {
    const overflowBaseLevel = 60;
    const baseExperience = Object.entries(xpTable)
      .filter(([tableLevel]) => Number(tableLevel) <= overflowBaseLevel)
      .reduce((totalExperience, [, experience]) => totalExperience + experience, 0);
    const overflowExperience = xp - baseExperience;

    if (overflowExperience > 0) {
      overflowLevel = getOverflowLevelByExperience(overflowExperience, overflowBaseLevel);
    } else if (levelCap < overflowBaseLevel && xpTable[overflowBaseLevel] !== null) {
      let overflowBaseCurrentLevel = 0;
      let overflowBaseXpRemaining = xp;

      while (overflowBaseCurrentLevel < overflowBaseLevel) {
        const requiredXp = xpTable[overflowBaseCurrentLevel + 1];
        if (!requiredXp || requiredXp > overflowBaseXpRemaining) break;
        overflowBaseCurrentLevel++;
        overflowBaseXpRemaining -= requiredXp;
      }

      const virtualXpForNext =
        overflowBaseCurrentLevel < overflowBaseLevel
          ? Math.ceil(xpTable[overflowBaseCurrentLevel + 1] ?? Object.values(xpTable).at(-1) ?? 0)
          : Infinity;
      const virtualProgress =
        overflowBaseCurrentLevel >= overflowBaseLevel
          ? 0
          : Math.max(0, Math.min(overflowBaseXpRemaining / virtualXpForNext, 1));

      overflowLevel = {
        level: overflowBaseCurrentLevel,
        currentXp: overflowBaseXpRemaining,
        xpForNext: virtualXpForNext,
        progress: virtualProgress,
        levelWithProgress: overflowBaseCurrentLevel + virtualProgress
      };
    }
  }

  return {
    xp,
    level,
    xpForNext,
    progress,
    levelWithProgress: level + progress,
    maxed,
    maxLevel,
    currentXp,
    overflowLevel
  };
}

export function SkyBlockProfileHasMe(profile: SkyBlockProfile): profile is SkyblockProfileWithMe {
  return profile.me !== null;
}
