import SkyWarsKitsMythics from './SkyWarsKitsMythics/SkyWarsKitsMythics.ts';
import SkyWarsMega from './SkyWarsMega/SkyWarsMega.ts';
import SkyWarsMini from './SkyWarsMini.ts';
import SkyWarsMode from './SkyWarsMode/SkyWarsMode.ts';
import SkyWarsPrivateGames from './SkyWarsPrivateGames.ts';
import SkyWarsSolo from './SkyWarsSolo/SkyWarsSolo.ts';
import SkyWarsTeams from './SkyWarsTeams/SkyWarsTeams.js';
import {
  SKYWARS_CONSTANT_LEVELING_XP,
  SKYWARS_CONSTANT_XP_TO_NEXT_LEVEL,
  SKYWARS_LEVEL_MAX,
  SKYWARS_TOTAL_XP,
  SKYWARS_XP_TO_NEXT_LEVEL
} from '../../../Utils/Constants.ts';
import { weekAB } from '../../../Utils/Oscillation.ts';
import type { ShopSort } from '../../../Types/Player.ts';

class SkyWars extends SkyWarsMode {
  activeKillEffect: string | 'UNKNOWN';
  activeVictoryDance: string | 'UNKNOWN';
  activeKillMessages: string | 'UNKNOWN';
  activeDeathCry: string | 'UNKNOWN';
  activeBalloon: string | 'UNKNOWN';
  activeCage: string | 'UNKNOWN';
  activeSprays: string | 'UNKNOWN';
  activeProjectileTrail: string | 'UNKNOWN';
  shopSort: ShopSort | 'UNKNOWN';
  coins: number;
  tokens: number;
  xp: number;
  level: number;
  levelWithProgress: { currentXp: number; required: number };
  levelFormatted: string | null;
  mythicalKits: SkyWarsKitsMythics;
  selectedPrestigeIcon: string | 'UNKNOWN';
  angelOfDeathLevel: number;
  quits: number;
  souls: number;
  soulWell: number;
  soulsGathered: number;
  paidSouls: number;
  soulWellRares: number;
  soulWellLegendaries: number;
  refillChestDestroy: number;
  harvestingSeason: number;
  xezbethLuck: number;
  extraWheels: number;
  weeklyKills: number;
  weeklyKillsA: number;
  weeklyKillsB: number;
  monthlyKills: number;
  monthlyKillsA: number;
  monthlyKillsB: number;
  quickjoinUsesTotal: number;
  quickjoinUsesRandom: number;
  chests: number;
  chestHistory: string[];
  goldenBoxes: number;
  halloweenBoxes: number;
  christmasBoxes: number;
  lunarBoxes: number;
  easterBoxes: number;
  beastChance: number;
  privateGamesSettings: SkyWarsPrivateGames;
  solo: SkyWarsSolo;
  teams: SkyWarsTeams;
  mega: SkyWarsMega;
  mini: SkyWarsMini;
  ranked: SkyWarsMode;
  constructor(data: Record<string, any>) {
    super(data);
    this.activeKillEffect = data?.active_killeffect || 'UNKNOWN';
    this.activeVictoryDance = data?.active_victorydance || 'UNKNOWN';
    this.activeKillMessages = data?.active_killmessages || 'UNKNOWN';
    this.activeDeathCry = data?.active_deathcry || 'UNKNOWN';
    this.activeBalloon = data?.active_balloon || 'UNKNOWN';
    this.activeCage = data?.active_cage || 'UNKNOWN';
    this.activeSprays = data?.active_sprays || 'UNKNOWN';
    this.activeProjectileTrail = data?.active_projectiletrail || 'UNKNOWN';
    this.shopSort = data?.shop_sort || 'UNKNOWN';
    this.coins = data?.coins || 0;
    this.tokens = data?.cosmetic_tokens || 0;
    this.heads = data?.heads || 0;
    this.xp = data?.skywars_experience || 0;
    this.level = SkyWars.getLevel(this.xp);
    this.levelWithProgress = SkyWars.getLevelProgress(this.xp, this.level);
    this.levelFormatted = data?.levelFormatted
      ? data?.levelFormatted
          ?.replace(/§l/gm, '**')
          ?.replace(/§([a-f]|[1-9])/gm, '')
          ?.replace(/§r/gm, '')
      : null;
    this.mythicalKits = new SkyWarsKitsMythics(data);
    this.selectedPrestigeIcon = data?.selected_prestige_icon || 'UNKNOWN';
    this.angelOfDeathLevel = data?.angel_of_death_level || 0;
    this.quits = data?.quits || 0;
    this.souls = data?.souls || 0;
    this.soulWell = data?.soul_well || 0;
    this.soulsGathered = data?.souls_gathered || 0;
    this.paidSouls = data?.paid_souls || 0;
    this.soulWellRares = data?.soul_well_rares || 0;
    this.soulWellLegendaries = data?.soul_well_legendaries || 0;
    this.refillChestDestroy = data?.refill_chest_destroy || 0;
    this.harvestingSeason = data?.harvesting_season || 0;
    this.xezbethLuck = data?.xezbeth_luck || 0;
    this.extraWheels = data?.extra_wheels || 0;
    this.weeklyKills = parseInt(data?.[`kills_weekly_${weekAB()}`] || 0, 10);
    this.weeklyKillsA = data?.kills_weekly_a || 0;
    this.weeklyKillsB = data?.kills_weekly_b || 0;
    this.monthlyKills = parseInt(data?.[`kills_monthly_${weekAB()}`] || 0, 10);
    this.monthlyKillsA = data?.kills_monthly_a || 0;
    this.monthlyKillsB = data?.kills_monthly_b || 0;
    this.quickjoinUsesTotal = data?.quickjoin_uses_total || 0;
    this.quickjoinUsesRandom = data?.quickjoin_uses_random || 0;
    this.chests = data?.skywars_chests || 0;
    this.chestHistory = data?.skywars_chest_history || [];
    this.goldenBoxes = data?.skywars_golden_boxes || 0;
    this.halloweenBoxes = data?.skywars_halloween_boxes || 0;
    this.christmasBoxes = data?.skywars_christmas_boxes || 0;
    this.lunarBoxes = data?.skywars_lunar_boxes || 0;
    this.easterBoxes = data?.skywars_easter_boxes || 0;
    this.beastChance = data?.beast_chance || 0;
    this.privateGamesSettings = new SkyWarsPrivateGames(data?.privategames || {});
    this.solo = new SkyWarsSolo(data);
    this.teams = new SkyWarsTeams(data);
    this.mega = new SkyWarsMega(data);
    this.mini = new SkyWarsMini(data);
    this.ranked = new SkyWarsMode(data, 'ranked');
  }

  // Credit: https://github.com/Statsify/statsify/blob/main/packages/schemas/src/player/gamemodes/skywars/util.ts#L27-L38
  static getLevel(xp: number): number {
    if (xp >= SKYWARS_CONSTANT_LEVELING_XP) {
      const level =
        Math.floor((xp - SKYWARS_CONSTANT_LEVELING_XP) / SKYWARS_CONSTANT_XP_TO_NEXT_LEVEL) +
        SKYWARS_XP_TO_NEXT_LEVEL.length;

      return Math.min(level, SKYWARS_LEVEL_MAX);
    }

    const level = SKYWARS_TOTAL_XP.findIndex((x) => x > xp);
    return level;
  }

  // Credit: https://github.com/Statsify/statsify/blob/main/packages/schemas/src/player/gamemodes/skywars/util.ts#L40-L63
  static getLevelProgress(xp: number, level: number): { currentXp: number; required: number } {
    let currentXp = xp;

    if (xp >= SKYWARS_CONSTANT_LEVELING_XP) {
      currentXp -= SKYWARS_CONSTANT_LEVELING_XP;
      currentXp %= SKYWARS_CONSTANT_XP_TO_NEXT_LEVEL;
      return { currentXp, required: level >= SKYWARS_LEVEL_MAX ? 0 : SKYWARS_CONSTANT_XP_TO_NEXT_LEVEL };
    }

    for (const element of SKYWARS_XP_TO_NEXT_LEVEL) {
      if (currentXp < element) break;
      currentXp -= element;
    }

    return { currentXp, required: SKYWARS_XP_TO_NEXT_LEVEL[SKYWARS_TOTAL_XP.findIndex((x) => x > xp)] || 0 };
  }
}

export default SkyWars;
