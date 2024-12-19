import Constants, { bestiaryBrackets, petLevels, petRarityOffset } from './Constants.js';
import { parse, simplify } from 'prismarine-nbt';
import type {
  ChocolateFactoryData,
  CrimsonIsle,
  CrimsonIsleBelt,
  CrimsonIsleDojoRank,
  Dungeons,
  HOTM,
  JacobData,
  Rarity,
  RawDungeonRun,
  SkillLevel,
  Skills,
  Slayer,
  SlayerData,
  TrophyFishRank
} from '../Types/Skyblock.js';

export async function decode(base64: any, isBuffer: boolean = false): Promise<any[]> {
  // Credit: https://github.com/SkyCryptWebsite/SkyCryptv2/blob/3b5b3ae4fe77c60eff90691797f09024baf68872/src/lib/server/stats/items/processing.ts#L215-L218
  const buffer = isBuffer ? base64 : Buffer.from(base64, 'base64');
  const parseData = await parse(buffer);
  const data = simplify(parseData.parsed);
  const newdata = [];
  for (let i = 0; i < data.i.length; i++) {
    newdata.push(data.i[i]);
  }
  return newdata;
}

export function getLevelByXp(xp: number, type: string): SkillLevel {
  let xpTable: Record<number, number>;
  switch (type) {
    case 'runecrafting':
      xpTable = Constants.runecraftingXp;
      break;
    case 'dungeons':
      xpTable = Constants.dungeonXp;
      break;
    case 'hotm':
      xpTable = Constants.hotmXp;
      break;
    case 'social':
      xpTable = Constants.socialXp;
      break;
    case 'garden':
      xpTable = Constants.garden;
      break;
    case 'wheat':
      xpTable = Constants.wheat;
      break;
    case 'carrot':
      xpTable = Constants.carrot;
      break;
    case 'potato':
      xpTable = Constants.potato;
      break;
    case 'melon':
      xpTable = Constants.melon;
      break;
    case 'pumpkin':
      xpTable = Constants.pumpkin;
      break;
    case 'sugarCane':
      xpTable = Constants.sugarCane;
      break;
    case 'cocoaBeans':
      xpTable = Constants.cocoaBeans;
      break;
    case 'cactus':
      xpTable = Constants.cactus;
      break;
    case 'mushroom':
      xpTable = Constants.mushroom;
      break;
    case 'netherWart':
      xpTable = Constants.netherWart;
      break;
    default:
      xpTable = Constants.levelingXp;
  }
  const maxLevel = Math.max(...Object.keys(xpTable).map(Number));
  if (isNaN(xp)) {
    return {
      xp: 0,
      level: 0,
      maxLevel,
      xpCurrent: 0,
      xpForNext: xpTable[1] || 0,
      progress: 0,
      cosmetic: Boolean('runecrafting' === type || 'social' === type)
    };
  }
  let xpTotal = 0;
  let level = 0;
  let xpForNext = 0;
  for (let x = 1; x <= maxLevel; x++) {
    if (!xpTable[x]) continue;
    xpTotal += xpTable?.[x] || 0;
    if (xpTotal > xp) {
      xpTotal -= xpTable?.[x] || 0;
      break;
    } else {
      level = x;
    }
  }
  const xpCurrent = Math.floor(xp - xpTotal);
  if (level < maxLevel) xpForNext = Math.ceil(xpTable?.[level + 1] || 0);
  const progress = Math.floor(Math.max(0, Math.min(xpCurrent / xpForNext, 1)) * 100 * 10) / 10;
  return {
    xp: xp,
    level: level,
    maxLevel: maxLevel,
    xpCurrent: xpCurrent,
    xpForNext: xpForNext,
    progress: progress,
    cosmetic: Boolean('runecrafting' === type || 'social' === type)
  };
}

export function getSlayerLevel(slayer: Record<string, any>): SlayerData {
  if (!slayer) {
    return { xp: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0, tier5: 0, level: 0 };
  }
  // eslint-disable-next-line camelcase
  const { claimed_levels } = slayer;
  let level = 0;
  // eslint-disable-next-line camelcase
  for (const levelName in claimed_levels) {
    if (Object.prototype.hasOwnProperty.call(claimed_levels, levelName)) {
      const newLevel = parseInt(levelName.replace('_special', '').split('_').pop() ?? '', 10);
      if (newLevel > level) {
        level = newLevel;
      }
    }
  }
  return {
    xp: slayer.xp || 0,
    tier1: slayer.boss_kills_tier_0 || 0,
    tier2: slayer.boss_kills_tier_1 || 0,
    tier3: slayer.boss_kills_tier_2 || 0,
    tier4: slayer.boss_kills_tier_3 || 0,
    tier5: slayer.boss_kills_tier_4 || 0,
    level
  };
}

export function getTrophyFishRank(level: number): TrophyFishRank {
  if (1 === level) {
    return 'Bronze';
  } else if (2 === level) {
    return 'Silver';
  } else if (3 === level) {
    return 'Gold';
  } else if (4 === level) {
    return 'Diamond';
  }
  return 'Bronze';
}

export function getSkills(data: Record<string, any>): Skills {
  const skillsObject: Skills = {
    combat: getLevelByXp(data?.player_data?.experience?.SKILL_COMBAT ?? 0, 'combat'),
    farming: getLevelByXp(data?.player_data?.experience?.SKILL_FARMING ?? 0, 'farming'),
    fishing: getLevelByXp(data?.player_data?.experience?.SKILL_FISHING ?? 0, 'fishing'),
    mining: getLevelByXp(data?.player_data?.experience?.SKILL_MINING ?? 0, 'mining'),
    foraging: getLevelByXp(data?.player_data?.experience?.SKILL_FORAGING ?? 0, 'foraging'),
    enchanting: getLevelByXp(data?.player_data?.experience?.SKILL_ENCHANTING ?? 0, 'enchanting'),
    alchemy: getLevelByXp(data?.player_data?.experience?.SKILL_ALCHEMY ?? 0, 'alchemy'),
    carpentry: getLevelByXp(data?.player_data?.experience?.SKILL_CARPENTRY ?? 0, 'carpentry'),
    runecrafting: getLevelByXp(data?.player_data?.experience?.SKILL_RUNECRAFTING ?? 0, 'runecrafting'),
    taming: getLevelByXp(data?.player_data?.experience?.SKILL_TAMING ?? 0, 'taming'),
    social: getLevelByXp(data?.player_data?.experience?.SKILL_SOCIAL ?? 0, 'social'),
    average: 0
  };
  const levels = Object.values(skillsObject)
    .filter((skill) => true !== skill.cosmetic)
    .map((skill) => skill.level);
  skillsObject.average = levels.reduce((a, b) => a + b, 0) / levels.length;
  return skillsObject;
}
function formatBestiaryMobs(userProfile: Record<string, any>, mobs: any) {
  const output = [];
  for (const mob of mobs) {
    const mobBracket = bestiaryBrackets?.[mob.bracket] || [];
    const totalKills = mob.mobs.reduce((acc: any, cur: any) => {
      return acc + (userProfile.bestiary.kills[cur] ?? 0);
    }, 0);
    const maxKills = mob.cap;
    const nextTierKills = mobBracket.find((tier: any) => totalKills < tier && tier <= maxKills);
    const tier = nextTierKills ? mobBracket.indexOf(nextTierKills) : mobBracket.indexOf(maxKills) + 1;
    output.push({ tier: tier });
  }
  return output;
}

export function getBestiaryLevel(userProfile: Record<string, any>): number {
  if (userProfile?.bestiary?.kills === undefined) {
    return 0;
  }
  const output: { [key: string]: any } = {};
  let tiersUnlocked = 0;
  for (const [category, data] of Object.entries(Constants.bestiary)) {
    const { mobs } = data as { mobs: any };
    output[category] = {};
    if ('fishing' === category) {
      for (const [key, value] of Object.entries(data)) {
        output[category][key] = { mobs: formatBestiaryMobs(userProfile, value.mobs) };
        tiersUnlocked += output[category][key].mobs.reduce((acc: any, cur: any) => acc + cur.tier, 0);
      }
    } else {
      output[category].mobs = formatBestiaryMobs(userProfile, mobs);
      tiersUnlocked += output[category].mobs.reduce((acc: any, cur: any) => acc + cur.tier, 0);
    }
  }
  return tiersUnlocked / 10;
}

export function getSlayer(data: Record<string, any>): Slayer | null {
  if (!data?.slayer?.slayer_bosses) return null;
  return {
    zombie: getSlayerLevel(data?.slayer?.slayer_bosses?.zombie),
    spider: getSlayerLevel(data?.slayer?.slayer_bosses?.spider),
    wolf: getSlayerLevel(data?.slayer?.slayer_bosses?.wolf),
    enderman: getSlayerLevel(data?.slayer?.slayer_bosses?.enderman),
    blaze: getSlayerLevel(data?.slayer?.slayer_bosses?.blaze),
    vampire: getSlayerLevel(data?.slayer?.slayer_bosses?.vampire)
  };
}

function getCompletions(data: Record<string, any>): Record<string, number> {
  const completions: Record<string, number> = { total: 0 };
  for (const tier in data) {
    if ('total' === tier) continue;
    completions[`Floor_${tier}`] = data?.[tier];
    completions.total += data?.[tier];
  }
  return completions;
}

function getDungeonsFloor(
  data: Record<string, any>,
  type: 'catacombs' | 'master_catacombs',
  floor: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
) {
  return {
    fastestRun: (data?.dungeons?.dungeon_types?.[type]?.best_runs?.[floor] || [])?.sort(
      (a: RawDungeonRun, b: RawDungeonRun) => a?.elapsed_time - b?.elapsed_time
    )[0],
    fastestSRun: (data?.dungeons?.dungeon_types?.[type]?.best_runs?.[floor] || [])
      ?.filter(
        (run: RawDungeonRun) => 270 >= run?.score_exploration + run?.score_speed + run?.score_skill + run?.score_bonus
      )
      ?.sort((a: RawDungeonRun, b: RawDungeonRun) => a?.elapsed_time - b?.elapsed_time)[0],
    fastestSPlusRun: (data?.dungeons?.dungeon_type?.s[type]?.best_runs?.[floor] || [])
      ?.filter(
        (run: RawDungeonRun) => 300 >= run?.score_exploration + run?.score_speed + run?.score_skill + run?.score_bonus
      )
      ?.sort((a: RawDungeonRun, b: RawDungeonRun) => a?.elapsed_time - b?.elapsed_time)[0],
    completions: data?.dungeonXp?.dungeon_types?.[type]?.tier_completions?.[floor] || 0
  };
}

export function getDungeons(data: Record<string, any>): Dungeons {
  return {
    experience: getLevelByXp(data?.dungeons?.dungeon_types?.catacombs?.experience || 0, 'dungeons'),
    secrets: data?.dungeons?.secrets || 0,
    completions: {
      catacombs: getCompletions(data?.dungeons?.dungeon_types?.catacombs?.tier_completions),
      masterMode: getCompletions(data?.dungeons?.dungeon_types?.master_catacombs?.tier_completions)
    },
    floors: {
      entrance: getDungeonsFloor(data, 'catacombs', '0'),
      floor1: getDungeonsFloor(data, 'catacombs', '1'),
      floor2: getDungeonsFloor(data, 'catacombs', '2'),
      floor3: getDungeonsFloor(data, 'catacombs', '3'),
      floor4: getDungeonsFloor(data, 'catacombs', '4'),
      floor5: getDungeonsFloor(data, 'catacombs', '5'),
      floor6: getDungeonsFloor(data, 'catacombs', '6'),
      floor7: getDungeonsFloor(data, 'catacombs', '7'),
      masterMode1: getDungeonsFloor(data, 'master_catacombs', '1'),
      masterMode2: getDungeonsFloor(data, 'master_catacombs', '2'),
      masterMode3: getDungeonsFloor(data, 'master_catacombs', '3'),
      masterMode4: getDungeonsFloor(data, 'master_catacombs', '4'),
      masterMode5: getDungeonsFloor(data, 'master_catacombs', '5'),
      masterMode6: getDungeonsFloor(data, 'master_catacombs', '6'),
      masterMode7: getDungeonsFloor(data, 'master_catacombs', '7')
    },
    classes: {
      healer: getLevelByXp(data?.dungeons?.player_classes?.healer?.experience || 0, 'dungeons'),
      mage: getLevelByXp(data?.dungeons?.player_classes?.mage?.experience || 0, 'dungeons'),
      berserk: getLevelByXp(data?.dungeons?.player_classes?.berserk?.experience || 0, 'dungeons'),
      archer: getLevelByXp(data?.dungeons?.player_classes?.archer?.experience || 0, 'dungeons'),
      tank: getLevelByXp(data?.dungeons?.player_classes?.tank?.experience || 0, 'dungeons'),
      selected: data?.dungeons?.selected_dungeon_class || 'mage'
    },
    essence: {
      diamond: data?.currencies?.essence?.DIAMOND?.current || 0,
      dragon: data?.currencies?.essence?.DRAGON?.current || 0,
      spider: data?.currencies?.essence?.SPIDER?.current || 0,
      wither: data?.currencies?.essence?.WITHER?.current || 0,
      undead: data?.currencies?.essence?.UNDEAD?.current || 0,
      gold: data?.currencies?.essence?.GOLD?.current || 0,
      ice: data?.currencies?.essence?.ICE?.current || 0,
      crimson: data?.currencies?.essence?.CRIMSON?.current || 0
    }
  };
}

export function getJacobData(data: Record<string, any>): JacobData {
  return {
    medals: {
      bronze: data?.jacobs_contest?.medals_inv?.bronze || 0,
      silver: data?.jacobs_contest?.medals_inv?.silver || 0,
      gold: data?.jacobs_contest?.medals_inv?.gold || 0
    },
    perks: {
      doubleDrops: data?.jacobs_contest?.perks?.double_drops || 0,
      farmingLevelCap: data?.jacobs_contest?.perks?.farming_level_cap || 0,
      personalBests: data?.jacobs_contest?.perks?.personal_bests || false
    },
    contests: data?.jacobs_contestcontests || {}
  };
}

export function getChocolateFactory(data: Record<string, any>): ChocolateFactoryData {
  if (!data?.events?.easter) {
    return {
      employees: { bro: 0, cousin: 0, sis: 0, father: 0, grandma: 0, dog: 0, uncle: 0 },
      chocolate: { current: 0, total: 0, sincePrestige: 0 },
      timeTower: { charges: 0, level: 0 },
      upgrades: { click: 0, multiplier: 0, rabbitRarity: 0 },
      goldenClick: { amount: 0, year: 0 },
      barnCapacity: 0,
      prestige: 0
    };
  }
  return {
    employees: {
      bro: data?.events?.easter?.employees?.rabbit_bro || 0,
      cousin: data?.events?.easter?.employees?.rabbit_cousin || 0,
      sis: data?.events?.easter?.employees?.rabbit_sis || 0,
      father: data?.events?.easter?.employees?.rabbit_father || 0,
      grandma: data?.events?.easter?.employees?.rabbit_grandma || 0,
      dog: data?.events?.easter?.employees?.rabbit_dog || 0,
      uncle: data?.events?.easter?.employees?.rabbit_uncle || 0
    },
    chocolate: {
      current: data?.events?.easter?.chocolate || 0,
      total: data?.events?.easter?.total_chocolate || 0,
      sincePrestige: data?.events?.easter?.chocolate_since_prestige || 0
    },
    timeTower: {
      charges: data?.events?.easter?.time_tower?.charges || 0,
      level: data?.events?.easter?.time_tower?.level || 0
    },
    upgrades: {
      click: data?.events?.easter?.click_upgrades || 0,
      multiplier: data?.events?.easter?.chocolate_multiplier_upgrades || 0,
      rabbitRarity: data?.events?.easter?.rabbit_rarity_upgrades || 0
    },
    goldenClick: {
      amount: data?.events?.easter?.golden_click_amount || 0,
      year: data?.events?.easter?.golden_click_year || 0
    },
    barnCapacity: data?.events?.easter?.rabbit_barn_capacity_level || 0,
    prestige: data?.events?.easter?.chocolate_level || 0
  };
}

export function getPetLevel(petExp: number, offsetRarity: keyof typeof petRarityOffset, maxLevel: number) {
  const rarityOffset = petRarityOffset[offsetRarity] || 0;
  const levels = petLevels.slice(rarityOffset, rarityOffset + maxLevel - 1) as number[];
  const xpMaxLevel = levels.reduce((a, b) => a + b, 0);
  let xpTotal = 0;
  let level = 1;
  let xpForNext;
  for (let i = 0; i < maxLevel; i++) {
    xpTotal += levels?.[i] || 0;
    if (xpTotal > petExp) {
      xpTotal -= levels?.[i] || 0;
      break;
    } else {
      level++;
    }
  }
  let xpCurrent = Math.floor(petExp - xpTotal);
  let progress;
  if (level < maxLevel) {
    xpForNext = Math.ceil(levels?.[level - 1] || 0);
    progress = Math.max(0, Math.min(xpCurrent / xpForNext, 1));
  } else {
    level = maxLevel;
    xpCurrent = petExp - (levels?.[maxLevel - 1] || 0);
    xpForNext = 0;
    progress = 1;
  }
  return { level, xpCurrent, xpForNext, progress, xpMaxLevel };
}

export function parseRarity(str: string): Rarity {
  const rarityArray = [
    'COMMON',
    'UNCOMMON',
    'RARE',
    'EPIC',
    'LEGENDARY',
    'MYTHIC',
    'DIVINE',
    'SPECIAL',
    'VERY SPECIAL'
  ];
  for (const rarity of rarityArray) {
    if (str.includes(rarity)) return rarity as Rarity;
  }
  return 'COMMON';
}

export function parseGearScore(lore: any): number {
  for (const line of lore) {
    if (line.match(/Gear Score: §[0-9a-f](\d+)/)) return Number(line.match(/Gear Score: §d(\d+)/)[1]);
  }
  return 0;
}

function getScore(points: number): CrimsonIsleDojoRank {
  if (1000 <= points) {
    return 'S';
  } else if (800 <= points) {
    return 'A';
  } else if (600 <= points) {
    return 'B';
  } else if (400 <= points) {
    return 'C';
  } else if (200 <= points) {
    return 'D';
  }
  return 'F';
}

function getBelt(points: number): CrimsonIsleBelt {
  if (7000 <= points) {
    return 'Black';
  } else if (6000 <= points) {
    return 'Brown';
  } else if (4000 <= points) {
    return 'Blue';
  } else if (2000 <= points) {
    return 'Green';
  } else if (1000 <= points) {
    return 'Yellow';
  }
  return 'White';
}

export function getCrimsonIsle(data: Record<string, any>): CrimsonIsle {
  return {
    faction: data?.nether_island_player_data?.selected_faction || null,
    reputation: {
      barbarians: data?.nether_island_player_data?.barbarians_reputation ?? 0,
      mages: data?.nether_island_player_data?.mages_reputation ?? 0
    },
    trophyFish: {
      rank: getTrophyFishRank((data?.nether_island_player_data?.trophy_fish?.rewards ?? [])?.length),
      caught: {
        total: data?.nether_island_player_data?.trophy_fish?.total_caught || 0,
        bronze:
          Object.keys(data?.nether_island_player_data?.trophy_fish || {}).filter((key) => key.endsWith('_bronze'))
            .length || 0,
        silver:
          Object.keys(data?.nether_island_player_data?.trophy_fish || {}).filter((key) => key.endsWith('_silver'))
            .length || 0,
        gold:
          Object.keys(data?.nether_island_player_data?.trophy_fish || {}).filter((key) => key.endsWith('_gold'))
            .length || 0,
        diamond:
          Object.keys(data?.nether_island_player_data?.trophy_fish || {}).filter((key) => key.endsWith('_diamond'))
            .length || 0
      }
    },
    dojo: {
      belt: getBelt(
        Object.keys(data?.nether_island_player_data?.dojo ?? {})
          .filter((key) => key.startsWith('dojo_points'))
          .reduce((acc, key) => acc + (data?.nether_island_player_data?.dojo[key] || 0), 0)
      ),
      force: {
        points: data?.nether_island_player_data?.dojo?.dojo_points_mob_kb || 0,
        rank: getScore(data?.nether_island_player_data?.dojo?.dojo_points_mob_kb || 0)
      },
      stamina: {
        points: data?.nether_island_player_data?.dojo?.dojo_points_wall_jump || 0,
        rank: getScore(data?.nether_island_player_data?.dojo?.dojo_points_wall_jump || 0)
      },
      mastery: {
        points: data?.nether_island_player_data?.dojo?.dojo_points_archer || 0,
        rank: getScore(data?.nether_island_player_data?.dojo?.dojo_points_archer || 0)
      },
      discipline: {
        points: data?.nether_island_player_data?.dojo?.dojo_points_sword_swap || 0,
        rank: getScore(data?.nether_island_player_data?.dojo?.dojo_points_sword_swap || 0)
      },
      swiftness: {
        points: data?.nether_island_player_data?.dojo?.dojo_points_snake || 0,
        rank: getScore(data?.nether_island_player_data?.dojo?.dojo_points_snake || 0)
      },
      control: {
        points: data?.nether_island_player_data?.dojo?.dojo_points_lock_head || 0,
        rank: getScore(data?.nether_island_player_data?.dojo?.dojo_points_lock_head || 0)
      },
      tenacity: {
        points: data?.nether_island_player_data?.dojo?.dojo_points_fireball || 0,
        rank: getScore(data?.nether_island_player_data?.dojo?.dojo_points_fireball || 0)
      }
    },
    kuudra: {
      none: data?.nether_island_player_data?.kuudra_completed_tiers?.none || 0,
      hot: data?.nether_island_player_data?.kuudra_completed_tiers?.hot || 0,
      burning: data?.nether_island_player_data?.kuudra_completed_tiers?.burning || 0,
      fiery: data?.nether_island_player_data?.kuudra_completed_tiers?.fiery || 0,
      highestWaveHot: data?.nether_island_player_data?.kuudra_completed_tiers?.highest_wave_hot || 0,
      highestWaveFiery: data?.nether_island_player_data?.kuudra_completed_tiers?.highest_wave_fiery || 0,
      infernal: data?.nether_island_player_data?.kuudra_completed_tiers?.infernal || 0,
      highestWaveInfernal: data?.nether_island_player_data?.kuudra_completed_tiers?.highest_wave_infernal || 0,
      highestWaveBurning: data?.nether_island_player_data?.kuudra_completed_tiers?.highest_wave_burning || 0
    }
  };
}

export function getHOTM(data: Record<string, any>): HOTM {
  return {
    experience: getLevelByXp(data?.mining_core?.experience || 0, 'hotm'),
    ability: data?.mining_core?.selected_pickaxe_ability || 'none',
    powder: {
      mithril: {
        spent: data?.mining_core?.powder_spent_mithril || 0,
        current: data?.mining_core?.powder_mithril || 0,
        total: data?.mining_core?.powder_spent_mithril || 0 + data?.mining_core?.powder_mithril || 0
      },
      gemstone: {
        spent: data?.mining_core?.powder_spent_gemstone || 0,
        current: data?.mining_core?.powder_gemstone || 0,
        total: data?.mining_core?.powder_spent_gemstone || 0 + data?.mining_core?.powder_gemstone || 0
      },
      glacite: {
        spent: data?.mining_core?.powder_spent_glacite || 0,
        current: data?.mining_core?.powder_glacite || 0,
        total: data?.mining_core?.powder_spent_glacite || 0 + data?.mining_core?.powder_glacite || 0
      }
    }
  };
}
