/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable jsdoc/require-jsdoc */
// Minimum TypeScript Version: 3.6

import { NetworthResult } from 'skyhelper-networth';
import { EventEmitter } from 'events';

export type PLAYER_RANK =
  | 'Default'
  | 'VIP'
  | 'VIP+'
  | 'MVP'
  | 'MVP+'
  | 'MVP++'
  | 'YouTube'
  | 'Game Master'
  | 'Admin'
  | 'PIG+++'
  | 'INNIT';
export type GAME_NAME =
  | 'Quake Craft'
  | 'Walls'
  | 'Paintball'
  | 'Blitz Survival Games'
  | 'The TNT Games'
  | 'VampireZ'
  | 'Mega Walls'
  | 'Arcade'
  | 'Arena Walls'
  | 'UHC Champions'
  | 'Cops and Crims'
  | 'Warlords'
  | 'Smash Heroes'
  | 'Turbo Kart Racing'
  | 'Housing'
  | 'SkyWars'
  | 'Crazy Walls'
  | 'Speed UHC'
  | 'SkyClash'
  | 'Classic Games'
  | 'Prototype'
  | 'BedWars'
  | 'Murder Mystery'
  | 'Build Battle'
  | 'Duels'
  | 'SkyBlock'
  | 'The Pit'
  | 'Replay'
  | 'Limbo'
  | 'Queue'
  | 'Main Lobby'
  | 'Tournament Lobby'
  | 'Idle'
  | 'SMP'
  | 'Wool Wars';
export type GAME_ID =
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 13
  | 14
  | 17
  | 20
  | 21
  | 23
  | 24
  | 25
  | 26
  | 51
  | 52
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 63
  | 64
  | 65
  | 67
  | 68
  | -1
  | -2
  | -3
  | -4
  | -5
  | -6;
export type GAME_CODE =
  | 'QUAKECRAFT'
  | 'WALLS'
  | 'PAINTBALL'
  | 'SURVIVAL_GAMES'
  | 'TNTGAMES'
  | 'VAMPIREZ'
  | 'WALLS3'
  | 'ARCADE'
  | 'UHC'
  | 'MCGO'
  | 'BATTLEGROUND'
  | 'SUPER_SMASH'
  | 'GINGERBREAD'
  | 'HOUSING'
  | 'SKYWARS'
  | 'TRUE_COMBAT'
  | 'SPEED_UHC'
  | 'SKYCLASH'
  | 'LEGACY'
  | 'PROTOTYPE'
  | 'BEDWARS'
  | 'MURDER_MYSTERY'
  | 'BUILD_BATTLE'
  | 'DUELS'
  | 'SKYBLOCK'
  | 'PIT'
  | 'REPLAY'
  | 'LIMBO'
  | 'IDLE'
  | 'QUEUE'
  | 'MAIN_LOBBY'
  | 'TOURNAMENT_LOBBY'
  | 'SMP'
  | 'WOOL_GAMES';
export type SKYWARS_PRESTIGE =
  | 'Iron'
  | 'Iron'
  | 'Gold'
  | 'Diamond'
  | 'Emerald'
  | 'Sapphire'
  | 'Ruby'
  | 'Crystal'
  | 'Opal'
  | 'Amethyst'
  | 'Rainbow'
  | 'Mythic';
export type SKYWARS_PRESTIGE_ICON =
  | '⋆'
  | '★'
  | '☆'
  | '⁕'
  | '✶'
  | '✳'
  | '✴'
  | '✷'
  | '❋'
  | '✼'
  | '❂'
  | '❁'
  | '☬'
  | '✙'
  | '❤️'
  | '☠'
  | '✦'
  | '✌'
  | '❦'
  | '✵'
  | '❣'
  | '☯'
  | '✺'
  | 'ಠ_ಠ'
  | '⚔';
export type BEDWARS_PRESTIGE =
  | 'Iron'
  | 'Gold'
  | 'Diamond'
  | 'Emerald'
  | 'Sapphire'
  | 'Ruby'
  | 'Crystal'
  | 'Opal'
  | 'Amethyst'
  | 'Rainbow'
  | 'Iron Prime'
  | 'Gold Prime'
  | 'Diamond Prime'
  | 'Emerald Prime'
  | 'Sapphire Prime'
  | 'Ruby Prime'
  | 'Crystal Prime'
  | 'Opal Prime'
  | 'Amethyst Prime'
  | 'Mirror'
  | 'Light'
  | 'Dawn'
  | 'Dusk'
  | 'Air'
  | 'Wind'
  | 'Nebula'
  | 'Thunder'
  | 'Earth'
  | 'Water'
  | 'Fire'
  | 'Sunrise'
  | 'Eclipse'
  | 'Gamma'
  | 'Majestic'
  | 'Andesine'
  | 'Marine'
  | 'Element'
  | 'Galaxy'
  | 'Atomic'
  | 'Sunset'
  | 'Time'
  | 'Winter'
  | 'Obsidian'
  | 'Spring'
  | 'Ice'
  | 'Summer'
  | 'Spinel'
  | 'Autumn'
  | 'Mystic'
  | 'Eternal';
export type SkyblockRarity =
  | 'VERY_SPECIAL'
  | 'SPECIAL'
  | 'SUPREME'
  | 'MYTHIC'
  | 'LEGENDARY'
  | 'EPIC'
  | 'RARE'
  | 'UNCOMMON'
  | 'COMMON';
export type SOCIAL_MEDIA_ID = 'YOUTUBE' | 'DISCORD' | 'HYPIXEL' | 'TWITTER' | 'INSTAGRAM' | 'TWITCH';
export type SKYWARS_KIT_TYPE =
  | 'basic'
  | 'supporting'
  | 'mining'
  | 'defending'
  | 'attacking'
  | 'advanced'
  | 'enderchest';
export type SKYWARS_KIT_GAMEMODE = 'solo' | 'team';
export type BINGO_TYPE = 'ONE_TIME' | 'ONE_TIER' | 'TIERED';
export type ACHIEVEMENT_TYPE = 'ONE_TIME' | 'TIERED';
export type QUEST_TYPE = 'DAILY' | 'WEEKLY';
export type GAME_STATIC =
  | 'arcade'
  | 'arena'
  | 'bedwars'
  | 'hungergames'
  | 'buildbattle'
  | 'truecombat'
  | 'duels'
  | 'mcgo'
  | 'murdermystery'
  | 'paintball'
  | 'quake'
  | 'skyclash'
  | 'skywars'
  | 'supersmash'
  | 'speeduhc'
  | 'gingerbread'
  | 'tntgames'
  | 'uhc'
  | 'vampirez'
  | 'walls3'
  | 'walls'
  | 'battleground'
  | 'woolgames';
export interface ChallengeData {
  id: string;
  name: string;
  rewardType: string;
  reward: number;
}
export interface Objective {
  id: string;
  type: 'Integer' | 'Boolean';
  amountNeeded: number;
}
export interface QuestReward {
  type: string;
  amount: number;
}
export type SKYBLOCK_BESTIARY = number;
export interface SKYBLOCK_BESTIARY_CATEGORY {
  [key: string]: {
    damage?: number;
    head: string;
    itemId?: string;
    kills: number;
    maxTier: number;
    name: string;
    tier: number;
  };
}
export interface SKYBLOCK_SKILL_DATA {
  xp: number;
  level: number;
  maxLevel: number;
  xpCurrent: number;
  xpForNext: number;
  progress: number;
  cosmetic: boolean;
}
export interface SKYBLOCK_DUNGEONS_FLOOR_RUN {
  timestamp: number;
  score_exploration: number;
  score_speed: number;
  score_skill: number;
  score_bonus: number;
  dungeon_class: string;
  teammates: string;
  elapsed_time: number;
  damage_dealt: number;
  deaths: number;
  mobs_killed: number;
  secrets_found: number;
  damage_mitigated: number;
}
export interface SKYBLOCK_DUNGEONS_FLOOR {
  fastestRun: SKYBLOCK_DUNGEONS_FLOOR_RUN;
  fastestSRun: SKYBLOCK_DUNGEONS_FLOOR_RUN;
  fastestSPlusRun: SKYBLOCK_DUNGEONS_FLOOR_RUN;
  completions: number;
}
export interface SKYBLOCK_GARDEN_CROPS {
  wheat: number;
  carrot: number;
  sugarCane: number;
  potato: number;
  pumpkin: number;
  melon: number;
  cactus: number;
  cocoaBeans: number;
  mushroom: number;
  netherWart: number;
}
export interface SKYBLOCK_GARDEN_COMPOSTER_UPGRADES {
  speed: number;
  multiDrop: number;
  fuelCap: number;
  organicMatterCap: number;
  costReduction: number;
}
export interface SKYBLOCK_GARDEN_COMPOSTER {
  organicMatter: number;
  fuelUnits: number;
  compostUnits: number;
  compostItems: number;
  conversionTicks: number;
  upgrades: SKYBLOCK_GARDEN_COMPOSTER_UPGRADES;
}
export interface SKYBLOCK_GARDEN_VISITOR_SERVED {
  total: number;
  unique: number;
}
export interface SKYBLOCK_GARDEN_VISITOR {
  visited: Record<string, number>;
  completed: Record<string, number>;
  served: SKYBLOCK_GARDEN_VISITOR_SERVED;
}
export interface SKYBLOCK_SLAYER_DATA {
  xp: number;
  tier1: number;
  tier2: number;
  tier3: number;
  tier4: number;
  tier5: number;
  level: number;
}
export interface clientOptions {
  cache?: boolean;
  hypixelCacheTime?: number;
  mojangCacheTime?: number;
  cacheSize?: number;
  cacheFilter?: string | string[] | { whitelist: string | string[]; blacklist: string | string[] };
  cacheHandler?: CacheHandler & unknown;
  rateLimit?: 'HARD' | 'AUTO' | 'NONE';
  keyLimit?: number;
  syncWithHeaders?: boolean;
  silent?: boolean;
  headers?: Record<string, unknown>;
  checkForUpdates?: boolean;
}
type PromiseLike<T> = T | Promise<T>;
type CacheHandler = {
  set: (key: string, value: unknown) => PromiseLike<void>;
  get: (key: string) => PromiseLike<unknown>;
  has: (key: string) => PromiseLike<boolean>;
  delete: (key: string) => PromiseLike<boolean>;
  keys: () => PromiseLike<string[]>;
  size: () => PromiseLike<number>;
  clear: () => PromiseLike<void>;
};
export interface methodOptions {
  raw?: boolean;
  noCacheCheck?: boolean;
  noCaching?: boolean;
}
export interface playerMethodOptions extends methodOptions {
  guild?: boolean;
  recentGames?: boolean;
}
export interface skyblockMemberOptions extends methodOptions {
  fetchPlayer?: boolean;
  getMuseum?: boolean;
  getGarden?: boolean;
}
export interface auctionsOptions extends methodOptions {
  noInfo?: boolean;
  noAuctions?: boolean;
  raw?: boolean;
  retries?: number;
  cooldown?: number;
  race?: boolean;
  includeItemBytes?: boolean;
}
export interface playerBingoOptions extends methodOptions {
  fetchBingoData?: boolean;
}

export interface LevelProgress {
  currentXP: number;
  remainingXP: number;
  xpToNext: number;
  percent: number;
  percentRemaining: number;
}
declare module 'hypixel-api-reborn' {
  const version: string;
  const Errors: {
    CACHE_FILTER_INVALID: string;
    CACHE_LIMIT_MUST_BE_A_NUMBER: string;
    CACHE_TIME_MUST_BE_A_NUMBER: string;
    CONNECTION_ERROR: string;
    ERROR_CODE_CAUSE: string;
    ERROR_STATUSTEXT: string;
    GUILD_DOES_NOT_EXIST: string;
    INVALID_API_KEY: string;
    INVALID_GUILD_ID: string;
    INVALID_GUILD_SEARCH_PARAMETER: string;
    INVALID_OPTION_VALUE: string;
    INVALID_KEY_LIMIT_OPTION: string;
    INVALID_HEADER_SYNC_OPTION: string;
    INVALID_BURST_OPTION: string;
    INVALID_RATE_LIMIT_OPTION: string;
    INVALID_RESPONSE_BODY: string;
    KEY_MUST_BE_A_STRING: string;
    MALFORMED_UUID: string;
    NO_API_KEY: string;
    NO_GUILD_QUERY: string;
    NO_NICKNAME_UUID: string;
    NO_UUID: string;
    OPTIONS_MUST_BE_AN_OBJECT: string;
    PAGE_INDEX_ERROR: string;
    PLAYER_DISABLED_ENDPOINT: string;
    PLAYER_DOES_NOT_EXIST: string;
    PLAYER_HAS_NEVER_LOGGED: string;
    PLAYER_IS_INACTIVE: string;
    RATE_LIMIT_INIT_ERROR: string;
    SOMETHING_WENT_WRONG: string;
    UUID_NICKNAME_MUST_BE_A_STRING: string;
    MULTIPLE_INSTANCES: string;
    UNEXPECTED_ERROR: string;
    RATE_LIMIT_EXCEEDED: string;
  };
  const Utils: {
    arrayTools: {
      /**
       * @description Is input string or array?
       */
      isStrArray(input: string | []): boolean;
      /**
       * @description String to array<string>
       */
      strToArray(input: string): string[];
    };
    Constants: {
      duelsDivisions: [
        { name: 'Rookie'; key: 'rookie' },
        { name: 'Iron'; key: 'iron' },
        { name: 'Gold'; key: 'gold' },
        { name: 'Diamond'; key: 'diamond' },
        { name: 'Master'; key: 'master' },
        { name: 'Legend'; key: 'legend' },
        { name: 'Grandmaster'; key: 'grandmaster' },
        { name: 'Godlike'; key: 'godlike' },
        { name: 'WORLD ELITE'; key: 'world_elite' },
        { name: 'WORLD MASTER'; key: 'world_master' },
        { name: "WORLD'S BEST"; key: 'worlds_best' }
      ];
      levelingXp: {
        1: 50;
        2: 125;
        3: 200;
        4: 300;
        5: 500;
        6: 750;
        7: 1000;
        8: 1500;
        9: 2000;
        10: 3500;
        11: 5000;
        12: 7500;
        13: 10000;
        14: 15000;
        15: 20000;
        16: 30000;
        17: 50000;
        18: 75000;
        19: 100000;
        20: 200000;
        21: 300000;
        22: 400000;
        23: 500000;
        24: 600000;
        25: 700000;
        26: 800000;
        27: 900000;
        28: 1000000;
        29: 1100000;
        30: 1200000;
        31: 1300000;
        32: 1400000;
        33: 1500000;
        34: 1600000;
        35: 1700000;
        36: 1800000;
        37: 1900000;
        38: 2000000;
        39: 2100000;
        40: 2200000;
        41: 2300000;
        42: 2400000;
        43: 2500000;
        44: 2600000;
        45: 2750000;
        46: 2900000;
        47: 3100000;
        48: 3400000;
        49: 3700000;
        50: 4000000;
      };
      xpPast50: {
        51: 4300000;
        52: 4600000;
        53: 4900000;
        54: 5200000;
        55: 5500000;
        56: 5800000;
        57: 6100000;
        58: 6400000;
        59: 6700000;
        60: 7000000;
      };
      runecraftingXp: {
        1: 50;
        2: 100;
        3: 125;
        4: 160;
        5: 200;
        6: 250;
        7: 315;
        8: 400;
        9: 500;
        10: 625;
        11: 785;
        12: 1000;
        13: 1250;
        14: 1600;
        15: 2000;
        16: 2465;
        17: 3125;
        18: 4000;
        19: 5000;
        20: 6200;
        21: 7800;
        22: 9800;
        23: 12200;
        24: 15300;
        25: 19050;
      };
      skillsCap: {
        taming: 50;
        farming: 60;
        mining: 60;
        combat: 60;
        foraging: 50;
        fishing: 50;
        enchanting: 60;
        alchemy: 50;
        carpentry: 50;
        runecrafting: 25;
        dungeons: 50;
        social: 25;
      };
      dungeonXp: {
        1: 50;
        2: 75;
        3: 110;
        4: 160;
        5: 230;
        6: 330;
        7: 470;
        8: 670;
        9: 950;
        10: 1340;
        11: 1890;
        12: 2665;
        13: 3760;
        14: 5260;
        15: 7380;
        16: 10300;
        17: 14400;
        18: 20000;
        19: 27600;
        20: 38000;
        21: 52500;
        22: 71500;
        23: 97000;
        24: 132000;
        25: 180000;
        26: 243000;
        27: 328000;
        28: 445000;
        29: 600000;
        30: 800000;
        31: 1065000;
        32: 1410000;
        33: 1900000;
        34: 2500000;
        35: 3300000;
        36: 4300000;
        37: 5600000;
        38: 7200000;
        39: 9200000;
        40: 1.2e7;
        41: 1.5e7;
        42: 1.9e7;
        43: 2.4e7;
        44: 3e7;
        45: 3.8e7;
        46: 4.8e7;
        47: 6e7;
        48: 7.5e7;
        49: 9.3e7;
        50: 1.1625e8;
      };
      hotmXp: {
        1: 0;
        2: 3000;
        3: 9000;
        4: 25000;
        5: 60000;
        6: 100000;
        7: 150000;
      };
      socialXp: {
        1: 50;
        2: 100;
        3: 150;
        4: 250;
        5: 500;
        6: 750;
        7: 1000;
        8: 1250;
        9: 1500;
        10: 2000;
        11: 2500;
        12: 3000;
        13: 3750;
        14: 4500;
        15: 6000;
        16: 8000;
        17: 10000;
        18: 12500;
        19: 15000;
        20: 20000;
        21: 25000;
        22: 30000;
        23: 35000;
        24: 40000;
        25: 50000;
      };
      petScore: {
        COMMON: 1;
        UNCOMMON: 2;
        RARE: 3;
        EPIC: 4;
        LEGENDARY: 5;
        MYTHIC: 6;
      };
      petRarityOffset: {
        COMMON: 0;
        UNCOMMON: 6;
        RARE: 11;
        EPIC: 16;
        LEGENDARY: 20;
        MYTHIC: 20;
      };
      petLevels: [
        100,
        110,
        120,
        130,
        145,
        160,
        175,
        190,
        210,
        230,
        250,
        275,
        300,
        330,
        360,
        400,
        440,
        490,
        540,
        600,
        660,
        730,
        800,
        880,
        960,
        1050,
        1150,
        1260,
        1380,
        1510,
        1650,
        1800,
        1960,
        2130,
        2310,
        2500,
        2700,
        2920,
        3160,
        3420,
        3700,
        4000,
        4350,
        4750,
        5200,
        5700,
        6300,
        7000,
        7800,
        8700,
        9700,
        10800,
        12000,
        13300,
        14700,
        16200,
        17800,
        19500,
        21300,
        23200,
        25200,
        27400,
        29800,
        32400,
        35200,
        38200,
        41400,
        44800,
        48400,
        52200,
        56200,
        60400,
        64800,
        69400,
        74200,
        79200,
        84700,
        90700,
        97200,
        104200,
        111700,
        119700,
        128200,
        137200,
        146700,
        156700,
        167700,
        179700,
        192700,
        206700,
        221700,
        237700,
        254700,
        272700,
        291700,
        311700,
        333700,
        357700,
        383700,
        411700,
        441700,
        476700,
        516700,
        561700,
        611700,
        666700,
        726700,
        791700,
        861700,
        936700,
        1016700,
        1101700,
        1191700,
        1286700,
        1386700,
        1496700,
        1616700,
        1746700,
        1886700,
        0,
        5555,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700,
        1886700
      ];
      leaderboardNames: {
        ARENA: 'ARENA';
        COPS_AND_CRIMS: 'MCGO';
        WARLORDS: 'BATTLEGROUND';
        BLITZ_SURVIVAL_GAMES: 'SURVIVAL_GAMES';
        UHC: 'UHC';
        WALLS: 'WALLS';
        PROTOTYPE: 'PROTOTYPE';
        PAINTBALL: 'PAINTBALL';
        SKYWARS: 'SKYWARS';
        MURDER_MYSTERY: 'MURDER_MYSTERY';
        SMASH_HEROES: 'SUPER_SMASH';
        DUELS: 'DUELS';
        SPEED_UHC: 'SPEED_UHC';
        TNTGAMES: 'TNTGAMES';
        BEDWARS: 'BEDWARS';
        TURBO_KART_RACERS: 'GINGERBREAD';
        BUILD_BATTLE: 'BUILD_BATTLE';
        ARCADE: 'ARCADE';
        SKYCLASH: 'SKYCLASH';
        QUAKECRAFT: 'QUAKECRAFT';
        CRAZY_WALLS: 'TRUE_COMBAT';
        MEGA_WALLS: 'WALLS3';
        VAMPIREZ: 'VAMPIREZ';
      };
      MiniGamesString: {
        QUAKECRAFT: 'Quakecraft';
        WALLS: 'Walls';
        PAINTBALL: 'Paintball';
        SURVIVAL_GAMES: 'Blitz Survival Games';
        TNTGAMES: 'The TNT Games';
        VAMPIREZ: 'VampireZ';
        WALLS3: 'Mega Walls';
        ARCADE: 'Arcade';
        ARENA: 'Arena Brawl';
        MCGO: 'Cops and Crims';
        UHC: 'UHC Champions';
        BATTLEGROUND: 'Warlords';
        SUPER_SMASH: 'Smash Heroes';
        GINGERBREAD: 'Turbo Kart Racers';
        HOUSING: 'Housing';
        SKYWARS: 'SkyWars';
        TRUE_COMBAT: 'Crazy Walls';
        SPEED_UHC: 'Speed UHC';
        SKYCLASH: 'SkyClash';
        LEGACY: 'Classic Games';
        PROTOTYPE: 'Prototype';
        BEDWARS: 'BedWars';
        MURDER_MYSTERY: 'Murder Mystery';
        BUILD_BATTLE: 'Build Battle';
        DUELS: 'Duels';
        PIT: 'The Pit';
        SKYBLOCK: 'SkyBlock';
        REPLAY: 'Replay';
        LIMBO: 'Limbo';
        IDLE: 'Idle';
        QUEUE: 'Queue';
        MAIN_LOBBY: 'Main Lobby';
        TOURNAMENT_LOBBY: 'Tournament Lobby';
      };
      SkyWarsPrestigeIcons: {
        default: '⋆';
        angel_1: '★';
        angel_2: '☆';
        angel_3: '⁕';
        angel_4: '✶';
        angel_5: '✳';
        angel_6: '✴';
        angel_7: '✷';
        angel_8: '❋';
        angel_9: '✼';
        angel_10: '❂';
        angel_11: '❁';
        angel_12: '☬';
        iron_prestige: '✙';
        gold_prestige: '❤️';
        diamond_prestige: '☠';
        emerald_prestige: '✦';
        sapphire_prestige: '✌';
        ruby_prestige: '❦';
        crystal_prestige: '✵';
        opal_prestige: '❣';
        amethyst_prestige: '☯';
        rainbow_prestige: '✺';
        mythic_prestige: 'ಠ_ಠ';
        favor_of_the_angel_prestige: '⚔';
      };
      games: [
        { name: 'Quake Craft'; code: 'QUAKECRAFT'; id: 2 },
        { name: 'Walls'; code: 'WALLS'; id: 3 },
        { name: 'Paintball'; code: 'PAINTBALL'; id: 4 },
        { name: 'Blitz Survival Games'; code: 'SURVIVAL_GAMES'; id: 5 },
        { name: 'The TNT Games'; code: 'TNTGAMES'; id: 6 },
        { name: 'VampireZ'; code: 'VAMPIREZ'; id: 7 },
        { name: 'Mega Walls'; code: 'WALLS3'; id: 13 },
        { name: 'Arcade'; code: 'ARCADE'; id: 14 },
        { name: 'Arena Brawl'; code: 'ARENA'; id: 17 },
        { name: 'UHC Champions'; code: 'UHC'; id: 20 },
        { name: 'Cops and Crims'; code: 'MCGO'; id: 21 },
        { name: 'Warlords'; code: 'BATTLEGROUND'; id: 23 },
        { name: 'Smash Heroes'; code: 'SUPER_SMASH'; id: 24 },
        { name: 'Turbo Kart Racers'; code: 'GINGERBREAD'; id: 25 },
        { name: 'Housing'; code: 'HOUSING'; id: 26 },
        { name: 'SkyWars'; code: 'SKYWARS'; id: 51 },
        { name: 'Crazy Walls'; code: 'TRUE_COMBAT'; id: 52 },
        { name: 'Speed UHC'; code: 'SPEED_UHC'; id: 54 },
        { name: 'SkyClash'; code: 'SKYCLASH'; id: 55 },
        { name: 'Classic Games'; code: 'LEGACY'; id: 56 },
        { name: 'Prototype'; code: 'PROTOTYPE'; id: 57 },
        { name: 'BedWars'; code: 'BEDWARS'; id: 58 },
        { name: 'Murder Mystery'; code: 'MURDER_MYSTERY'; id: 59 },
        { name: 'Build Battle'; code: 'BUILD_BATTLE'; id: 60 },
        { name: 'Duels'; code: 'DUELS'; id: 61 },
        { name: 'SkyBlock'; code: 'SKYBLOCK'; id: 63 },
        { name: 'The Pit'; code: 'PIT'; id: 64 },
        { name: 'Replay'; code: 'REPLAY'; id: -1 },
        { name: 'Limbo'; code: 'LIMBO'; id: -2 },
        { name: 'Queue'; code: 'QUEUE'; id: -3 },
        { name: 'Main Lobby'; code: 'MAIN_LOBBY'; id: -4 },
        { name: 'Tournament Lobby'; code: 'TOURNAMENT_LOBBY'; id: -5 },
        { name: 'Idle'; code: 'IDLE'; id: -6 }
      ];
    };
    /**
     * @description Divides a by b
     */
    divide(a: number, b: number): number;
    guildExp: {
      parseHistory(historyDate: Record<string, unknown>): { day: string; date: Date; exp: number; totalExp: number }[];
      getGuildLevel(exp: number): number;
    };
    oscillation: {
      weekAB(date: Date): 'a' | 'b';
      monthAB(date: Date): 'a' | 'b';
    };
    /**
     * @description Is this guild ID?
     */
    isGuildID(id: string): boolean;
    /**
     * @description Is this uuid?
     */
    isUUID(uuid: string): boolean;
    removeSnakeCase: {
      /**
       * @description Validates JSON
       */
      validateJSON(obj: Record<string, unknown>): boolean;
      /**
       * @description Converts {str_str: {}} to {strStr: {}} without JSON validation
       */
      single(obj: Record<string, unknown>): Record<string, unknown>;
      /**
       * @description Converts {str_str: {}} to {strStr: {}}
       */
      recursive(obj: Record<string, unknown>, lowerCase?: boolean): Record<string, unknown>;
      /**
       * @description Converts 'str_str' to 'strStr'
       */
      removeSnakeCaseString(str: string): string;
    };
    rgbToHexColor(rgb: number[]): string;
    SkyblockUtils: {
      /**
       * @description Decodes base64 to skyblock inventory data
       */
      decode(base64: string): Promise<Record<string, unknown>>;
      /**
       * @description Get level by experience
       */
      getLevelByXp(xp: number, type: string, levelCap: number | null): number;
      /**
       * @description Get level by achievement
       */
      getLevelByAchievement(
        achievementLevel: number,
        type: string
      ): {
        xp: number;
        level: number;
        maxLevel: number;
        xpCurrent: number;
        xpForNext: number;
        progress: number;
      };
      /**
       * @description Get slayer level
       */
      getSlayerLevel(slayer: Record<string, unknown>): {
        xp: number;
        tier1: number;
        tier2: number;
        tier3: number;
        tier4: number;
        level: number;
      };
    };
    /**
     * Calls Mojang API for player's nickname by uuid
     * @param input Player UUID
     */
    toIGN(input: string): Promise<string>;
    /**
     * Calls Mojang API for player's uuid by nickname
     * @param input Player nickname
     */
    toUuid(input: string): Promise<string>;
    /**
     * Converts varInts to js numbers
     * @param bytes Array of numbers to be read as minecraft var ints.
     */
    varInt(bytes: number[]): number;
  };
  class Client extends EventEmitter {
    constructor(key: string, options?: clientOptions);
    /**
     * @description API Key
     */
    readonly key: string;
    /**
     * @description Client options
     */
    readonly options: clientOptions;
    /**
     * @description Returns all cache entries
     */
    readonly cache: Map<string, any>;
    /**
     * @description Retrieves information about Hypixel achievements.
     * @param {methodOptions} [options] - The method options.
     */
    getAchievements(options?: methodOptions): Promise<Achievements>;
    /**
     * @description Parses the RSS feed from status.hypixel.net
     * @param {methodOptions} [options] - The method options.
     */
    getAPIStatus(options?: methodOptions): Promise<APIStatus>;
    /**
     * @description Allows you to get all active boosters
     * @param {methodOptions} [options] - The method options.
     */
    getBoosters(options?: methodOptions): Promise<Booster[]>;
    /**
     * @description Allows you to get information about hypixel challenges [NO KEY REQUIRED]
     * @param {methodOptions} [options] - The method options.
     */
    getChallenges(options?: methodOptions): Promise<Challenges>;
    /**
     * @description Allows you to get player count along with the player count of each public game
     * @param {methodOptions} [options] - The method options.
     */
    getGameCounts(options?: methodOptions): Promise<GameCounts>;
    /**
     * @description Allows you to get statistics of hypixel guild
     * @param {"id"|"name"|"player"} searchParameter - How you want to search
     * @param {string} query - guild name, player nickname or guild id
     * @param {methodOptions} [options] - The method options.
     */
    getGuild(searchParameter: 'id' | 'name' | 'player', query: string, options?: methodOptions): Promise<Guild>;
    /**
     * @description Allows you to get information about hypixel guild achievements [NO KEY REQUIRED]
     * @param {methodOptions} [options] - The method options.
     */
    getGuildAchievements(options?: methodOptions): Promise<GuildAchievements>;
    /**
     * @description Allows you to get leaderboards of each mini-game
     * @param {methodOptions} [options] - The method options.
     */
    getLeaderboards(options?: methodOptions): Promise<{
      ARENA: Leaderboard[];
      COPS_AND_CRIMS: Leaderboard[];
      WARLORDS: Leaderboard[];
      BLITZ_SURVIVAL_GAMES: Leaderboard[];
      UHC: Leaderboard[];
      WALLS: Leaderboard[];
      PROTOTYPE: Leaderboard[];
      PAINTBALL: Leaderboard[];
      SKYWARS: Leaderboard[];
      MURDER_MYSTERY: Leaderboard[];
      SMASH_HEROES: Leaderboard[];
      DUELS: Leaderboard[];
      SPEED_UHC: Leaderboard[];
      TNTGAMES: Leaderboard[];
      BEDWARS: Leaderboard[];
      TURBO_KART_RACERS: Leaderboard[];
      BUILD_BATTLE: Leaderboard[];
      ARCADE: Leaderboard[];
      SKYCLASH: Leaderboard[];
      QUAKECRAFT: Leaderboard[];
      CRAZY_WALLS: Leaderboard[];
      MEGA_WALLS: Leaderboard[];
      VAMPIREZ: Leaderboard[];
    }>;
    /**
     * @description Allows you to get statistics of player
     * @param {string} query - player nickname or uuid
     * @param {playerMethodOptions} [options] - player search options
     */
    getPlayer(query: string, options?: playerMethodOptions): Promise<Player>;
    /**
     * @description Allows you to get information about hypixel quests [NO KEY REQUIRED]
     * @param {methodOptions} [options] - Options
     */
    getQuests(options?: methodOptions): Promise<Quests>;
    /**
     * @description Allows you to get recent games of a player
     * @param {string} query - player nickname or uuid
     * @param {methodOptions} [options] - Options
     */
    getRecentGames(query: string, options?: methodOptions): Promise<RecentGame[]>;
    /**
     * @description Parses information returned by hypixel upon a status request packet
     * @param {number} repeats Amount of times to ping hypixel, preferably between 1 and 10 times.
     */
    getServerInfo(repeats?: number): Promise<ServerInfo>;
    /**
     * @description Allows you to get player's network status
     * @param {string} query - player nickname or uuid
     * @param {methodOptions} [options] - Options
     */
    getStatus(query: string, options?: methodOptions): Promise<Status>;
    /**
     * @description Allows you to get statistics of watchdog anticheat
     * @param {methodOptions} [options] - Options
     */
    getWatchdogStats(options?: methodOptions): Promise<WatchdogStats>;
    /**
     * @description Allows you to get filtered skyblock auctions. Using auction ID will return an array of at most 1 element
     * @name Client#getSkyblockAuction
     * @param  {'PROFILE' | 'PLAYER' | 'AUCTION'} type - Filter to use
     * @param {string} query - uuid of profile, player, or auction. IGN can be used as well
     * @param {boolean} includeItemBytes - include item bytes (optional)
     * @param {methodOptions} [options] - Options
     */
    getSkyblockAuction(
      type: 'PROFILE' | 'PLAYER' | 'AUCTION',
      query: string,
      includeItemBytes?: boolean,
      options?: methodOptions
    ): Promise<Auction[]>;
    /**
     * Allows you to get skyblock auctions
     * @param {string|number|number[]} page - "*", a page number, or an array with the start and the end page number ( automatically sorted )
     * @param {auctionsOptions} [options={}] Options
     * @return {Promise<{info:AuctionInfo,Auctions:Auction[]}>}
     */
    getSkyblockAuctions(
      page: string | number | number[],
      options?: auctionsOptions
    ): Promise<{ info: AuctionInfo; Auctions: Auction[] }>;
    /**
     * @description Allows you to get all auctions of player
     * @param {string} query - player nickname or uuid
     * @param {boolean} includeItemBytes - include item bytes (optional)
     * @param {methodOptions} [options] - Options
     */
    getSkyblockAuctionsByPlayer(query: string, includeItemBytes?: boolean, options?: methodOptions): Promise<Auction[]>;
    /**
     * @description Allows you to get list of products
     * @param {methodOptions} [options] - Options
     */
    getSkyblockBazaar(options?: methodOptions): Promise<Product[]>;
    /**
     * @description Gets bingo data
     * @param {methodOptions} [options] - Options
     */
    getSkyblockBingo(options?: methodOptions): Promise<BingoData>;
    /**
     * @description Gets bingo data of a player
     * @param {string} query - UUID/IGN of player
     * @param {methodOptions} [options] - Options
     */
    getSkyblockBingoByPlayer(query: string, options?: playerBingoOptions): Promise<PlayerBingo>;
    /**
     * @description Allows you to get list of active skyblock firesales
     * @param {methodOptions} [options] - Options
     */
    getSkyblockFireSales(options?: methodOptions): Promise<FireSale[]>;
    /**
     * @description Allows you to get a profiles skyblock garden
     * @param {methodOptions} [options] - Options
     */
    getSkyblockGarden(profileId: string, options?: methodOptions);
    /**
     * @description Gets data of skyblock government
     * @param {methodOptions} [options] - Options
     */
    getSkyblockGovernment(options?: methodOptions): Promise<GovernmentData>;
    /**
     * @description Allows you to get a player's skyblock member data from all their profiles
     * @param query - player nickname or uuid
     * @param {methodOptions} [options] - Options
     */
    getSkyblockMember(query: string, options?: skyblockMemberOptions): Promise<Map<string, SkyblockMember>>;
    /**
     * @description Allows you to get statistics of player
     * @param {string} query - player nickname or uuid
     * @param {string} profileId - profile id
     * @param {methodOptions} [options] - Options
     */
    getSkyblockMuseum(query: string, profileId: string, options?: methodOptions);
    /**
     * @description Allows you to get skyblock news
     * @param {methodOptions} [options] - Options
     */
    getSkyblockNews(options?: methodOptions): Promise<SkyblockNews>;
    /**
     * @description Allows you to get a player's skyblock profiles
     * @param query - player nickname or uuid
     * @param {methodOptions} [options] - Options
     */
    getSkyblockProfiles(query: string, options?: skyblockMemberOptions): Promise<SkyblockProfile[]>;
    /**
     * @description Get a array of active houses
     * @param {methodOptions} [options] - Options
     */
    getActiveHouses(options?: methodOptions): Promise<House[]>;
    /**
     * @description Get a array of houses for a user
     * @param query - UUID / IGN of player
     * @param {methodOptions} [options] - Options
     */
    getPlayerHouses(query: string, options?: methodOptions): Promise<House[]>;
    /**
     * @description Get a house
     * @param query - house uuid
     * @param {methodOptions} [options] - Options
     */
    getHouse(query: string, options?: methodOptions): Promise<House>;
    /**
     * @param amount - Amount of cache entries to delete
     * @description Allows you to clear cache
     */
    sweepCache(amount?: number): void;
    on(event: 'outgoingRequest', listener: (url: string, options: Record<string, unknown>) => void): this;
    on(event: 'warn', listener: (error: string) => void): this;
    /**
     * @description Emitted ( only once ) when rate limiter is ready. ( You don't have to wait for this event to emit UNLESS you are planning to do data scraping which means spamming requests )
     */
    once(event: 'ready', listener: () => void): this;
  }
  class Player {
    constructor(data: Record<string, unknown>);
    nickname: string;
    uuid: string;
    history: string[];
    rank: PLAYER_RANK;
    mcVersion: string;
    channel: string;
    lastLoginTimestamp: number;
    lastLogin?: Date;
    lastLogoutTimestamp: number;
    lastLogout?: Date;
    firstLoginTimestamp: number;
    firstLogin: Date;
    recentlyPlayedGame: Game;
    plusColor?: Color;
    prefixColor?: Color;
    karma: number;
    achievements: Record<string, unknown>;
    achievementPoints: number;
    totalExperience: number;
    level: number;
    socialMedia: { name: string; link: string; id: SOCIAL_MEDIA_ID }[];
    giftsSent?: number;
    giftBundlesSent?: number;
    giftBundlesReceived?: number;
    levelProgress: LevelProgress;
    isOnline: boolean;
    userLanguage: string;
    lastDailyReward?: Date;
    lastDailyRewardTimestamp?: number;
    totalRewards?: number;
    totalDailyRewards?: number;
    rewardStreak?: number;
    rewardScore?: number;
    rewardHighScore?: number;
    claimedLevelingRewards: number[];
    globalCosmetics: PlayerCosmetics;
    ranksPurchaseTime: {
      VIP: Date | null;
      VIP_PLUS: Date | null;
      MVP: Date | null;
      MVP_PLUS: Date | null;
    };
    guild?: Guild;
    stats?: {
      skywars?: SkyWars;
      bedwars?: BedWars;
      uhc?: UHC;
      speeduhc?: SpeedUHC;
      murdermystery?: MurderMystery;
      duels?: Duels;
      buildbattle?: BuildBattle;
      megawalls?: MegaWalls;
      copsandcrims?: CopsAndCrims;
      tntgames?: TNTGames;
      smashheroes?: SmashHeroes;
      vampirez?: VampireZ;
      blitzsg?: BlitzSurvivalGames;
      arena?: ArenaBrawl;
      paintball?: Paintball;
      quakecraft?: Quakecraft;
      turbokartracers?: TurboKartRacers;
      walls?: Walls;
      warlords?: Warlords;
      arcade?: Arcade;
      woolwars?: WoolWars;
      pit?: Pit;
    };
    getRecentGames(): Promise<RecentGame[]>;
    recentGames?: RecentGame[];
    toString(): string;
  }
  class Pit {
    static calcLevel(prestige: number, xp: number): number;
    constructor(data: Record<string, unknown>);
    prestige: number;
    xp: number;
    level: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    assists: number;
    maxKillStreak: number;
    playtime: number;
    joins: number;
    damageReceived: number;
    damageDealt: number;
    damageRatio: number;
    meleeDamageReceived: number;
    meleeDamageDealt: number;
    swordHits: number;
    leftClicks: number;
    meleeAccuracy: number;
    meleeDamageRatio: number;
    bowDamageReceived: number;
    bowDamageDealt: number;
    arrowsHit: number;
    arrowsFired: number;
    bowAccuracy: number;
    bowDamageRatio: number;
    goldenHeadsEaten: number;
    getInventory(): Promise<SkyblockInventoryItem[]>;
    getEnterChest(): Promise<SkyblockInventoryItem[]>;
    getArmor(): Promise<SkyblockInventoryItem[]>;
  }
  class PitInventoryItem {
    constructor(data: Record<string, unknown>);
    itemId: number;
    count: number;
    name: string | null;
    lore: string | null;
    loreArray: string[] | [];
    extraAttributes: string | null;
    toString(): string;
  }
  class WoolWars {
    static convertXPToLevel(exp: number): number;
    static generateStatsFor(data: Record<string, unknown>, _class?: string | undefined): WoolWarsStats;
    constructor(data: Record<string, unknown>);
    layers: number;
    xp: number;
    exactLevel: number;
    level: number;
    coins: number;
    wins: number;
    gamesPlayed: number;
    woolsPlaced: number;
    blocksBroken: number;
    placeBreakRatio: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    assists: number;
    powerups: number;
    selectedClass: 'ASSAULT' | 'TANK' | 'GOLEM' | 'SWORDSMAN' | 'ENGINEER' | 'ARCHER' | 'NONE';
    stats: {
      assault: WoolWarsStats;
      tank: WoolWarsStats;
      golem: WoolWarsStats;
      swordsman: WoolWarsStats;
      engineer: WoolWarsStats;
      archer: WoolWarsStats;
    };
    ownedCosmetics: string[];
    privateGamesConfig: PrivateGamesConfig;
  }
  type WoolWarsStats = {
    wins: number;
    gamesPlayed: number;
    woolsPlaced: number;
    blocksBroken: number;
    placeBreakRatio: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    assists: number;
    powerups: number;
  };
  type PrivateGamesConfig = {
    one_hit_one_kill: boolean;
    rainbow_wool: 'Enabled' | 'Disabled';
    health_buff: string;
    game_speed: string;
    speed: string;
    no_class: 'Enabled' | 'Disabled';
    respawn_enable: boolean;
  };
  class PlayerCosmetics {
    constructor(data: Record<string, unknown>);
    allCosmetics: string[];
    petManager: Pets | null;
    get suits(): string[];
    get hats(): string[];
    get gadgets(): string[];
    get morphs(): string[];
    get cloaks(): string[];
    get taunts(): string[];
    get rankColors(): string[];
    get clickEffects(): string[];
  }
  class Pets {
    constructor(pets: string[], data: Record<string, unknown>);
    pets: Pet[];
    lastJourneyTimestamp: number | null;
    lastJourneyAt: Date | null;
    petConsumables: PetConsumables;
  }
  class Pet {
    constructor(name: string, data: Record<string, unknown>);
    isFavorite: boolean;
    name: string;
    active: boolean;
    stats?: {
      hunger: number | null;
      lastFed: number | null;
      lastFedAt: Date | null;
      thirst: number | null;
      lastDrank: number | null;
      lastDrankAt: Date | null;
      exercise: number | null;
      lastExercised: number | null;
      lastExercisedAt: Date | null;
    };
    rawNickname: string | null;
    nickname: string | null;
    experience: number;
  }
  class PetConsumables {
    BAKED_POTATO: number;
    COOKIE: number;
    FEATHER: number;
    HAY_BLOCK: number;
    SLIME_BALL: number;
    COOKED_BEEF: number;
    RED_ROSE: number;
    WATER_BUCKET: number;
    MELON: number;
    STICK: number;
    WOOD_SWORD: number;
    MILK_BUCKET: number;
    GOLD_RECORD: number;
    LEASH: number;
    LAVA_BUCKET: number;
    BONE: number;
    MAGMA_CREAM: number;
    WHEAT: number;
    MUSHROOM_SOUP: number;
    BREAD: number;
    PUMPKIN_PIE: number;
    APPLE: number;
    CARROT_ITEM: number;
    RAW_FISH: number;
    PORK: number;
    CAKE: number;
    ROTTEN_FLESH: number;
  }
  class Leaderboard {
    constructor(data: Record<string, unknown>);
    name: string;
    title: string;
    playerCount: number;
    leaders: string[];
  }
  /**
   * @description Typings might be different. Hypixel: Due to the large amount of modes and that they can change at anytime we don't currently have a friendly list of mode keys to clean names. This may be added at a later date.
   */
  class GameCounts {
    constructor(data: Record<string, unknown>);
    playerCount: number;
    mainLobby: { players: number };
    tournamentLobby: { players: number };
    megaWalls: {
      players: number;
      modes: { standard: number; faceOff: number };
    };
    classicGames: {
      players: number;
      modes: {
        paintball: number;
        walls: number;
        quakecraft: number;
        gingerbread: number;
        arena: number;
        vampirez: number;
      };
    };
    thePit: { players: number; modes: { pit: number } };
    blitzSurvivalGames: {
      players: number;
      modes: { soloNormal: number; teamsNormal: number };
    };
    duels: {
      players: number;
      modes: {
        duelsBowspleefDuel: number;
        duelsBowDuel: number;
        duelsBridge_2v2v2v2: number;
        duelsMwDuel: number;
        duelsUhcFour: number;
        duelsUhcMeetup: number;
        duelsBridgeDoubles: number;
        duelsSwDoubles: number;
        duelsUhcDoubles: number;
        duelsBridgeFour: number;
        duelsBridge_3v3v3v3: number;
        duelsSumoDuel: number;
        duelsUhcDuel: number;
        duelsOpDoubles: number;
        duelsOpDuel: number;
        duelsMwDoubles: number;
        duelsBlitzDuel: number;
        duelsPotionDuel: number;
        duelsClassicDuel: number;
        duelsComboDuel: number;
        duelsBridgeDuel: number;
        duelsSwDuel: number;
      };
    };
    uhcChampions: { players: number; modes: { teams: number; solo: number } };
    speedUhc: { players: number; modes: { soloNormal: number } };
    theTntGames: {
      players: number;
      modes: {
        pvprun: number;
        tntag: number;
        tntrun: number;
        bowspleef: number;
        capture: number;
      };
    };
    prototype: {
      players: number;
      modes: { towerwarsSolo: number; towerwarsTeamOfTwo: number };
    };
    smashHeroes: {
      players: number;
      modes: {
        '1v1Normal': number;
        friendsNormal: number;
        soloNormal: number;
        '2v2Normal': number;
        teamsNormal: number;
      };
    };
    bedwars: {
      players: number;
      modes: {
        bedwarsTwoFour: number;
        bedwarsFourFourRush: number;
        bedwarsEightOne: number;
        bedwarsEightTwoRush: number;
        bedwarsEightTwoVoidless: number;
        bedwarsEightTwoArmed: number;
        bedwarsEightTwo: number;
        bedwarsFourFour: number;
        bedwarsEightTwoLucky: number;
        bedwarsFourThree: number;
        bedwarsFourFourVoidless: number;
        bedwarsFourFourLucky: number;
        bedwarsEightTwoUltimate: number;
      };
    };
    buildBattle: {
      players: number;
      modes: {
        buildBattleSoloNormalLatest: number;
        buildBattleGuessTheBuild: number;
        buildBattleTeamsNormal: number;
        buildBattleSoloPro: number;
        buildBattleSoloNormal: number;
      };
    };
    housing: { players: number };
    skywars: {
      players: number;
      modes: {
        soloInsaneLucky: number;
        soloInsaneSlime: number;
        teamsInsaneSlime: number;
        teamsInsaneRush: number;
        teamsInsane: number;
        soloNormal: number;
        soloInsaneHuntersVsBeasts: number;
        soloInsaneTntMadness: number;
        soloInsaneRush: number;
        soloInsane: number;
        teamsNormal: number;
        megaNormal: number;
      };
    };
    replay: { players: number; modes: { base: number } };
    skyblock: {
      players: number;
      modes: {
        dungeonHub: number;
        mining_2: number;
        farming_2: number;
        farming_1: number;
        mining_3: number;
        combat_3: number;
        dynamic: number;
        combat_1: number;
        foraging_1: number;
        hub: number;
        dungeon: number;
        combat_2: number;
        mining_1: number;
      };
    };
    copsAndCrims: {
      players: number;
      modes: { normal: number; deathmatch: number };
    };
    murderMystery: {
      players: number;
      modes: {
        murderDoubleUp: number;
        murderInfection: number;
        murderAssassins: number;
        murderClassic: number;
      };
    };
    arcade: {
      players: number;
      modes: {
        party: number;
        holeInTheWall: number;
        defender: number;
        miniWalls: number;
        simonSays: number;
        zombiesBadBlood: number;
        hideAndSeekPartyPooper: number;
        dayone: number;
        drawTheirThing: number;
        zombiesAlienArcadium: number;
        oneinthequiver: number;
        soccer: number;
        pvpCtw: number;
        ender: number;
        throwOut: number;
        starwars: number;
        dragonwars2: number;
        zombiesDeadEnd: number;
        farmHunt: number;
        hideAndSeekPropHunt: number;
      };
    };
    warlords: {
      players: number;
      modes: { ctfMini: number; domination: number; teamDeathmatch: number };
    };
    limbo: { players: number };
    idle: { players: number };
    queue: { players: number };
  }
  class Arcade {
    constructor(data?: Record<string, unknown>);
    lastTourneyAdTimestamp: number;
    lastTourneyAdAt: Date;
    coins: number;
    weeklyCoins: number;
    monthlyCoins: number;
    hintsDisabled: boolean;
    flashDisabled: boolean;
    blockingDead: BlockingDead;
    bountyHunters: BountyHunters;
    captureTheWool: CaptureTheWool;
    dragonWars: DragonWars;
    dropper: Dropper;
    enderSpleef: EnderSpleef;
    farmHunt: FarmHunt;
    football: Football;
    galaxyWars: GalaxyWars;
    hideAndSeek: HideAndSeek;
    holeInTheWall: HoleInTheWall;
    hypixelSays: HypixelSays;
    miniWalls: MiniWalls;
    pixelParty: PixelParty;
    zombies: Zombies;
  }
  class BlockingDead {
    constructor(data: Record<string, unknown>);
    wins: number;
    kills: number;
    headshots: number;
  }
  class BountyHunters {
    constructor(data: Record<string, unknown>);
    wins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    bountyKills: number;
    bowKills: number;
    swordKills: number;
  }
  class CaptureTheWool {
    constructor(data: Record<string, unknown>);
    wins: number;
    losses: number;
    WLRatio: number;
    draws: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    assists: number;
    woolPickedUp: number;
    woolCaptured: number;
    fastestWin: number;
    longestGame: number;
  }
  class DragonWars {
    constructor(data: Record<string, unknown>);
    wins: number;
    kills: number;
  }
  class DropperMap {
    constructor(data: Record<string, unknown>, mapName: string);
    bestTime: number;
    completions: number;
  }
  class Dropper {
    constructor(data: Record<string, unknown>);
    wins: number;
    fails: number;
    fastestGame: number;
    flawlessGames: number;
    gamesPlayed: number;
    mapsCompleted: number;
    gamesFinished: number;
    maps: Record<string, DropperMap>;
  }
  class EnderSpleef {
    constructor(data: Record<string, unknown>);
    wins: number;
    kills: number;
    trail: string;
    blocksDestroyed: number;
    bigShotActivations: number;
    tripleShotActivations: number;
    totalPowerUpActivations: number;
  }
  class FarmHunt {
    constructor(data: Record<string, unknown>);
    wins: number;
    winsAsAnimal: number;
    winsAsHunter: number;
    kills: number;
    killsAsAnimal: number;
    killsAsHunter: number;
    tauntsUsed: number;
    riskyTauntsUsed: number;
    safeTauntsUsed: number;
    dangerousTauntsUsed: number;
    fireworkTauntsUsed: number;
    poop: number;
  }
  class Football {
    constructor(data: Record<string, unknown>);
    wins: number;
    kicks: number;
    powerKicks: number;
    goals: number;
  }
  class GalaxyWars {
    constructor(data: Record<string, unknown>);
    wins: number;
    kills: number;
    deaths: number;
    shotsFired: number;
    weeklyKills: number;
    monthlyKills: number;
    attackerKills: number;
    defenderKills: number;
  }
  class PartyPopper {
    constructor(data: Record<string, unknown>);
    winsAsSeeker: number;
    winsAsHider: number;
    wins: number;
  }
  class PropHunt {
    constructor(data: Record<string, unknown>);
    winsAsSeeker: number;
    winsAsHider: number;
    wins: number;
  }
  class HideAndSeek {
    constructor(data: Record<string, unknown>);
    partyPopper: PartyPopper;
    propHunt: PropHunt;
    winsAsSeeker: number;
    winsAsHider: number;
  }
  class HoleInTheWall {
    constructor(data: Record<string, unknown>);
    wins: number;
    rounds: number;
    scoreRecordFinals: number;
    scoreRecordNormal: number;
    scoreRecordOverall: number;
  }
  class HypixelSays {
    constructor(data: Record<string, unknown>);
    wins: number;
    rounds: number;
    roundWins: number;
    topScore: number;
  }
  class MiniWalls {
    constructor(data: Record<string, unknown>);
    kit: string;
    wins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    finalKills: number;
    witherKills: number;
    witherDamage: number;
    arrowsShot: number;
    arrowsHit: number;
    bowAccuracy: number;
  }
  class PixelPartyGameMode {
    constructor(data: Record<string, unknown>, modeName: string);
    wins: number;
    gamesPlayed: number;
    losses: number;
    WLRatio: number;
    roundsPlayed: number;
    powerUpsCollected: number;
  }
  class PixelParty {
    constructor(data: Record<string, unknown>);
    wins: number;
    gamesPlayed: number;
    losses: number;
    WLRatio: number;
    roundsPlayed: number;
    powerUpsCollected: number;
    normal: PixelPartyGameMode;
    hyper: PixelPartyGameMode;
    highestRound: number;
    musicVolume: number;
    colorBlind: object;
  }
  class ThrowOut {
    constructor(data: Record<string, unknown>);
    wins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
  }
  class Zombies {
    constructor(data: Record<string, unknown>);
    overall: ZombiesStats;
    deadEnd: ZombiesStats;
    badBlood: ZombiesStats;
    alienArcadium: ZombiesStats;
    prison: ZombiesStats;
    killsByZombie: Record<string, number>;
    bulletsHit: number;
    bulletsShot: number;
    gunAccuracy: number;
    headshots: number;
    headshotAccuracy: number;
  }
  class ZombiesStats {
    constructor(data: Record<string, unknown>, type?: string);
    bestRound: number;
    deaths: number;
    doorsOpened: number;
    fastestRound10: number;
    fastestRound20: number;
    fastestRound30: number;
    playersRevived: number;
    timesKnockedDown: number;
    roundsSurvived: number;
    windowsRepaired: number;
    wins: number;
    zombieKills: number;
  }

  class ArenaBrawlMode {
    constructor(data: Record<string, unknown>);
    damage: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    healed: number;
    wins: number;
    losses: number;
    WLRatio: number;
    games: number;
    winstreak: number;
  }
  class ArenaBrawl {
    constructor(data: Record<string, unknown>);
    coins: number;
    coinsSpent: number;
    wins: number;
    keys: number;
    chests: number;
    rune: string;
    '1v1': ArenaBrawlMode;
    '2v2': ArenaBrawlMode;
    '4v4': ArenaBrawlMode;
  }
  class Paintball {
    constructor(data: Record<string, unknown>);
    coins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    shotsFired: number;
    killstreaks: number;
    forceFieldTime: number;
    hat: string;
    adrenaline: number;
    endurance: number;
    fortune: number;
    godfather: number;
    superluck: number;
    transfusion: number;
  }
  class QuakecraftMode {
    constructor(data: Record<string, unknown>);
    wins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    killstreaks: number;
    distanceTravelled: number;
    shotsFired: number;
    headshots: number;
  }
  class Quakecraft {
    constructor(data: Record<string, unknown>);
    coins: number;
    solo: QuakecraftMode;
    teams: QuakecraftMode;
    wins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    killstreaks: number;
    distanceTravelled: number;
    shotsFired: number;
    headshots: number;
    instantRespawn: boolean;
    killPrefixColor: string;
    showPrefix: boolean;
    killSound: string;
    barrel: string;
    case: string;
    muzzle: string;
    sight: string;
    trigger: string;
  }
  class TurboKartRacersMap {
    constructor(data: Record<string, unknown>, mapName: string);
    map: string;
    plays: number;
    boxPickups: number;
    bronzeTrophies: number;
    silverTrophies: number;
    goldTrophies: number;
  }
  class TurboKartRacers {
    constructor(data: Record<string, unknown>);
    coins: number;
    wins: number;
    completedLaps: number;
    bronzeTrophies: number;
    silverTrophies: number;
    goldTrophies: number;
    boxPickups: number;
    horn:
      | 'DEFAULT'
      | 'SHY'
      | 'ALIEN'
      | 'TAXI'
      | 'KLAXON'
      | 'TRICYCLE'
      | 'ALARM'
      | 'KLOON'
      | 'TEDDY'
      | 'TRUCK'
      | 'JERRY';
    retro: TurboKartRacersMap;
    hypixelgp: TurboKartRacersMap;
    olympus: TurboKartRacersMap;
    junglerush: TurboKartRacersMap;
    canyon: TurboKartRacersMap;
    bananaHitsReceived: number;
    bananaHitsSent: number;
    blueTorpedoHit: number;
    grandPrix: boolean;
    grandPrixTokens: number;
  }
  class Walls {
    constructor(data: Record<string, unknown>);
    coins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    assists: number;
  }
  class WarlordsClass {
    constructor(data: Record<string, unknown>, className: string);
    wins: number;
    losses: number;
    WLRatio: number;
    gamesPlayed: number;
    damage: number;
    heal: number;
    damagePrevented: number;
  }
  class Warlords {
    constructor(data: Record<string, unknown>);
    coins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    winstreak: number;
    assists: number;
    class: string;
    pyromancer: WarlordsClass;
    mage: WarlordsClass;
    thunderlord: WarlordsClass;
    shaman: WarlordsClass;
    earthwarden: WarlordsClass;
    aquamancer: WarlordsClass;
    paladin: WarlordsClass;
    avenger: WarlordsClass;
    warrior: WarlordsClass;
    defender: WarlordsClass;
    cryomancer: WarlordsClass;
    crusader: WarlordsClass;
    berserker: WarlordsClass;
    protector: WarlordsClass;
    revenant: WarlordsClass;
    spiritguard: WarlordsClass;
  }
  class BlitzSGKit {
    constructor(data: Record<string, unknown>, kitName: string);
    level: number;
    exp: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    gamesPlayed: number;
    losses: number;
    WLRatio: number;
    arrowsShot: number;
    arrowsHit: number;
    bowAccuracy: number;
    damage: number;
    damageTaken: number;
    potionsDrunk: number;
    potionsThrown: number;
    playTime: number;
    mobsSpawned: number;
    chestsOpened: number;
  }
  class BlitzSurvivalGames {
    constructor(data: Record<string, unknown>);
    coins: number;
    kills: number;
    kit: string;
    killsSolo: number;
    killsTeams: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    winsSolo: number;
    winsTeam: number;
    gamesPlayed: number;
    losses: number;
    WLRatio: number;
    arrowsShot: number;
    arrowsHit: number;
    bowAccuracy: number;
    damage: number;
    damageTaken: number;
    potionsDrunk: number;
    potionsThrown: number;
    mobsSpawned: number;
    playTime: number;
    blitzUses: number;
    chestsOpened: number;
    archer: BlitzSGKit;
    meatmaster: BlitzSGKit;
    speleologist: BlitzSGKit;
    baker: BlitzSGKit;
    knight: BlitzSGKit;
    guardian: BlitzSGKit;
    scout: BlitzSGKit;
    hunter: BlitzSGKit;
    hypeTrain: BlitzSGKit;
    fisherman: BlitzSGKit;
    armorer: BlitzSGKit;
    horsetamer: BlitzSGKit;
    astronaut: BlitzSGKit;
    troll: BlitzSGKit;
    reaper: BlitzSGKit;
    shark: BlitzSGKit;
    reddragon: BlitzSGKit;
    toxicologist: BlitzSGKit;
    rogue: BlitzSGKit;
    warlock: BlitzSGKit;
    slimeyslime: BlitzSGKit;
    jockey: BlitzSGKit;
    golem: BlitzSGKit;
    viking: BlitzSGKit;
    shadowKnight: BlitzSGKit;
    pigman: BlitzSGKit;
    paladin: BlitzSGKit;
    necromancer: BlitzSGKit;
    florist: BlitzSGKit;
    diver: BlitzSGKit;
    arachnologist: BlitzSGKit;
    blaze: BlitzSGKit;
    wolftamer: BlitzSGKit;
    tim: BlitzSGKit;
    farmer: BlitzSGKit;
    creepertamer: BlitzSGKit;
    snowman: BlitzSGKit;
  }
  class VampireZRole {
    constructor(data: Record<string, unknown>, role: string);
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
  }
  class VampireZ {
    constructor(data: Record<string, unknown>);
    coins: number;
    goldBought: number;
    blood: boolean;
    zombieKills: number;
    human: VampireZRole;
    vampire: VampireZRole;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
  }
  class SmashHeroesMode {
    constructor(data: Record<string, unknown>, mode: string);
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
  }
  class SmashHeoresHero {
    constructor(data: Record<string, unknown>, hero: string);
    name: string;
    level: number;
    xp: number;
    prestige: number;
    playedGames: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
  }
  class SmashHeroes {
    constructor(data: Record<string, unknown>);
    coins: number;
    level: number;
    winstreak: number;
    playedGames: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    smashed: number;
    '1v1v1v1': SmashHeroesMode;
    '2v2': SmashHeroesMode;
    '2v2v2': SmashHeroesMode;
    activeClass: string;
    theBulk: SmashHeoresHero;
    cakeMonster: SmashHeoresHero;
    generalCluck: SmashHeoresHero;
    botmun: SmashHeoresHero;
    marauder: SmashHeoresHero;
    pug: SmashHeoresHero;
    tinman: SmashHeoresHero;
    spoderman: SmashHeoresHero;
    frosty: SmashHeoresHero;
    sergeantShield: SmashHeoresHero;
    skullfire: SmashHeoresHero;
    goku: SmashHeoresHero;
    sanic: SmashHeoresHero;
    duskCrawler: SmashHeoresHero;
    shoopDaWhoop: SmashHeoresHero;
    greenHood: SmashHeoresHero;
  }
  class SkyblockNews {
    constructor(data: Record<string, unknown>);
    title: string;
    link: string;
    rawDate: string;
    date: Date;
    version: string | null;
  }
  class TNTGames {
    constructor(data: Record<string, unknown>);
    coins: number;
    winstreak: number;
    wins: number;
    tntrun: {
      wins: number;
      deaths: number;
      record: number;
    };
    pvprun: {
      kills: number;
      wins: number;
      deaths: number;
      KDRatio: number;
      record: number;
    };
    tnttag: {
      kills: number;
      wins: number;
      speed: number;
    };
    bowspleef: {
      wins: number;
      tags: number;
      deaths: number;
    };
    wizards: {
      points: number;
      class: string;
      kills: number;
      assists: number;
      wins: number;
      deaths: number;
      KDRatio: number;
    };
  }
  class Status {
    constructor(data: Record<string, unknown>);
    online: boolean;
    game?: Game;
    mode?: string;
    map?: string;
  }
  class Guild {
    constructor(data: Record<string, unknown>);
    id: string;
    name: string;
    description: string;
    experience: number;
    level: number;
    createdAtTimestamp: number;
    createdAt: Date;
    joinable: boolean;
    publiclyListed: boolean;
    tag: string;
    tagColor: Color;
    legacyRank: number;
    expHistory: { day: string; date: Date; exp: number; totalExp: number }[];
    achievements: {
      winners: number;
      experienceKings: number;
      onlinePlayers: number;
    };
    me?: GuildMember;
    chatMuteUntilTimestamp: number;
    chatMuteUntil: Date;
    banner: { Base: string; Patterns: [{ Pattern: string; Color: string }] };
    preferredGames: Game[];
    members: GuildMember[];
    ranks: GuildRank[];
    totalWeeklyGexp: number;
    get guildMaster(): GuildMember;
    getRanksByNewest(): GuildRank[];
    getRankByPriority(priority: number): GuildRank;
    getMemberUUIDMap(): Map<string, GuildMember>;
    toString(): string;
  }
  class BaseAuction {
    constructor(data: Record<string, unknown>);
    auctionId: string;
    auctioneerUuid: string;
    auctioneerProfile: string;
    bin: boolean;
    itemBytes: ItemBytes | null;
  }
  class Auction extends BaseAuction {
    constructor(data: Record<string, unknown>);
    coop: string[] | [];
    auctionStartTimestamp: number;
    auctionEndTimestamp: number;
    auctionStart: Date;
    auctionEnd: Date;
    item: string;
    itemLore: string;
    itemLoreRaw: string;
    rarity: string;
    startingBid: number;
    highestBid: number;
    bids: Bid[];
    claimed: boolean;
    claimedBidders: string[];
  }
  class PartialAuction extends BaseAuction {
    constructor(data: Record<string, unknown>);
    buyer: string;
    price: number;
  }
  class AuctionInfo {
    constructor(data: Record<string, unknown>);
    age: number;
    lastUpdatedAt: Date;
    lastUpdated: number;
    totalPages: number;
    page: number;
    totalAuctions: number;
    failedPages: number[];
  }
  class Bid {
    constructor(data: Record<string, unknown>);
    auctionId: string;
    profileId: string;
    amount: number;
    timestamp: number;
    at: Date;
    bidder: string;
  }
  class Product {
    constructor(data: Record<string, unknown>);
    productId: string;
    sellSummary: Order[];
    buySummary: Order[];
    status: {
      sellPrice: number;
      buyPrice: number;
      sellVolume: number;
      buyVolume: number;
      sellMovingWeek: number;
      buyMovingWeek: number;
      sellOrders: number;
      buyOrders: number;
    };
  }
  class Order {
    constructor(data: Record<string, unknown>);
    amount: number;
    pricePerUnit: number;
    totalPrice: number;
    orders: number;
  }
  class BingoData {
    constructor(data: Record<string, unknown>);
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date | null;
    id: number | null;
    goals: Bingo[] | null;
    getGoal(column: number, row: number): Bingo | undefined;
  }
  class PlayerBingo {
    constructor(data: Record<string, unknown>, bingoData: BingoData | null);
    dataPerEvent: PlayerBingoDataPerEvent[];
  }
  type PlayerBingoDataPerEvent = {
    eventId: number;
    points: number;
    enrichedGoals: boolean;
    goalsCompleted: SpecialBingoArray | string[];
  };
  type SpecialBingoArray = Bingo[] & {
    unachievedGoals: Bingo[];
  };
  class GovernmentData {
    constructor(data: Record<string, unknown>);
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date | null;
    lastElectionResults: Map<string, Candidate>;
    mayor: Candidate;
    runningYear: number;
    currentElectionResults: Map<string, Candidate> | null;
    currentElectionFor: number | null;
  }
  class Perk {
    name: string;
    description: string;
  }
  class Candidate {
    constructor(data: Record<string, unknown>, isMayor?: boolean | undefined, isMinister?: boolean | undefined);
    name: string;
    keyBenefit: string;
    perk: Perk | null;
    perks: Perk[];
    isMayor: boolean;
    isMinister: boolean;
    votesReceived: number;
    toString(): string;
  }
  class FireSale {
    constructor(data: Record<string, unknown>);
    itemId: string;
    startTimestamp: number;
    startAt: Date;
    endTimestamp: number;
    endAt: Date;
    amount: number;
    price: number;
    toString(): string;
  }
  class WatchdogStats {
    constructor(data: Record<string, unknown>);
    byWatchdogTotal: number;
    byWatchdogLastMinute: number;
    byWatchdogRollingDay: number;
    byStaffTotal: number;
    byStaffRollingDay: number;
  }
  class GuildMember {
    constructor(data: Record<string, unknown>);
    uuid: string;
    joinedAtTimestamp: number;
    joinedAt: Date;
    questParticipation: number;
    rank: string;
    weeklyExperience: number;
    mutedUntilTimestamp: number;
    mutedUntil: Date;
    expHistory: { day: string; date: Date; exp: number; totalExp: number }[];
  }
  class GuildRank {
    constructor(data: Record<string, unknown>);
    name: string;
    default: boolean;
    tag: string | null;
    createdAtTimestamp: number;
    createdAt: Date;
    priority: number;
  }
  class Booster {
    constructor(data: Record<string, unknown>);
    purchaser: string;
    amount: number;
    originalLength: number;
    remaining: number;
    activatedTimestamp: number;
    activated: Date;
    game?: Game;
    isActive: boolean;
    type: 'QUEUED' | 'STACKED' | 'ACTIVE';
    stackers: string[];
    expired: boolean;
  }
  class SkyblockProfile {
    constructor(data: Record<string, unknown>);
    profileId: string;
    profileName: string;
    members: SkyblockMember[];
    me: SkyblockMember;
    selected: boolean;
    garden?: SkyblockGarden;
  }
  class SkyblockPet {
    constructor(data: Record<string, unknown>);
    uuid: string;
    type: string;
    xp: number;
    active: boolean;
    rarity: SkyblockRarity;
    petScore: number;
    heldItem: string | null;
    candyUsed: number;
    skin: string | null;
  }
  class SkyblockGarden {
    constructor(data: Record<string, unknown>);
    level: SKYBLOCK_SKILL_DATA;
    barnSkin: string;
    unlockedPlots: string[];
    visitors: SKYBLOCK_GARDEN_VISITOR;
    cropMilestones: {
      wheat: SKYBLOCK_SKILL_DATA;
      carrot: SKYBLOCK_SKILL_DATA;
      sugarCane: SKYBLOCK_SKILL_DATA;
      potato: SKYBLOCK_SKILL_DATA;
      pumpkin: SKYBLOCK_SKILL_DATA;
      melon: SKYBLOCK_SKILL_DATA;
      cactus: SKYBLOCK_SKILL_DATA;
      cocoaBeans: SKYBLOCK_SKILL_DATA;
      mushroom: SKYBLOCK_SKILL_DATA;
      netherWart: SKYBLOCK_SKILL_DATA;
    };
    composter: SKYBLOCK_GARDEN_COMPOSTER;
    cropUpgrades: SKYBLOCK_GARDEN_CROPS;
  }
  class SkyblockMember {
    constructor(data: Record<string, unknown>);
    uuid: string;
    player: Player | null;
    museum: SkyblockMuseum | null;
    garden: SkyblockGarden | null;
    gameMode: string | null;
    selected: boolean;
    profileName: string;
    profileId: string;
    firstJoinTimestamp: number;
    firstJoinAt: Date;
    experience: number;
    level: number;
    hotm: {
      experience: SKYBLOCK_SKILL_DATA;
      ability: string;
      powder: {
        mithril: {
          spent: number;
          current: number;
          total: number;
        };
        gemstone: {
          spent: number;
          current: number;
          total: number;
        };
        glacite: {
          spent: number;
          current: number;
          total: number;
        };
      };
    };
    highestMagicalPower: number;
    fairySouls: number;
    fairyExchanges: number;
    skills: {
      combat: SKYBLOCK_SKILL_DATA;
      farming: SKYBLOCK_SKILL_DATA;
      fishing: SKYBLOCK_SKILL_DATA;
      mining: SKYBLOCK_SKILL_DATA;
      foraging: SKYBLOCK_SKILL_DATA;
      enchanting: SKYBLOCK_SKILL_DATA;
      alchemy: SKYBLOCK_SKILL_DATA;
      carpentry: SKYBLOCK_SKILL_DATA;
      runecrafting: SKYBLOCK_SKILL_DATA;
      taming: SKYBLOCK_SKILL_DATA;
      social: SKYBLOCK_SKILL_DATA;
      average: number;
    };
    bestiary: number;
    slayer: {
      zombie: SKYBLOCK_SLAYER_DATA;
      spider: SKYBLOCK_SLAYER_DATA;
      wolf: SKYBLOCK_SLAYER_DATA;
      enderman: SKYBLOCK_SLAYER_DATA;
      blaze: SKYBLOCK_SLAYER_DATA;
      vampire: SKYBLOCK_SLAYER_DATA;
    } | null;
    crimson: {
      faction: 'mages' | 'barbarians' | null;
      repuation: {
        barbarians: number;
        mages: number;
      };
      trophyFish: {
        total: number;
        bronze: number;
        silver: number;
        gold: number;
        diamond: number;
      };
      kuudra: {
        none: number;
        hot: number;
        burning: number;
        fiery: number;
        highestWaveHot: number;
        highestWaveFiery: number;
        infernal: number;
        highestWaveInfernal: number;
        highestWaveBurning: number;
      };
    };
    dungeons: {
      experience: SKYBLOCK_SKILL_DATA;
      secrets: number;
      completions: {
        catacombs: Record<string, number>;
        masterCatacombs: Record<string, number>;
      };
      floors: {
        entrance: SKYBLOCK_DUNGEONS_FLOOR;
        floor1: SKYBLOCK_DUNGEONS_FLOOR;
        floor2: SKYBLOCK_DUNGEONS_FLOOR;
        floor3: SKYBLOCK_DUNGEONS_FLOOR;
        floor4: SKYBLOCK_DUNGEONS_FLOOR;
        floor5: SKYBLOCK_DUNGEONS_FLOOR;
        floor6: SKYBLOCK_DUNGEONS_FLOOR;
        floor7: SKYBLOCK_DUNGEONS_FLOOR;
        masterCatacombs1: SKYBLOCK_DUNGEONS_FLOOR;
        masterCatacombs2: SKYBLOCK_DUNGEONS_FLOOR;
        masterCatacombs3: SKYBLOCK_DUNGEONS_FLOOR;
        masterCatacombs4: SKYBLOCK_DUNGEONS_FLOOR;
        masterCatacombs5: SKYBLOCK_DUNGEONS_FLOOR;
        masterCatacombs6: SKYBLOCK_DUNGEONS_FLOOR;
        masterCatacombs7: SKYBLOCK_DUNGEONS_FLOOR;
      };
      classes: {
        healer: SKYBLOCK_SKILL_DATA;
        mage: SKYBLOCK_SKILL_DATA;
        berserk: SKYBLOCK_SKILL_DATA;
        archer: SKYBLOCK_SKILL_DATA;
        tank: SKYBLOCK_SKILL_DATA;
        selected: string;
      };
      essence: {
        diamond: number;
        dragon: number;
        spider: number;
        wither: number;
        undead: number;
        gold: number;
        ice: number;
        crimson: number;
      };
    } | null;
    collections: object;
    purse: number;
    stats: object;
    pets: SkyblockPet[];
    jacob: {
      medals: {
        bronze: number;
        silver: number;
        gold: number;
      };
      perks: {
        doubleDrops: number;
        farmingLevelCap: number;
        personalBests: boolean;
      };
      contests: object;
    };
    chocolate: {
      employees: {
        bro: number;
        cousin: number;
        sis: number;
        father: number;
        grandma: number;
        dog: number;
        uncle: number;
      };
      chocolate: {
        current: number;
        total: number;
        sincePrestige: number;
      };
      timeTower: {
        charges: number;
        level: number;
      };
      upgrades: {
        click: number;
        multiplier: number;
        rabbitRarity: number;
      };
      goldenClick: {
        amount: number;
        year: number;
      };
      barnCapacity: number;
      prestige: number;
    };
    getArmor(): Promise<{
      helmet: SkyblockInventoryItem;
      chestplate: SkyblockInventoryItem;
      leggings: SkyblockInventoryItem;
      boots: SkyblockInventoryItem;
    }>;
    getWardrobe(): Promise<SkyblockInventoryItem[]>;
    getEnderChest(): Promise<SkyblockInventoryItem[]>;
    getInventory(): Promise<SkyblockInventoryItem[]>;
    getPetScore(): number;
    getEquipment(): Promise<{
      gauntlet: SkyblockInventoryItem;
      belt: SkyblockInventoryItem;
      cloak: SkyblockInventoryItem;
      necklace: SkyblockInventoryItem;
    }>;
    getPersonalVault(): Promise<SkyblockInventoryItem[]>;
    getNetworth(): Promise<NetworthResult>;
  }
  class Color {
    constructor(color: string);
    toCode(): string;
    toHex(): string;
    toString(): string;
    toInGameCode(): string;
  }
  class SkyblockInventoryItem {
    constructor(data: Record<string, unknown>);
    itemId: number;
    count: number;
    name: string;
    lore: string;
    loreArray: string[];
    loreForEmbed: string;
    color: string | null;
    enchantments: Record<string, unknown>;
    reforge: string;
    gemstones?: {
      type?: string;
      quality?: string;
    }[];
    damage: number;
    rarity: string;
    dungeonStars: number;
    gearScore: number;
    uuid: string;
    soulbound: boolean;
    artOfWar: number;
    rune: object;
    hotPotatoBooks: number;
    recombobulated: boolean;
    attributes: object;
    hecatomb: number;
    champion: number;
    cultivating: number;
    expertise: number;
    compact: number;
    blocksWalked: number;
    toString(): string;
  }
  class Game {
    constructor(game: string | number);
    toString(): GAME_NAME;
    code: GAME_CODE;
    id: GAME_ID;
    name: GAME_NAME;
    found: boolean;
    private game: GAME_CODE | GAME_ID | GAME_NAME;
    static IDS: GAME_ID[];
    static CODES: GAME_CODE[];
    static NAMES: GAME_NAME[];
  }
  class SkyWarsMode {
    constructor(data: Record<string, unknown>, gamemode: string);
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
  }
  class SkywarsModeStats {
    constructor(data: Record<string, unknown>, gamemode: string);
    activeKit: string;
    killstreak: number;
    kills: number;
    voidKills: number;
    meleeKills: number;
    bowKills: number;
    mobKills: number;
    assists: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    gamesPlayed: number;
    survivedPlayers: number;
    chestsOpened: number;
    timePlayed: number;
    shard: number;
    longestBowShot: number;
    arrowsShot: number;
    arrowsHit: number;
    bowAccuracy: number;
    fastestWin: number;
    heads: number;
  }
  class SkywarsMode {
    constructor(data: Record<string, unknown>, gamemode: string);
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
  }
  class SkyWars {
    constructor(data: Record<string, unknown>);
    coins: number;
    souls: number;
    tokens: number;
    experience: number;
    level: number;
    levelProgress: LevelProgress;
    levelFormatted: string;
    prestige: SKYWARS_PRESTIGE;
    prestigeIcon: SKYWARS_PRESTIGE_ICON;
    opals: number;
    avarice: number;
    tenacity: number;
    shards: number;
    angelOfDeathLevel: number;
    killstreak: number;
    kills: number;
    voidKills: number;
    meleeKills: number;
    bowKills: number;
    mobKills: number;
    assists: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    gamesPlayed: number;
    survivedPlayers: number;
    chestsOpened: number;
    timePlayed: number;
    shard: number;
    longestBowShot: number;
    arrowsShot: number;
    arrowsHit: number;
    bowAccuracy: number;
    fastestWin: number;
    heads: number;
    blocksPlaced: number;
    blocksBroken: number;
    eggThrown: number;
    enderpearlsThrown: number;
    solo: SkywarsModeStats;
    soloNormal: SkywarsMode;
    soloInsane: SkywarsMode;
    team: SkywarsModeStats;
    teamNormal: SkywarsMode;
    mega: SkywarsMode;
    megaDoubles: SkywarsMode;
    lab: SkywarsMode;
    packages: SkywarsPackages;
  }
  class SkywarsPackages {
    constructor(data: string[]);
    rawPackages: string[];
    cages: string[];
    kits: SkywarsKits;
  }
  class SkywarsKits {
    constructor(kits: Record<string, unknown>);
    kits: SkywarsKit[];
    get(gameMode: SKYWARS_KIT_GAMEMODE, type: SKYWARS_KIT_TYPE): SkywarsKit[];
  }
  class SkywarsKit {
    constructor(kit: string);
    private _kitData: string[] | null;
    isKit: boolean;
    gameMode?: SKYWARS_KIT_GAMEMODE;
    kitType?: SKYWARS_KIT_TYPE;
    kitName?: string;
  }
  class CopsAndCrims {
    constructor(data: Record<string, unknown>);
    coins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    roundWins: number;
    shotsFired: number;
    headshotKills: number;
    bombsDefused: number;
    bombsPlanted: number;
    killsAsCrim: number;
    killsAsCop: number;
    deathmatch: {
      kills: number;
      deaths: number;
      KDRatio: number;
      killsAsCrim: number;
      killsAsCop: number;
    };
  }
  class BedWars {
    constructor(data: Record<string, unknown>);
    tokens: number;
    level: number;
    experience: number;
    prestige: BEDWARS_PRESTIGE;
    playedGames: number;
    wins: number;
    winstreak: number;
    kills: number;
    finalKills: number;
    losses: number;
    deaths: number;
    finalDeaths: number;
    collectedItemsTotal: {
      iron: number;
      gold: number;
      diamond: number;
      emerald: number;
    };
    beds: {
      lost: number;
      broken: number;
      BLRatio: number;
    };
    avg: {
      finalKills: number;
      kills: number;
      bedsBroken: number;
    };
    KDRatio: number;
    finalKDRatio: number;
    WLRatio: number;
    solo: {
      winstreak: number;
      playedGames: number;
      kills: number;
      deaths: number;
      wins: number;
      losses: number;
      finalKills: number;
      finalDeaths: number;
      beds: {
        broken: number;
        lost: number;
        BLRatio: number;
      };
      avg: {
        kills: number;
        finalKills: number;
        bedsBroken: number;
      };
      KDRatio: number;
      WLRatio: number;
      finalKDRatio: number;
    };
    doubles: {
      winstreak: number;
      playedGames: number;
      kills: number;
      deaths: number;
      wins: number;
      losses: number;
      finalKills: number;
      finalDeaths: number;
      beds: {
        broken: number;
        lost: number;
        BLRatio: number;
      };
      avg: {
        kills: number;
        finalKills: number;
        bedsBroken: number;
      };
      KDRatio: number;
      WLRatio: number;
      finalKDRatio: number;
    };
    threes: {
      winstreak: number;
      playedGames: number;
      kills: number;
      deaths: number;
      wins: number;
      losses: number;
      finalKills: number;
      finalDeaths: number;
      beds: {
        broken: number;
        lost: number;
        BLRatio: number;
      };
      avg: {
        kills: number;
        finalKills: number;
        bedsBroken: number;
      };
      KDRatio: number;
      WLRatio: number;
      finalKDRatio: number;
    };
    fours: {
      winstreak: number;
      playedGames: number;
      kills: number;
      deaths: number;
      wins: number;
      losses: number;
      finalKills: number;
      finalDeaths: number;
      beds: {
        broken: number;
        lost: number;
        BLRatio: number;
      };
      avg: {
        kills: number;
        finalKills: number;
        bedsBroken: number;
      };
      KDRatio: number;
      WLRatio: number;
      finalKDRatio: number;
    };
    '4v4': {
      winstreak: number;
      playedGames: number;
      kills: number;
      deaths: number;
      wins: number;
      losses: number;
      finalKills: number;
      finalDeaths: number;
      beds: {
        broken: number;
        lost: number;
        BLRatio: number;
      };
      avg: {
        kills: number;
        finalKills: number;
        bedsBroken: number;
      };
      KDRatio: number;
      WLRatio: number;
      finalKDRatio: number;
    };
    dream: {
      ultimate: {
        doubles: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
        fours: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
      };
      rush: {
        doubles: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
        fours: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
      };
      armed: {
        doubles: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
        fours: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
      };
      lucky: {
        doubles: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
        fours: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
      };
      voidless: {
        doubles: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
        fours: {
          winstreak: number;
          playedGames: number;
          kills: number;
          deaths: number;
          wins: number;
          losses: number;
          finalKills: number;
          finalDeaths: number;
          beds: {
            broken: number;
            lost: number;
            BLRatio: number;
          };
          avg: {
            kills: number;
            finalKills: number;
            bedsBroken: number;
          };
          KDRatio: number;
          WLRatio: number;
          finalKDRatio: number;
        };
      };
    };
    castle: {
      winstreak: number;
      playedGames: number;
      kills: number;
      deaths: number;
      wins: number;
      losses: number;
      finalKills: number;
      finalDeaths: number;
      beds: {
        broken: number;
        lost: number;
        BLRatio: number;
      };
      avg: {
        kills: number;
        finalKills: number;
        bedsBroken: number;
      };
    };
    practice: {
      selected: string;
      bridging: {
        blocksPlaced: number;
        attempts: {
          failed: number;
          successful: number;
          total: number;
        };
        records: {
          '30Blocks': {
            elevation: {
              none: {
                straight: number;
                diagonal: number;
              };
              slight: {
                straight: number;
                diagonal: number;
              };
              staircase: {
                straight: number;
                diagonal: number;
              };
            };
          };
          '50Blocks': {
            elevation: {
              none: {
                straight: number;
                diagonal: number;
              };
              slight: {
                straight: number;
                diagonal: number;
              };
              staircase: {
                straight: number;
                diagonal: number;
              };
            };
          };
          '100Blocks': {
            elevation: {
              none: {
                straight: number;
                diagonal: number;
              };
              slight: {
                straight: number;
                diagonal: number;
              };
              staircase: {
                straight: number;
                diagonal: number;
              };
            };
          };
        };
      };
      fireballJumping: {
        blocksPlaced: number;
        attempts: {
          failed: number;
          successful: number;
          total: number;
        };
      };
      pearlClutching: {
        attempts: {
          failed: number;
          successful: number;
          total: number;
        };
      };
      mlg: {
        blocksPlaced: number;
        attempts: {
          failed: number;
          successful: number;
          total: number;
        };
      };
    };
    slumberTickets: number;
    totalSlumberTickets: number;
  }

  class UHCGamemode {
    constructor(data: Record<string, unknown>, mode: string);
    kills: number;
    deaths: number;
    wins: number;
    headsEaten: number;
    ultimatesCrafted: number;
    extraUltimatesCrafted: number;
  }
  class UHC {
    constructor(data: Record<string, unknown>);
    coins: number;
    score: number;
    kit: string;
    solo: UHCGamemode;
    team: UHCGamemode;
    redVsBlue: UHCGamemode;
    noDiamond: UHCGamemode;
    brawl: UHCGamemode;
    soloBrawl: UHCGamemode;
    duoBrawl: UHCGamemode;
    wins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    headsEaten: number;
    ultimatesCrafted: number;
    extraUltimatesCrafted: number;
    starLevel: number;
  }
  class SpeedUHCMode {
    constructor(data: Record<string, unknown>, mode: string);
    kills: number;
    deaths: number;
    wins: number;
    losses: number;
    playedGames: number;
    winstreak: number;
    killStreak: number;
    assists: number;
  }
  class SpeedUHC {
    constructor(data: Record<string, unknown>);
    coins: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    playedGames: number;
    winstreak: number;
    killstreak: number;
    blocksBroken: number;
    blocksPlaced: number;
    quits: number;
    itemsEnchanted: number;
    assists: number;
    solo: SpeedUHCMode;
    soloNormal: SpeedUHCMode;
    soloInsane: SpeedUHCMode;
    team: SpeedUHCMode;
    teamNormal: SpeedUHCMode;
    teamInsane: SpeedUHCMode;
  }
  class MurderMysteryModeStats {
    constructor(data: Record<string, unknown>, gamemode: string);
    goldPickedUp: number;
    kills: number;
    thrownKnifeKills: number;
    knifeKills: number;
    bowKills: number;
    trapKills: number;
    deaths: number;
    suicides: number;
    KDRatio: number;
    wins: number;
    winsAsDetective: number;
    winsAsMurderer: number;
    winsAsHero: number;
    playedGames: number;
  }
  class MurderMystery {
    constructor(data: Record<string, unknown>);
    tokens: number;
    goldPickedUp: number;
    playedGames: number;
    kills: number;
    thrownKnifeKills: number;
    knifeKills: number;
    trapKills: number;
    bowKills: number;
    killsAsMurderer: number;
    deaths: number;
    KDRatio: number;
    winsAsMurderer: number;
    winsAsDetective: number;
    winsAsHero: number;
    fastestWinAsMurderer: number;
    fastestWinAsDetective: number;
    totalTimeSurvived: number;
    wins: number;
    suicides: number;
    classic: MurderMysteryModeStats;
    assassins: MurderMysteryModeStats;
    doubleUp: MurderMysteryModeStats;
    infection: MurderMysteryModeStats;
  }
  class DuelsGamemode {
    constructor(data: Record<string, unknown>, mode: string, title: string);
    title: string;
    winstreak: number;
    bestWinstreak: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    playedGames: number;
    swings: number;
    hits: number;
    meleeAccuracy: number;
    bowShots: number;
    bowHits: number;
    bowAccuracy: number;
    blocksPlaced: number;
    healthRegenerated: number;
    goldenApplesEatan: number;
    goals: number;
  }
  class DuelsUHC {
    constructor(data: Record<string, unknown>, mode: string, title: string);
    title: string;
    winstreak: number;
    bestWinstreak: number;
    solo: DuelsGamemode;
    doubles: DuelsGamemode;
    fours: DuelsGamemode;
    deathmatch: DuelsGamemode;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    playedGames: number;
    swings: number;
    hits: number;
    meleeAccuracy: number;
    bowShots: number;
    bowHits: number;
    bowAccuracy: number;
    blocksPlaced: number;
    healthRegenerated: number;
    goldenApplesEatan: number;
  }
  class DuelsSkyWars {
    constructor(data: Record<string, unknown>, mode: string, title: string);
    title: string;
    winstreak: number;
    bestWinstreak: number;
    solo: DuelsGamemode;
    doubles: DuelsGamemode;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    playedGames: number;
    swings: number;
    hits: number;
    meleeAccuracy: number;
    bowShots: number;
    bowHits: number;
    bowAccuracy: number;
    blocksPlaced: number;
    healthRegenerated: number;
    goldenApplesEatan: number;
  }
  class DuelsMegaWalls {
    constructor(data: Record<string, unknown>, mode: string, title: string);
    title: string;
    winstreak: number;
    bestWinstreak: number;
    solo: DuelsGamemode;
    doubles: DuelsGamemode;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    playedGames: number;
    swings: number;
    hits: number;
    meleeAccuracy: number;
    bowShots: number;
    bowHits: number;
    bowAccuracy: number;
    blocksPlaced: number;
    healthRegenerated: number;
    goldenApplesEatan: number;
  }
  class DuelsOP {
    constructor(data: Record<string, unknown>, mode: string, title: string);
    title: string;
    winstreak: number;
    bestWinstreak: number;
    solo: DuelsGamemode;
    doubles: DuelsGamemode;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    playedGames: number;
    swings: number;
    hits: number;
    meleeAccuracy: number;
    bowShots: number;
    bowHits: number;
    bowAccuracy: number;
    blocksPlaced: number;
    healthRegenerated: number;
    goldenApplesEatan: number;
  }
  class DuelsBridge {
    constructor(data: Record<string, unknown>, mode: string, title: string);
    title: string;
    winstreak: number;
    bestWinstreak: number;
    solo: DuelsGamemode;
    doubles: DuelsGamemode;
    threes: DuelsGamemode;
    fours: DuelsGamemode;
    '2v2v2v2': DuelsGamemode;
    '3v3v3v3': DuelsGamemode;
    ctf: DuelsGamemode;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    playedGames: number;
    swings: number;
    hits: number;
    meleeAccuracy: number;
    bowShots: number;
    bowHits: number;
    bowAccuracy: number;
    blocksPlaced: number;
    healthRegenerated: number;
    goldenApplesEatan: number;
    goals: number;
  }
  class Duels {
    constructor(data: Record<string, unknown>);
    tokens: number;
    title: string | null;
    kills: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    playedGames: number;
    winstreak: number;
    bestWinstreak: number;
    ping: number;
    blocksPlaced: number;
    swings: number;
    hits: number;
    meleeAccuracy: number;
    bowShots: number;
    bowHits: number;
    bowAccuracy: number;
    healthRegenerated: number;
    goldenApplesEatan: number;
    uhc: DuelsUHC;
    skywars: DuelsSkyWars;
    megawalls: DuelsMegaWalls;
    blitz: DuelsGamemode;
    op: DuelsOP;
    classic: DuelsGamemode;
    bow: DuelsGamemode;
    noDebuff: DuelsGamemode;
    combo: DuelsGamemode;
    bowSpleef: DuelsGamemode;
    sumo: DuelsGamemode;
    bridge: DuelsBridge;
    parkour: DuelsGamemode;
    arena: DuelsGamemode;
  }
  class BuildBattle {
    constructor(data: Record<string, unknown>);
    score: number;
    totalWins: number;
    games: number;
    WLRatio: number;
    superVotes: number;
    coins: number;
    totalVotes: number;
    wins: {
      solo: number;
      teams: number;
      pro: number;
      gtb: number;
    };
  }
  class RecentGame extends Game {
    constructor(data: Record<string, unknown>);
    dateTimestamp?: number;
    date?: Date;
    mode?: string;
    map?: string;
    ongoing?: boolean;
    endedAt?: Date;
    endedTimestamp?: number;
  }
  class MegaWallsModeStats {
    constructor(data: Record<string, unknown>, mode: string, kit?: string);
    kills: number;
    assists: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    finalKills: number;
    finalAssists: number;
    finalDeaths: number;
    finalKDRatio: number;
    playedGames: number;
    witherDamage: number;
    defenderKills: number;
    walked: number;
    blocksPlaced: number;
    blocksBroken: number;
    meleeKills: number;
    damageDealt: number;
  }
  class MegaWallsKitStats {
    constructor(data: Record<string, unknown>, kit: string);
    kills: number;
    assists: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    finalKills: number;
    finalAssists: number;
    finalDeaths: number;
    finalKDRatio: number;
    playedGames: number;
    witherDamage: number;
    defenderKills: number;
    walked: number;
    blocksPlaced: number;
    blocksBroken: number;
    meleeKills: number;
    damageDealt: number;
    faceOff: MegaWallsModeStats;
    casualBrawl: MegaWallsModeStats;
  }
  class MegaWalls {
    constructor(data: Record<string, unknown>);
    selectedClass: string | null;
    coins: number;
    kills: number;
    assists: number;
    deaths: number;
    KDRatio: number;
    wins: number;
    losses: number;
    WLRatio: number;
    finalKills: number;
    finalAssists: number;
    finalDeaths: number;
    finalKDRatio: number;
    playedGames: number;
    witherDamage: number;
    defenderKills: number;
    walked: number;
    blocksPlaced: number;
    blocksBroken: number;
    meleeKills: number;
    damageDealt: number;
    faceOff: MegaWallsModeStats;
    casualBrawl: MegaWallsModeStats;
    cow: MegaWallsKitStats;
    hunter: MegaWallsKitStats;
    shark: MegaWallsKitStats;
    arcanist: MegaWallsKitStats;
    deadlord: MegaWallsKitStats;
    golem: MegaWallsKitStats;
    herobrine: MegaWallsKitStats;
    pigman: MegaWallsKitStats;
    zombie: MegaWallsKitStats;
    blaze: MegaWallsKitStats;
    enderman: MegaWallsKitStats;
    shaman: MegaWallsKitStats;
    squid: MegaWallsKitStats;
    creeper: MegaWallsKitStats;
    pirate: MegaWallsKitStats;
    sheep: MegaWallsKitStats;
    skeleton: MegaWallsKitStats;
    spider: MegaWallsKitStats;
    werewolf: MegaWallsKitStats;
    angel: MegaWallsKitStats;
    assassin: MegaWallsKitStats;
    automaton: MegaWallsKitStats;
    moleman: MegaWallsKitStats;
    phoenix: MegaWallsKitStats;
    renegade: MegaWallsKitStats;
    snowman: MegaWallsKitStats;
  }
  class APIStatus {
    constructor(data: Record<string, unknown>);
    sourceUrl: string;
    title: string;
    description: string;
    incidents: APIIncident[];
    currentIncidents: APIIncident[];
  }
  class APIIncident {
    constructor(data: Record<string, unknown>);
    link: string;
    start: Date;
    startFormatted: string;
    startTimestamp: number;
    author: string;
    HTMLContent: string;
    snippet: string;
    guid: string;
    categories: string[];
    isResolved: boolean;
  }
  class ItemBytes {
    constructor(data: Record<string, unknown>);
    bytesBuffer: Buffer;
    base64(): string;
    /**
     * @description Reads the bytes as a NBT tag
     */
    readNBT(): Promise<any[]>;
  }
  class ServerInfo {
    constructor(data: Record<string, unknown>, ping: number);
    protocolUsed: number;
    versionInfo: string;
    players: {
      max: number;
      online: number;
      players: string[];
    };
    rawMOTD: string;
    cleanMOTD: string;
    textMOTD: string;
    faviconB64: string;
    favicon: Buffer;
    ping: number;
  }

  class Achievements {
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    achievementsPerGame: {
      arcade: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      arena: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      bedwars: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      blitz: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      buildbattle: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      christmas2017: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      copsandcrims: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      duels: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      easter: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      general: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      gingerbread: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      halloween2017: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      housing: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      murdermystery: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      paintball: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      pit: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      quake: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      skyblock: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      skyclash: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      skywars: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      speeduhc: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      summer: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      supersmash: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      tntgames: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      truecombat: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      uhc: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      vampirez: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      walls: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      walls3: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      warlords: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
      woolgames: {
        category: string;
        totalPoints: number;
        totalLegacyPoints: number;
        achievements: Achievement[];
      };
    };
  }
  class Achievement {
    constructor(data: Record<string, unknown>);
    name: string;
    codeName: string;
    description: string;
    type: ACHIEVEMENT_TYPE;
    rarity: {
      local?: number;
      localPercentage?: number;
      global?: number;
      globalPercentage?: number;
    };
    tierInformation?: AchievementTier;
    points: number;
    totalAmountRequired?: number;
    toString(): string;
  }
  class AchievementTier {
    constructor(data: Record<string, unknown>);
    maxTier: number;
    getTier(tier: number): {
      pointsRewarded?: number;
      amountRequired?: number;
    };
  }
  class Challenges {
    constructor(data: Record<string, unknown>);
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    challengesPerGame: Record<GAME_STATIC, GameChallenges>;
  }
  class GameAchievement {
    constructor(data: Record<string, unknown>);
    category: GAME_STATIC;
    totalPoints: number;
    totalLegacyPoints: number;
    achievements: Achievement[];
  }
  class GameChallenges {
    constructor(data: Record<string, unknown>);
    category: GAME_STATIC;
    challenges: Map<string, ChallengeData>;
  }
  class GameQuests {
    constructor(data: Record<string, unknown>);
    game: GAME_STATIC;
    quests: Quest[];
  }
  class GuildAchievements {
    constructor(data: Record<string, unknown>);
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    achievements: Record<string, Achievement>;
  }
  class Quest {
    constructor(data: Record<string, unknown>);
    questName: string;
    questID: string;
    description: string;
    type: QUEST_TYPE;
    objectives: Objective[];
    rewards: QuestReward[];
    toString(): string;
  }
  class Quests {
    constructor(data: Record<string, unknown>);
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    questsPerGame: Record<GAME_STATIC, GameQuests>;
  }
  class Bingo {
    constructor(data: Record<string, unknown>);
    name: string;
    id: string;
    row?: number;
    column?: number;
    rawLore: string;
    lore: string;
    tiers: number[];
    type: BINGO_TYPE;
    tierStep?: number;
    requiredAmount?: number;
    toString(): string;
  }
  class House {
    constructor(data: Record<string, unknown>);
    name: string;
    uuid: string;
    owner: string;
    createdAtTimestamp: number;
    createdAt: Date;
    players: number;
    cookies: number;
    toString(): string;
  }
}
