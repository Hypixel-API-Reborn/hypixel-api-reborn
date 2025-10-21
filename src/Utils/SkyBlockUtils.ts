import {
  CACTUS,
  CARROT,
  COCOA_BEANS,
  CustomPetLeveling,
  DEFAULT_LEVELING_XP,
  DEFAULT_SKILL_CAPS,
  DUNGEONEERING_XP,
  GARDEN_XP,
  HOTM_XP,
  INFINITE,
  MELON,
  MUSHROOM,
  NETHER_WART,
  POTATO,
  PUMPKIN,
  PetLevels,
  RUNECRAFTING_XP,
  SLAYER_XP,
  SOCIAL_XP,
  SUGAR_CANE,
  WHEAT,
  petRarityOffset
} from './Constants.js';
import { parse, simplify } from 'prismarine-nbt';
import type SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.ts';
import type {
  LevelData,
  PetLevelData,
  Rarity,
  SkillLevelData,
  SkyBlockPetId,
  SkyBlockSlayer,
  SkyBlockXPTables,
  SkyHelperNetWorthProfile
} from '../Types/SkyBlock.js';

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

  return { xp: petExp, level, xpForNext, progress, maxed: maxLevel === level, maxLevel, xpMaxLevel, currentXp };
}

// CREDITS: https://github.com/SkyCryptWebsite/SkyCryptv2/blob/2d4d0317b1f7a9f27e59d25afd4df24c0e49b0da/src/lib/server/stats/slayer.ts#L24-L59 (modified)
export function getSlayerLevel(slayer: SkyBlockSlayer, xp: number): LevelData {
  if (SLAYER_XP[slayer] === undefined) {
    return {
      xp: 0,
      level: 0,
      xpForNext: SLAYER_XP[slayer] ? SLAYER_XP[slayer][1] : null,
      progress: 0,
      maxed: false,
      maxLevel: 0
    };
  }

  const reversed = Object.entries(SLAYER_XP[slayer]).reverse();
  const maxLevel = Object.keys(SLAYER_XP[slayer]).length;

  for (const [level, requiredXP] of reversed) {
    if (xp >= requiredXP) {
      const xpForNext = SLAYER_XP[slayer][parseInt(level) + 1] || 0;
      return {
        xp,
        xpForNext,
        level: parseInt(level),
        maxLevel,
        maxed: parseInt(level) === maxLevel,
        progress: isNaN(xp / xpForNext) ? 0 : xp / xpForNext
      };
    }
  }

  return { xp, xpForNext: 0, level: 0, maxLevel, maxed: false, progress: 0 };
}

function getXpTable(type: SkyBlockXPTables): Record<number, number> {
  const SKILL_TABLES = {
    default: DEFAULT_LEVELING_XP,
    runecrafting: RUNECRAFTING_XP,
    social: SOCIAL_XP,
    dungeoneering: DUNGEONEERING_XP,
    hotm: HOTM_XP,
    farming: DEFAULT_LEVELING_XP,
    mining: DEFAULT_LEVELING_XP,
    combat: DEFAULT_LEVELING_XP,
    foraging: DEFAULT_LEVELING_XP,
    fishing: DEFAULT_LEVELING_XP,
    enchanting: DEFAULT_LEVELING_XP,
    alchemy: DEFAULT_LEVELING_XP,
    taming: DEFAULT_LEVELING_XP,
    carpentry: DEFAULT_LEVELING_XP,
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
    netherWart: NETHER_WART
  };

  return SKILL_TABLES[type] ?? DEFAULT_LEVELING_XP;
}

export type Extra = { type: SkyBlockXPTables; cap?: number };

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

  return { xp, level, xpForNext, progress, maxed, maxLevel, currentXp };
}

export function PrepareSkyBlockProfileForSkyHelperNetworth(
  profile: SkyBlockProfile & { me: NonNullable<SkyBlockProfile['me']> }
): SkyHelperNetWorthProfile {
  /* eslint-disable camelcase */
  /* eslint-disable quote-props */
  return {
    currencies: {
      coin_purse: profile.me.currencies.purse,
      essence: {
        WITHER: { current: profile.me.currencies.witherEssence },
        DRAGON: { current: profile.me.currencies.dragonEssence },
        SPIDER: { current: profile.me.currencies.spiderEssence },
        UNDEAD: { current: profile.me.currencies.undeadEssence },
        DIAMOND: { current: profile.me.currencies.diamondEssence },
        GOLD: { current: profile.me.currencies.goldEssence },
        ICE: { current: profile.me.currencies.iceEssence },
        CRIMSON: { current: profile.me.currencies.crimsonEssence }
      }
    },
    profile: { bank_account: profile.banking.balance },
    player_data: profile.me.playerData,
    leveling: profile.me.leveling,
    inventory: {
      inv_armor: { data: profile.me.inventory.armor.base64 ?? '' },
      equipment_contents: { data: profile.me.inventory.equipment.base64 ?? '' },
      wardrobe_contents: { data: profile.me.inventory.wardrobe.base64 ?? '' },
      inv_contents: { data: profile.me.inventory.inventory.base64 ?? '' },
      ender_chest_contents: { data: profile.me.inventory.enderChest.base64 ?? '' },
      personal_vault_contents: { data: profile.me.inventory.personalVault.base64 ?? '' },
      backpack_contents: {
        '0': { data: profile.me.inventory.backpacks.backpack1?.backpackContentsBase64 ?? '' },
        '1': { data: profile.me.inventory.backpacks.backpack2?.backpackContentsBase64 ?? '' },
        '2': { data: profile.me.inventory.backpacks.backpack3?.backpackContentsBase64 ?? '' },
        '3': { data: profile.me.inventory.backpacks.backpack4?.backpackContentsBase64 ?? '' },
        '4': { data: profile.me.inventory.backpacks.backpack5?.backpackContentsBase64 ?? '' },
        '5': { data: profile.me.inventory.backpacks.backpack6?.backpackContentsBase64 ?? '' },
        '6': { data: profile.me.inventory.backpacks.backpack7?.backpackContentsBase64 ?? '' },
        '7': { data: profile.me.inventory.backpacks.backpack8?.backpackContentsBase64 ?? '' },
        '8': { data: profile.me.inventory.backpacks.backpack9?.backpackContentsBase64 ?? '' },
        '9': { data: profile.me.inventory.backpacks.backpack10?.backpackContentsBase64 ?? '' },
        '10': { data: profile.me.inventory.backpacks.backpack11?.backpackContentsBase64 ?? '' },
        '11': { data: profile.me.inventory.backpacks.backpack12?.backpackContentsBase64 ?? '' },
        '12': { data: profile.me.inventory.backpacks.backpack13?.backpackContentsBase64 ?? '' },
        '13': { data: profile.me.inventory.backpacks.backpack14?.backpackContentsBase64 ?? '' },
        '14': { data: profile.me.inventory.backpacks.backpack15?.backpackContentsBase64 ?? '' },
        '15': { data: profile.me.inventory.backpacks.backpack16?.backpackContentsBase64 ?? '' },
        '16': { data: profile.me.inventory.backpacks.backpack17?.backpackContentsBase64 ?? '' },
        '17': { data: profile.me.inventory.backpacks.backpack18?.backpackContentsBase64 ?? '' }
      },
      backpack_icons: {
        '0': { data: profile.me.inventory.backpacks.backpack1?.backpackItemBase64 ?? '' },
        '1': { data: profile.me.inventory.backpacks.backpack2?.backpackItemBase64 ?? '' },
        '2': { data: profile.me.inventory.backpacks.backpack3?.backpackItemBase64 ?? '' },
        '3': { data: profile.me.inventory.backpacks.backpack4?.backpackItemBase64 ?? '' },
        '4': { data: profile.me.inventory.backpacks.backpack5?.backpackItemBase64 ?? '' },
        '5': { data: profile.me.inventory.backpacks.backpack6?.backpackItemBase64 ?? '' },
        '6': { data: profile.me.inventory.backpacks.backpack7?.backpackItemBase64 ?? '' },
        '7': { data: profile.me.inventory.backpacks.backpack8?.backpackItemBase64 ?? '' },
        '8': { data: profile.me.inventory.backpacks.backpack9?.backpackItemBase64 ?? '' },
        '9': { data: profile.me.inventory.backpacks.backpack10?.backpackItemBase64 ?? '' },
        '10': { data: profile.me.inventory.backpacks.backpack11?.backpackItemBase64 ?? '' },
        '11': { data: profile.me.inventory.backpacks.backpack12?.backpackItemBase64 ?? '' },
        '12': { data: profile.me.inventory.backpacks.backpack13?.backpackItemBase64 ?? '' },
        '13': { data: profile.me.inventory.backpacks.backpack14?.backpackItemBase64 ?? '' },
        '14': { data: profile.me.inventory.backpacks.backpack15?.backpackItemBase64 ?? '' },
        '15': { data: profile.me.inventory.backpacks.backpack16?.backpackItemBase64 ?? '' },
        '16': { data: profile.me.inventory.backpacks.backpack17?.backpackItemBase64 ?? '' },
        '17': { data: profile.me.inventory.backpacks.backpack18?.backpackItemBase64 ?? '' }
      },
      bag_contents: {
        talisman_bag: { data: profile.me.inventory.bags.talisman.base64 ?? '' },
        fishing_bag: { data: profile.me.inventory.bags.fishing.base64 ?? '' },
        potion_bag: { data: profile.me.inventory.bags.potion.base64 ?? '' },
        sacks_bag: { data: profile.me.inventory.bags.sacks.base64 ?? '' },
        quiver: { data: profile.me.inventory.bags.quiver.base64 ?? '' }
      },
      sacks_counts: profile.me.inventory.sacksCounts
    },
    shared_inventory: {
      candy_inventory_contents: { data: profile.me.inventory.candy.base64 ?? '' },
      carnival_mask_inventory_contents: { data: profile.me.inventory.carnivalMask.base64 ?? '' }
    },
    pets_data: {
      pets: profile.me.pets.pets.map((pet) => {
        return { type: pet.type, tier: pet.tier, exp: pet.level.xp, heldItem: pet.heldItem, skin: pet.skin };
      })
    },
    sacks_counts: profile.me.inventory.sacksCounts
  };
  /* eslint-enable camelcase */
  /* eslint-enable quote-props */
}
