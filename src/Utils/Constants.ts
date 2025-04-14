import type {
  BestiaryMobsData,
  CustomPetLevelingData,
  MiningForgeItemsData,
  Rarity,
  SkyBlockSlayer,
  SkyBlockXPTables
} from '../Types/SkyBlock.js';
import type { DuelsBaseDivision } from '../Types/Player.js';
import type { GameCode, GameID, GameString } from '../Types/Game.js';

export const games: { id: GameID; code: GameCode; name: GameString }[] = [
  { id: 2, code: 'QUAKECRAFT', name: 'Quake' },
  { id: 3, code: 'WALLS', name: 'Walls' },
  { id: 4, code: 'PAINTBALL', name: 'Paintball' },
  { id: 5, code: 'SURVIVAL_GAMES', name: 'Blitz Survival Games' },
  { id: 6, code: 'TNTGAMES', name: 'TNT Games' },
  { id: 7, code: 'VAMPIREZ', name: 'VampireZ' },
  { id: 13, code: 'WALLS3', name: 'Mega Walls' },
  { id: 14, code: 'ARCADE', name: 'Arcade' },
  { id: 17, code: 'ARENA', name: 'Arena' },
  { id: 20, code: 'UHC', name: 'UHC Champions' },
  { id: 21, code: 'MCGO', name: 'Cops and Crims' },
  { id: 23, code: 'BATTLEGROUND', name: 'Warlords' },
  { id: 24, code: 'SUPER_SMASH', name: 'Smash Heroes' },
  { id: 25, code: 'GINGERBREAD', name: 'Turbo Kart Racers' },
  { id: 26, code: 'HOUSING', name: 'Housing' },
  { id: 51, code: 'SKYWARS', name: 'SkyWars' },
  { id: 52, code: 'TRUE_COMBAT', name: 'Crazy Walls' },
  { id: 54, code: 'SPEED_UHC', name: 'Speed UHC' },
  { id: 55, code: 'SKYCLASH', name: 'SkyClash' },
  { id: 56, code: 'LEGACY', name: 'Classic Games' },
  { id: 57, code: 'PROTOTYPE', name: 'Prototype' },
  { id: 58, code: 'BEDWARS', name: 'Bed Wars' },
  { id: 59, code: 'MURDER_MYSTERY', name: 'Murder Mystery' },
  { id: 60, code: 'BUILD_BATTLE', name: 'Build Battle' },
  { id: 61, code: 'DUELS', name: 'Duels' },
  { id: 63, code: 'SKYBLOCK', name: 'SkyBlock' },
  { id: 64, code: 'PIT', name: 'Pit' },
  { id: 65, code: 'REPLAY', name: 'Replay' },
  { id: 67, code: 'SMP', name: 'SMP' },
  { id: 68, code: 'WOOL_GAMES', name: 'Wool Wars' }
];

export const duelsDivisions: { name: DuelsBaseDivision; key: string }[] = [
  { name: 'Rookie', key: 'rookie' },
  { name: 'Iron', key: 'iron' },
  { name: 'Gold', key: 'gold' },
  { name: 'Diamond', key: 'diamond' },
  { name: 'Master', key: 'master' },
  { name: 'Legend', key: 'legend' },
  { name: 'Grandmaster', key: 'grandmaster' },
  { name: 'Godlike', key: 'godlike' },
  { name: 'Celestial', key: 'celestial' },
  { name: 'Divine', key: 'divine' },
  { name: 'Ascended', key: 'ascended' }
];

export const MiniGamesString: { [key: string]: string } = {
  QUAKECRAFT: 'Quakecraft',
  WALLS: 'Walls',
  PAINTBALL: 'Paintball',
  SURVIVAL_GAMES: 'Blitz Survival Games',
  TNTGAMES: 'The TNT Games',
  VAMPIREZ: 'VampireZ',
  WALLS3: 'Mega Walls',
  ARCADE: 'Arcade',
  ARENA: 'Arena Brawl',
  MCGO: 'Cops and Crims',
  UHC: 'UHC Champions',
  BATTLEGROUND: 'Warlords',
  SUPER_SMASH: 'Smash Heroes',
  GINGERBREAD: 'Turbo Kart Racers',
  HOUSING: 'Housing',
  SKYWARS: 'SkyWars',
  TRUE_COMBAT: 'Crazy Walls',
  SPEED_UHC: 'Speed UHC',
  SKYCLASH: 'SkyClash',
  LEGACY: 'Classic Games',
  PROTOTYPE: 'Prototype',
  BEDWARS: 'BedWars',
  MURDER_MYSTERY: 'Murder Mystery',
  BUILD_BATTLE: 'Build Battle',
  DUELS: 'Duels',
  PIT: 'The Pit',
  SKYBLOCK: 'SkyBlock',
  REPLAY: 'Replay',
  LIMBO: 'Limbo',
  IDLE: 'Idle',
  QUEUE: 'Queue',
  MAIN_LOBBY: 'Main Lobby',
  TOURNAMENT_LOBBY: 'Tournament Lobby',
  WOOL_GAMES: 'Wool Wars'
};

// Credits (pit) https://github.com/PitPanda/PitPandaProduction/blob/b1971f56ea1aa8c829b722cbb33247c96591c0cb/structures/Pit.js
interface PitPrestigeData {
  Multiplier: number;
  TotalXp: number;
  SumXp: number;
  GoldReq: number;
  Renown: number;
}
interface PitLevelData {
  Xp: number;
}

export const pit: { Prestiges: PitPrestigeData[]; Levels: PitLevelData[] } = {
  Prestiges: [
    { Multiplier: 1, TotalXp: 65950, SumXp: 65950, GoldReq: 10000, Renown: 0 },
    { Multiplier: 1.1, TotalXp: 72560, SumXp: 138510, GoldReq: 20000, Renown: 10 },
    { Multiplier: 1.2, TotalXp: 79170, SumXp: 217680, GoldReq: 20000, Renown: 10 },
    { Multiplier: 1.3, TotalXp: 85750, SumXp: 303430, GoldReq: 20000, Renown: 10 },
    { Multiplier: 1.4, TotalXp: 92330, SumXp: 395760, GoldReq: 30000, Renown: 10 },
    { Multiplier: 1.5, TotalXp: 98940, SumXp: 494700, GoldReq: 35000, Renown: 10 },
    { Multiplier: 1.75, TotalXp: 115440, SumXp: 610140, GoldReq: 40000, Renown: 20 },
    { Multiplier: 2, TotalXp: 131900, SumXp: 742040, GoldReq: 45000, Renown: 20 },
    { Multiplier: 2.5, TotalXp: 164890, SumXp: 906930, GoldReq: 50000, Renown: 20 },
    { Multiplier: 3, TotalXp: 197850, SumXp: 1104780, GoldReq: 60000, Renown: 20 },
    { Multiplier: 4, TotalXp: 263800, SumXp: 1368580, GoldReq: 70000, Renown: 20 },
    { Multiplier: 5, TotalXp: 329750, SumXp: 1698330, GoldReq: 80000, Renown: 30 },
    { Multiplier: 6, TotalXp: 395700, SumXp: 2094030, GoldReq: 90000, Renown: 30 },
    { Multiplier: 7, TotalXp: 461650, SumXp: 2555680, GoldReq: 100000, Renown: 30 },
    { Multiplier: 8, TotalXp: 527600, SumXp: 3083280, GoldReq: 125000, Renown: 30 },
    { Multiplier: 9, TotalXp: 593550, SumXp: 3676830, GoldReq: 150000, Renown: 30 },
    { Multiplier: 10, TotalXp: 659500, SumXp: 4336330, GoldReq: 175000, Renown: 40 },
    { Multiplier: 12, TotalXp: 791400, SumXp: 5127730, GoldReq: 200000, Renown: 40 },
    { Multiplier: 14, TotalXp: 923300, SumXp: 6051030, GoldReq: 250000, Renown: 40 },
    { Multiplier: 16, TotalXp: 1055200, SumXp: 7106230, GoldReq: 300000, Renown: 40 },
    { Multiplier: 18, TotalXp: 1187100, SumXp: 8293330, GoldReq: 350000, Renown: 40 },
    { Multiplier: 20, TotalXp: 1319000, SumXp: 9612330, GoldReq: 400000, Renown: 50 },
    { Multiplier: 24, TotalXp: 1582800, SumXp: 11195130, GoldReq: 500000, Renown: 50 },
    { Multiplier: 28, TotalXp: 1846600, SumXp: 13041730, GoldReq: 600000, Renown: 50 },
    { Multiplier: 32, TotalXp: 2110400, SumXp: 15152130, GoldReq: 700000, Renown: 50 },
    { Multiplier: 36, TotalXp: 2374200, SumXp: 17526330, GoldReq: 800000, Renown: 50 },
    { Multiplier: 40, TotalXp: 2638000, SumXp: 20164330, GoldReq: 900000, Renown: 75 },
    { Multiplier: 45, TotalXp: 2967750, SumXp: 23132080, GoldReq: 1000000, Renown: 75 },
    { Multiplier: 50, TotalXp: 3297500, SumXp: 26429580, GoldReq: 1000000, Renown: 75 },
    { Multiplier: 75, TotalXp: 4946250, SumXp: 31375830, GoldReq: 1000000, Renown: 75 },
    { Multiplier: 100, TotalXp: 6595000, SumXp: 37970830, GoldReq: 1000000, Renown: 250 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 44631780, GoldReq: 1000000, Renown: 100 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 51292730, GoldReq: 1000000, Renown: 100 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 57953680, GoldReq: 1000000, Renown: 100 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 64614630, GoldReq: 1000000, Renown: 100 },
    { Multiplier: 101, TotalXp: 6660950, SumXp: 71275580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 200, TotalXp: 13190000, SumXp: 84465580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 300, TotalXp: 19785000, SumXp: 104250580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 400, TotalXp: 26380000, SumXp: 130630580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 500, TotalXp: 32975000, SumXp: 163605580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 750, TotalXp: 49462500, SumXp: 213068080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 1000, TotalXp: 65950000, SumXp: 279018080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 1250, TotalXp: 82437500, SumXp: 361455580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 1500, TotalXp: 98925000, SumXp: 460380580, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 1750, TotalXp: 115412500, SumXp: 575793080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 2000, TotalXp: 131900000, SumXp: 707693080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 3000, TotalXp: 197850000, SumXp: 905543080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 5000, TotalXp: 329750000, SumXp: 1235293080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 10000, TotalXp: 659500000, SumXp: 1894793080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 50000, TotalXp: 3297500000, SumXp: 5192293080, GoldReq: 2000000, Renown: 100 },
    { Multiplier: 100000, TotalXp: 6595000000, SumXp: 11787293080, GoldReq: 0, Renown: 100 }
  ],
  Levels: [
    { Xp: 15 },
    { Xp: 30 },
    { Xp: 50 },
    { Xp: 75 },
    { Xp: 125 },
    { Xp: 300 },
    { Xp: 600 },
    { Xp: 800 },
    { Xp: 900 },
    { Xp: 1000 },
    { Xp: 1200 },
    { Xp: 1500 },
    { Xp: 0 }
  ]
};

// credit: https://github.com/SkyCryptWebsite/SkyCrypt/blob/b9842bea6f1494fa2d2fd005b64f57d84646c188/src/constants/forge.js#L1 (Modified)
// Times in milliseconds
export const MiningForgeItems: MiningForgeItemsData = {
  REFINED_DIAMOND: { name: 'Refined Diamond', duration: 28800000 },
  REFINED_MITHRIL: { name: 'Refined Mithril', duration: 21600000 },
  REFINED_TITANIUM: { name: 'Refined Titanium', duration: 43200000 },
  REFINED_TUNGSTEN: { name: 'Refined Tungsten', duration: 3600000 },
  REFINED_UMBER: { name: 'Refined Umber', duration: 3600000 },
  MITHRIL_NECKLACE: { name: 'Mithril Necklace', duration: 3600000 },
  MITHRIL_CLOAK: { name: 'Mithril Cloak', duration: 3600000 },
  MITHRIL_BELT: { name: 'Mithril Belt', duration: 3600000 },
  MITHRIL_GAUNTLET: { name: 'Mithril Gauntlet', duration: 3600000 },
  TITANIUM_NECKLACE: { name: 'Titanium Necklace', duration: 16200000 },
  TITANIUM_CLOAK: { name: 'Titanium Cloak', duration: 16200000 },
  TITANIUM_BELT: { name: 'Titanium Belt', duration: 16200000 },
  TITANIUM_GAUNTLET: { name: 'Titanium Gauntlet', duration: 16200000 },
  TITANIUM_TALISMAN: { name: 'Titanium Talisman', duration: 50400000 },
  TITANIUM_RING: { name: 'Titanium Ring', duration: 72000000 },
  TITANIUM_ARTIFACT: { name: 'Titanium Artifact', duration: 129600000 },
  TITANIUM_RELIC: { name: 'Titanium Relic', duration: 259200000 },
  DIVAN_POWDER_COATING: { name: 'Divan Powder Coating', duration: 129600000 },
  DIVAN_HELMET: { name: 'Helmet Of Divan', duration: 86400000 },
  DIVAN_CHESTPLATE: { name: 'Chestplate Of Divan', duration: 86400000 },
  DIVAN_LEGGINGS: { name: 'Leggings Of Divan', duration: 86400000 },
  DIVAN_BOOTS: { name: 'Boots Of Divan', duration: 86400000 },
  AMBER_NECKLACE: { name: 'Amber Necklace', duration: 86400000 },
  SAPPHIRE_CLOAK: { name: 'Sapphire Cloak', duration: 86400000 },
  JADE_BELT: { name: 'Jade Belt', duration: 86400000 },
  AMETHYST_GAUNTLET: { name: 'Amethyst Gauntlet', duration: 86400000 },
  GEMSTONE_CHAMBER: { name: 'Gemstone Chamber', duration: 14400000 },
  DWARVEN_HANDWARMERS: { name: 'Dwarven Handwarmers', duration: 14400000 },
  DWARVEN_METAL: { name: 'Dwarven Metal Talisman', duration: 86400000 },
  DIVAN_PENDANT: { name: 'Pendant of Divan', duration: 604800000 },
  POWER_RELIC: { name: 'Relic of Power', duration: 28800000 },
  PERFECT_AMBER_GEM: { name: 'Perfect Amber Gemstone', duration: 72000000 },
  PERFECT_AMETHYST_GEM: { name: 'Perfect Amethyst Gemstone', duration: 72000000 },
  PERFECT_JADE_GEM: { name: 'Perfect Jade Gemstone', duration: 72000000 },
  PERFECT_JASPER_GEM: { name: 'Perfect Jasper Gemstone', duration: 72000000 },
  PERFECT_OPAL_GEM: { name: 'Perfect Opal Gemstone', duration: 72000000 },
  PERFECT_RUBY_GEM: { name: 'Perfect Ruby Gemstone', duration: 72000000 },
  PERFECT_SAPPHIRE_GEM: { name: 'Perfect Sapphire Gemstone', duration: 72000000 },
  PERFECT_TOPAZ_GEM: { name: 'Perfect Topaz Gemstone', duration: 72000000 },
  PERFECT_AQUAMARINE_GEM: { name: 'Perfect Aquamarine Gem', duration: 72000000 },
  PERFECT_CITRINE_GEM: { name: 'Perfect Citrine Gem', duration: 72000000 },
  PERFECT_ONYX_GEM: { name: 'Perfect Onyx Gem', duration: 72000000 },
  PERFECT_PERIDOT_GEM: { name: 'Perfect Peridot Gem', duration: 72000000 },
  BEJEWELED_HANDLE: { name: 'Bejeweled Handle', duration: 30000 },
  DRILL_ENGINE: { name: 'Drill Motor', duration: 108000000 },
  FUEL_TANK: { name: 'Fuel Canister', duration: 36000000 },
  GEMSTONE_MIXTURE: { name: 'Gemstone Mixture', duration: 14400000 },
  GLACITE_AMALGAMATION: { name: 'Glacite Amalgamation', duration: 14400000 },
  GOLDEN_PLATE: { name: 'Golden Plate', duration: 21600000 },
  MITHRIL_PLATE: { name: 'Mithril Plate', duration: 64800000 },
  TUNGSTEN_PLATE: { name: 'Tungsten Plate', duration: 10800000 },
  UMBER_PLATE: { name: 'Umber Plate', duration: 10800000 },
  PERFECT_PLATE: { name: 'Perfect Plate', duration: 1800000 },
  DIAMONITE: { name: 'Diamonite', duration: 21600000 },
  POCKET_ICEBERG: { name: 'Pocket Iceberg', duration: 21600000 },
  PETRIFIED_STARFALL: { name: 'Petrified Starfall', duration: 21600000 },
  PURE_MITHRIL: { name: 'Pure Mithril', duration: 21600000 },
  ROCK_GEMSTONE: { name: 'Dwarven Geode', duration: 21600000 },
  TITANIUM_TESSERACT: { name: 'Titanium Tesseract', duration: 21600000 },
  GLEAMING_CRYSTAL: { name: 'Gleaming Crystal', duration: 21600000 },
  HOT_STUFF: { name: 'Scorched Topaz', duration: 21600000 },
  AMBER_MATERIAL: { name: 'Amber Material', duration: 21600000 },
  FRIGID_HUSK: { name: 'Frigid Husk', duration: 21600000 },
  BEJEWELED_COLLAR: { name: 'Bejeweled Collar', duration: 7200000 },
  MOLE: { name: '[Lvl 1] Mole', duration: 259200000 },
  AMMONITE: { name: '[Lvl 1] Ammonite', duration: 259200000 },
  PENGUIN: { name: '[Lvl 1] Penguin', duration: 604800000 },
  TYRANNOSAURUS: { name: '[Lvl 1] T-Rex', duration: 604800000 },
  SPINOSAURUS: { name: '[Lvl 1] Spinosaurus', duration: 604800000 },
  GOBLIN: { name: '[Lvl 1] Goblin', duration: 604800000 },
  ANKYLOSAURUS: { name: '[Lvl 1] Ankylosaurus', duration: 604800000 },
  MAMMOTH: { name: '[Lvl 1] Mammoth', duration: 604800000 },
  MITHRIL_DRILL_1: { name: 'Mithril Drill SX-R226', duration: 14400000 },
  MITHRIL_DRILL_2: { name: 'Mithril Drill SX-R326', duration: 30000 },
  GEMSTONE_DRILL_1: { name: 'Ruby Drill TX-15', duration: 14400000 },
  GEMSTONE_DRILL_2: { name: 'Gemstone Drill LT-522', duration: 30000 },
  GEMSTONE_DRILL_3: { name: 'Topaz Drill KGR-12', duration: 30000 },
  GEMSTONE_DRILL_4: { name: 'Jasper Drill X', duration: 30000 },
  POLISHED_TOPAZ_ROD: { name: 'Polished Topaz Rod', duration: 43200000 },
  TITANIUM_DRILL_1: { name: 'Titanium Drill DR-X355', duration: 14400000 },
  TITANIUM_DRILL_2: { name: 'Titanium Drill DR-X455', duration: 30000 },
  TITANIUM_DRILL_3: { name: 'Titanium Drill DR-X555', duration: 30000 },
  TITANIUM_DRILL_4: { name: 'Titanium Drill DR-X655', duration: 30000 },
  CHISEL: { name: 'Chisel', duration: 14400000 },
  REINFORCED_CHISEL: { name: 'Reinforced Chisel', duration: 30000 },
  GLACITE_CHISEL: { name: 'Glacite-Plated Chisel', duration: 30000 },
  PERFECT_CHISEL: { name: 'Perfect Chisel', duration: 30000 },
  DIVAN_DRILL: { name: "Divan's Drill", duration: 30000 },
  STARFALL_SEASONING: { name: 'Starfall Seasoning', duration: 64800000 },
  GOBLIN_OMELETTE: { name: 'Goblin Omelette', duration: 64800000 },
  GOBLIN_OMELETTE_BLUE_CHEESE: { name: 'Blue Cheese Goblin Omelette', duration: 64800000 },
  GOBLIN_OMELETTE_PESTO: { name: 'Pesto Goblin Omelette', duration: 64800000 },
  GOBLIN_OMELETTE_SPICY: { name: 'Spicy Goblin Omelette', duration: 64800000 },
  GOBLIN_OMELETTE_SUNNY_SIDE: { name: 'Sunny Side Goblin Omelette', duration: 64800000 },
  TUNGSTEN_KEYCHAIN: { name: 'Tungsten Regulator', duration: 64800000 },
  MITHRIL_DRILL_ENGINE: { name: 'Mithril-Plated Drill Engine', duration: 86400000 },
  TITANIUM_DRILL_ENGINE: { name: 'Titanium-Plated Drill Engine', duration: 30000 },
  RUBY_POLISHED_DRILL_ENGINE: { name: 'Ruby-polished Drill Engine', duration: 30000 },
  SAPPHIRE_POLISHED_DRILL_ENGINE: { name: 'Sapphire-polished Drill Engine', duration: 30000 },
  AMBER_POLISHED_DRILL_ENGINE: { name: 'Amber-polished Drill Engine', duration: 30000 },
  MITHRIL_FUEL_TANK: { name: 'Mithril-Infused Fuel Tank', duration: 86400000 },
  TITANIUM_FUEL_TANK: { name: 'Titanium-Infused Fuel Tank', duration: 30000 },
  GEMSTONE_FUEL_TANK: { name: 'Gemstone Fuel Tank', duration: 30000 },
  PERFECTLY_CUT_FUEL_TANK: { name: 'Perfectly-Cut Fuel Tank', duration: 30000 },
  BEACON_2: { name: 'Beacon II', duration: 72000000 },
  BEACON_3: { name: 'Beacon III', duration: 108000000 },
  BEACON_4: { name: 'Beacon IV', duration: 144000000 },
  BEACON_5: { name: 'Beacon V', duration: 180000000 },
  FORGE_TRAVEL_SCROLL: { name: 'Travel Scroll to the Dwarven Forge', duration: 18000000 },
  BASE_CAMP_TRAVEL_SCROLL: { name: 'Travel Scroll to the Dwarven Base Camp', duration: 36000000 },
  POWER_CRYSTAL: { name: 'Power Crystal', duration: 7200000 },
  SECRET_RAILROAD_PASS: { name: 'Secret Railroad Pass', duration: 30000 },
  TUNGSTEN_KEY: { name: 'Tungsten Key', duration: 1800000 },
  UMBER_KEY: { name: 'Umber Key', duration: 1800000 },
  SKELETON_KEY: { name: 'Skeleton Key', duration: 1800000 },
  PORTABLE_CAMPFIRE: { name: 'Portable Campfire', duration: 1800000 },
  PET: { name: 'PET', duration: 0 },
  UNKNOWN: { name: 'UNKNOWN', duration: 0 }
};

export const MiningForgeQuickForgeMultiplier: { [key: number]: number } = {
  0: 1,
  1: 0.895,
  2: 0.89,
  3: 0.885,
  4: 0.88,
  5: 0.875,
  6: 0.87,
  7: 0.865,
  8: 0.86,
  9: 0.855,
  10: 0.85,
  11: 0.845,
  12: 0.84,
  13: 0.835,
  14: 0.83,
  15: 0.825,
  16: 0.82,
  17: 0.815,
  18: 0.81,
  19: 0.805,
  20: 0.7
};

export const magicalPowerValues: { [key in Rarity | 'UNKNOWN']: number } = {
  COMMON: 3,
  UNCOMMON: 5,
  RARE: 8,
  EPIC: 12,
  LEGENDARY: 16,
  MYTHIC: 22,
  SPECIAL: 3,
  VERY_SPECIAL: 5,
  DIVINE: 0,
  UNKNOWN: 0
};

export const petScore: { [key in Rarity | 'UNKNOWN']: number } = {
  COMMON: 1,
  UNCOMMON: 2,
  RARE: 3,
  EPIC: 4,
  LEGENDARY: 5,
  MYTHIC: 6,
  VERY_SPECIAL: 6,
  DIVINE: 0,
  SPECIAL: 0,
  UNKNOWN: 0
};

export const petRarityOffset: { [key in Rarity | 'UNKNOWN']: number } = {
  COMMON: 0,
  UNCOMMON: 6,
  RARE: 11,
  EPIC: 16,
  LEGENDARY: 20,
  MYTHIC: 20,
  DIVINE: 0,
  SPECIAL: 0,
  VERY_SPECIAL: 0,
  UNKNOWN: 0
};

export const PetLevels: number[] = [
  100, 110, 120, 130, 145, 160, 175, 190, 210, 230, 250, 275, 300, 330, 360, 400, 440, 490, 540, 600, 660, 730, 800,
  880, 960, 1050, 1150, 1260, 1380, 1510, 1650, 1800, 1960, 2130, 2310, 2500, 2700, 2920, 3160, 3420, 3700, 4000, 4350,
  4750, 5200, 5700, 6300, 7000, 7800, 8700, 9700, 10800, 12000, 13300, 14700, 16200, 17800, 19500, 21300, 23200, 25200,
  27400, 29800, 32400, 35200, 38200, 41400, 44800, 48400, 52200, 56200, 60400, 64800, 69400, 74200, 79200, 84700, 90700,
  97200, 104200, 111700, 119700, 128200, 137200, 146700, 156700, 167700, 179700, 192700, 206700, 221700, 237700, 254700,
  272700, 291700, 311700, 333700, 357700, 383700, 411700, 441700, 476700, 516700, 561700, 611700, 666700, 726700,
  791700, 861700, 936700, 1016700, 1101700, 1191700, 1286700, 1386700, 1496700, 1616700, 1746700, 1886700
];

export const CustomPetLeveling: CustomPetLevelingData = {
  GOLDEN_DRAGON: {
    type: 1,
    petLevels: [
      0, 5555, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
      1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
      1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
      1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
      1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
      1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
      1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
      1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700, 1886700,
      1886700, 1886700, 1886700
    ],
    maxLevel: 200
  },
  BINGO: {
    rarityOffset: {
      UNKNOWN: 0,
      COMMON: 0,
      UNCOMMON: 0,
      RARE: 0,
      EPIC: 0,
      LEGENDARY: 0,
      MYTHIC: 0,
      DIVINE: 0,
      SPECIAL: 0,
      VERY_SPECIAL: 0
    }
  },
  REINDEER: {
    xpMultiplier: 2
  }
};

export const SLAYER_XP: { [key in SkyBlockSlayer]: Record<number, number> } = {
  zombie: {
    1: 5,
    2: 15,
    3: 200,
    4: 1000,
    5: 5000,
    6: 20000,
    7: 100000,
    8: 400000,
    9: 1000000
  },
  spider: {
    1: 5,
    2: 25,
    3: 200,
    4: 1000,
    5: 5000,
    6: 20000,
    7: 100000,
    8: 400000,
    9: 1000000
  },
  wolf: {
    1: 10,
    2: 30,
    3: 250,
    4: 1500,
    5: 5000,
    6: 20000,
    7: 100000,
    8: 400000,
    9: 1000000
  },
  enderman: {
    1: 10,
    2: 30,
    3: 250,
    4: 1500,
    5: 5000,
    6: 20000,
    7: 100000,
    8: 400000,
    9: 1000000
  },
  blaze: {
    1: 10,
    2: 30,
    3: 250,
    4: 1500,
    5: 5000,
    6: 20000,
    7: 100000,
    8: 400000,
    9: 1000000
  },
  vampire: {
    1: 20,
    2: 75,
    3: 240,
    4: 840,
    5: 2400
  }
};

export const DEFAULT_SKILL_CAPS: { [key in SkyBlockXPTables]: number } = {
  farming: 50,
  mining: 60,
  combat: 60,
  foraging: 50,
  fishing: 50,
  enchanting: 60,
  alchemy: 50,
  taming: 50,
  carpentry: 50,
  runecrafting: 25,
  social: 25,
  dungeoneering: 50,
  default: 0,
  hotm: 10,
  wheat: 46,
  carrot: 46,
  sugarCane: 46,
  potato: 46,
  pumpkin: 46,
  melon: 46,
  cactus: 46,
  cocoaBeans: 46,
  mushroom: 46,
  netherWart: 46,
  garden: 15
};

export const NON_RUNECRAFTING_LEVEL_CAP = 3;

export const RUNECRAFTING_XP: Record<number, number> = {
  1: 50,
  2: 100,
  3: 125,
  4: 160,
  5: 200,
  6: 250,
  7: 315,
  8: 400,
  9: 500,
  10: 625,
  11: 785,
  12: 1000,
  13: 1250,
  14: 1600,
  15: 2000,
  16: 2465,
  17: 3125,
  18: 4000,
  19: 5000,
  20: 6200,
  21: 7800,
  22: 9800,
  23: 12200,
  24: 15300,
  25: 19050
};

export const DUNGEONEERING_XP: Record<number, number> = {
  1: 50,
  2: 75,
  3: 110,
  4: 160,
  5: 230,
  6: 330,
  7: 470,
  8: 670,
  9: 950,
  10: 1340,
  11: 1890,
  12: 2665,
  13: 3760,
  14: 5260,
  15: 7380,
  16: 10300,
  17: 14400,
  18: 20000,
  19: 27600,
  20: 38000,
  21: 52500,
  22: 71500,
  23: 97000,
  24: 132000,
  25: 180000,
  26: 243000,
  27: 328000,
  28: 445000,
  29: 600000,
  30: 800000,
  31: 1065000,
  32: 1410000,
  33: 1900000,
  34: 2500000,
  35: 3300000,
  36: 4300000,
  37: 5600000,
  38: 7200000,
  39: 9200000,
  40: 12000000,
  41: 15000000,
  42: 19000000,
  43: 24000000,
  44: 30000000,
  45: 38000000,
  46: 48000000,
  47: 60000000,
  48: 75000000,
  49: 93000000,
  50: 116250000,
  51: 200000000
};

export const SOCIAL_XP: Record<number, number> = {
  1: 50,
  2: 100,
  3: 150,
  4: 250,
  5: 500,
  6: 750,
  7: 1000,
  8: 1250,
  9: 1500,
  10: 2000,
  11: 2500,
  12: 3000,
  13: 3750,
  14: 4500,
  15: 6000,
  16: 8000,
  17: 10000,
  18: 12500,
  19: 15000,
  20: 20000,
  21: 25000,
  22: 30000,
  23: 35000,
  24: 40000,
  25: 50000
};

export const DEFAULT_LEVELING_XP: Record<number, number> = {
  1: 50,
  2: 125,
  3: 200,
  4: 300,
  5: 500,
  6: 750,
  7: 1000,
  8: 1500,
  9: 2000,
  10: 3500,
  11: 5000,
  12: 7500,
  13: 10000,
  14: 15000,
  15: 20000,
  16: 30000,
  17: 50000,
  18: 75000,
  19: 100000,
  20: 200000,
  21: 300000,
  22: 400000,
  23: 500000,
  24: 600000,
  25: 700000,
  26: 800000,
  27: 900000,
  28: 1000000,
  29: 1100000,
  30: 1200000,
  31: 1300000,
  32: 1400000,
  33: 1500000,
  34: 1600000,
  35: 1700000,
  36: 1800000,
  37: 1900000,
  38: 2000000,
  39: 2100000,
  40: 2200000,
  41: 2300000,
  42: 2400000,
  43: 2500000,
  44: 2600000,
  45: 2750000,
  46: 2900000,
  47: 3100000,
  48: 3400000,
  49: 3700000,
  50: 4000000,
  51: 4300000,
  52: 4600000,
  53: 4900000,
  54: 5200000,
  55: 5500000,
  56: 5800000,
  57: 6100000,
  58: 6400000,
  59: 6700000,
  60: 7000000
};

export const HOTM_XP: Record<number, number> = {
  1: 0,
  2: 3000,
  3: 9000,
  4: 25000,
  5: 60000,
  6: 100000,
  7: 150000,
  8: 210000,
  9: 290000,
  10: 400000
};

export const COSMETIC_SKILLS = ['runecrafting', 'social'];

export const INFINITE = ['dungeoneering', 'skyblock_level'];

export const GARDEN_XP = {
  1: 0,
  2: 70,
  3: 70,
  4: 140,
  5: 240,
  6: 600,
  7: 1500,
  8: 2000,
  9: 2500,
  10: 3000,
  11: 10000,
  12: 10000,
  13: 10000,
  14: 10000,
  15: 10000
};

export const WHEAT = {
  0: 30,
  1: 50,
  2: 80,
  3: 170,
  4: 330,
  5: 670,
  6: 1330,
  7: 2500,
  8: 3500,
  9: 5000,
  10: 6500,
  11: 8000,
  12: 10000,
  13: 20000,
  14: 35000,
  15: 50000,
  16: 75000,
  17: 100000,
  18: 175000,
  19: 250000,
  20: 350000,
  21: 500000,
  22: 750000,
  23: 1000000,
  24: 1300000,
  25: 1600000,
  26: 2000000,
  27: 2300000,
  28: 2600000,
  29: 3000000,
  30: 3000000,
  31: 3000000,
  32: 3000000,
  33: 3000000,
  34: 3000000,
  35: 3000000,
  36: 3000000,
  37: 3000000,
  38: 3000000,
  39: 3000000,
  40: 3000000,
  41: 3000000,
  42: 3000000,
  43: 3000000,
  44: 3000000,
  45: 3000000
};

export const CARROT = {
  0: 100,
  1: 150,
  2: 250,
  3: 500,
  4: 1500,
  5: 2500,
  6: 5000,
  7: 7500,
  8: 10000,
  9: 15000,
  10: 20000,
  11: 25000,
  12: 40000,
  13: 70000,
  14: 100000,
  15: 200000,
  16: 250000,
  17: 250000,
  18: 500000,
  19: 750000,
  20: 1000000,
  21: 1500000,
  22: 2000000,
  23: 3000000,
  24: 4000000,
  25: 5000000,
  26: 6000000,
  27: 7000000,
  28: 8000000,
  29: 9000000,
  30: 10000000,
  31: 10000000,
  32: 10000000,
  33: 10000000,
  34: 10000000,
  35: 10000000,
  36: 10000000,
  37: 10000000,
  38: 10000000,
  39: 10000000,
  40: 10000000,
  41: 10000000,
  42: 10000000,
  43: 10000000,
  44: 10000000,
  45: 10000000
};

export const POTATO = {
  0: 100,
  1: 150,
  2: 250,
  3: 500,
  4: 1500,
  5: 2500,
  6: 5000,
  7: 7500,
  8: 10000,
  9: 15000,
  10: 20000,
  11: 25000,
  12: 40000,
  13: 70000,
  14: 100000,
  15: 200000,
  16: 250000,
  17: 250000,
  18: 500000,
  19: 750000,
  20: 1000000,
  21: 1500000,
  22: 2000000,
  23: 3000000,
  24: 4000000,
  25: 5000000,
  26: 6000000,
  27: 7000000,
  28: 8000000,
  29: 9000000,
  30: 10000000,
  31: 10000000,
  32: 10000000,
  33: 10000000,
  34: 10000000,
  35: 10000000,
  36: 10000000,
  37: 10000000,
  38: 10000000,
  39: 10000000,
  40: 10000000,
  41: 10000000,
  42: 10000000,
  43: 10000000,
  44: 10000000,
  45: 10000000
};

export const MELON = {
  0: 150,
  1: 250,
  2: 400,
  3: 850,
  4: 1650,
  5: 3350,
  6: 6650,
  7: 12500,
  8: 17500,
  9: 25000,
  10: 32500,
  11: 40000,
  12: 50000,
  13: 100000,
  14: 175000,
  15: 250000,
  16: 375000,
  17: 500000,
  18: 875000,
  19: 1250000,
  20: 1750000,
  21: 2500000,
  22: 3750000,
  23: 5000000,
  24: 6500000,
  25: 8000000,
  26: 10000000,
  27: 11500000,
  28: 13000000,
  29: 15000000,
  30: 15000000,
  31: 15000000,
  32: 15000000,
  33: 15000000,
  34: 15000000,
  35: 15000000,
  36: 15000000,
  37: 15000000,
  38: 15000000,
  39: 15000000,
  40: 15000000,
  41: 15000000,
  42: 15000000,
  43: 15000000,
  44: 15000000,
  45: 15000000
};

export const PUMPKIN = {
  0: 30,
  1: 50,
  2: 80,
  3: 170,
  4: 330,
  5: 670,
  6: 1330,
  7: 2500,
  8: 3500,
  9: 5000,
  10: 6500,
  11: 8000,
  12: 10000,
  13: 20000,
  14: 35000,
  15: 50000,
  16: 75000,
  17: 100000,
  18: 175000,
  19: 250000,
  20: 350000,
  21: 500000,
  22: 750000,
  23: 1000000,
  24: 1300000,
  25: 1600000,
  26: 2000000,
  27: 2300000,
  28: 2600000,
  29: 3000000,
  30: 3000000,
  31: 3000000,
  32: 3000000,
  33: 3000000,
  34: 3000000,
  35: 3000000,
  36: 3000000,
  37: 3000000,
  38: 3000000,
  39: 3000000,
  40: 3000000,
  41: 3000000,
  42: 3000000,
  43: 3000000,
  44: 3000000,
  45: 3000000
};

export const SUGAR_CANE = {
  0: 60,
  1: 100,
  2: 160,
  3: 340,
  4: 660,
  5: 1340,
  6: 2660,
  7: 5000,
  8: 7000,
  9: 10000,
  10: 13000,
  11: 16000,
  12: 20000,
  13: 40000,
  14: 70000,
  15: 100000,
  16: 150000,
  17: 200000,
  18: 350000,
  19: 500000,
  20: 700000,
  21: 1000000,
  22: 1500000,
  23: 2000000,
  24: 2600000,
  25: 3200000,
  26: 4000000,
  27: 4600000,
  28: 5200000,
  29: 6000000,
  30: 6000000,
  31: 6000000,
  32: 6000000,
  33: 6000000,
  34: 6000000,
  35: 6000000,
  36: 6000000,
  37: 6000000,
  38: 6000000,
  39: 6000000,
  40: 6000000,
  41: 6000000,
  42: 6000000,
  43: 6000000,
  44: 6000000,
  45: 6000000
};

export const COCOA_BEANS = {
  0: 90,
  1: 150,
  2: 250,
  3: 500,
  4: 1000,
  5: 2000,
  6: 4000,
  7: 7500,
  8: 10000,
  9: 15000,
  10: 20000,
  11: 25000,
  12: 30000,
  13: 50000,
  14: 100000,
  15: 150000,
  16: 200000,
  17: 300000,
  18: 500000,
  19: 750000,
  20: 1000000,
  21: 1500000,
  22: 2000000,
  23: 3000000,
  24: 4000000,
  25: 5000000,
  26: 6000000,
  27: 7000000,
  28: 8000000,
  29: 9000000,
  30: 9000000,
  31: 9000000,
  32: 9000000,
  33: 9000000,
  34: 9000000,
  35: 9000000,
  36: 9000000,
  37: 9000000,
  38: 9000000,
  39: 9000000,
  40: 9000000,
  41: 9000000,
  42: 9000000,
  43: 9000000,
  44: 9000000,
  45: 9000000
};

export const CACTUS = {
  0: 60,
  1: 100,
  2: 160,
  3: 340,
  4: 660,
  5: 1340,
  6: 2660,
  7: 5000,
  8: 7000,
  9: 10000,
  10: 13000,
  11: 16000,
  12: 20000,
  13: 40000,
  14: 70000,
  15: 100000,
  16: 150000,
  17: 200000,
  18: 350000,
  19: 500000,
  20: 700000,
  21: 1000000,
  22: 1500000,
  23: 2000000,
  24: 2600000,
  25: 3200000,
  26: 4000000,
  27: 4600000,
  28: 5200000,
  29: 6000000,
  30: 6000000,
  31: 6000000,
  32: 6000000,
  33: 6000000,
  34: 6000000,
  35: 6000000,
  36: 6000000,
  37: 6000000,
  38: 6000000,
  39: 6000000,
  40: 6000000,
  41: 6000000,
  42: 6000000,
  43: 6000000,
  44: 6000000,
  45: 6000000
};

export const MUSHROOM = {
  0: 30,
  1: 50,
  2: 80,
  3: 170,
  4: 330,
  5: 670,
  6: 1330,
  7: 2500,
  8: 3500,
  9: 5000,
  10: 6500,
  11: 8000,
  12: 10000,
  13: 20000,
  14: 35000,
  15: 50000,
  16: 75000,
  17: 100000,
  18: 175000,
  19: 250000,
  20: 350000,
  21: 500000,
  22: 750000,
  23: 1000000,
  24: 1300000,
  25: 1600000,
  26: 2000000,
  27: 2300000,
  28: 2600000,
  29: 3000000,
  30: 3000000,
  31: 3000000,
  32: 3000000,
  33: 3000000,
  34: 3000000,
  35: 3000000,
  36: 3000000,
  37: 3000000,
  38: 3000000,
  39: 3000000,
  40: 3000000,
  41: 3000000,
  42: 3000000,
  43: 3000000,
  44: 3000000,
  45: 3000000
};

export const NETHER_WART = {
  0: 90,
  1: 150,
  2: 250,
  3: 500,
  4: 1000,
  5: 2000,
  6: 4000,
  7: 7500,
  8: 10000,
  9: 15000,
  10: 20000,
  11: 25000,
  12: 30000,
  13: 50000,
  14: 100000,
  15: 150000,
  16: 200000,
  17: 300000,
  18: 500000,
  19: 750000,
  20: 1000000,
  21: 1500000,
  22: 2000000,
  23: 3000000,
  24: 4000000,
  25: 5000000,
  26: 6000000,
  27: 7000000,
  28: 8000000,
  29: 9000000,
  30: 9000000,
  31: 9000000,
  32: 9000000,
  33: 9000000,
  34: 9000000,
  35: 9000000,
  36: 9000000,
  37: 9000000,
  38: 9000000,
  39: 9000000,
  40: 9000000,
  41: 9000000,
  42: 9000000,
  43: 9000000,
  44: 9000000,
  45: 9000000
};

/* eslint-disable camelcase */

export const BestiaryBrackets: { [key: number]: number[] } = {
  1: [
    20, 40, 60, 100, 200, 400, 800, 1400, 2000, 3000, 6000, 12000, 20000, 30000, 40000, 50000, 60000, 72000, 86000,
    100000, 200000, 400000, 600000, 800000, 1000000
  ],
  2: [
    5, 10, 15, 25, 50, 100, 200, 350, 500, 750, 1500, 3000, 5000, 7500, 10000, 12500, 15000, 18000, 21500, 25000, 50000,
    100000, 150000, 200000, 250000
  ],
  3: [
    4, 8, 12, 16, 20, 40, 80, 140, 200, 300, 600, 1200, 2000, 3000, 4000, 5000, 6000, 7200, 8600, 10000, 20000, 40000,
    60000, 80000, 100000
  ],
  4: [
    2, 4, 6, 10, 15, 20, 25, 35, 50, 75, 150, 300, 500, 750, 1000, 1350, 1650, 2000, 2500, 3000, 5000, 10000, 15000,
    20000, 25000
  ],
  5: [
    1, 2, 3, 5, 7, 10, 15, 20, 25, 30, 60, 120, 200, 300, 400, 500, 600, 720, 860, 1000, 2000, 4000, 6000, 8000, 10000
  ],
  6: [1, 2, 3, 5, 7, 9, 14, 17, 21, 25, 50, 80, 125, 175, 250, 325, 425, 525, 625, 750, 1500, 3000, 4500, 6000, 7500],
  7: [1, 2, 3, 5, 7, 9, 11, 14, 17, 20, 30, 40, 55, 75, 100, 150, 200, 275, 375, 500, 1000, 1500, 2000, 2500, 3000]
};

export const BestiaryMobs: BestiaryMobsData = {
  dynamic: {
    name: 'Private Island',
    mobs: [
      {
        name: '§aBat',
        cap: 200,
        mobs: ['forest_island_bat_3'],
        bracket: 1
      },
      {
        name: '§aCreeper',
        cap: 200,
        mobs: ['creeper_1'],
        bracket: 1
      },
      {
        name: '§aEnderman',
        cap: 200,
        mobs: [
          'enderman_1',
          'enderman_2',
          'enderman_3',
          'enderman_4',
          'enderman_5',
          'enderman_6',
          'enderman_7',
          'enderman_8',
          'enderman_9',
          'enderman_10',
          'enderman_11',
          'enderman_12',
          'enderman_13',
          'enderman_14',
          'enderman_15'
        ],
        bracket: 1
      },
      {
        name: '§aSkeleton',
        cap: 200,
        mobs: [
          'skeleton_1',
          'skeleton_2',
          'skeleton_3',
          'skeleton_4',
          'skeleton_5',
          'skeleton_6',
          'skeleton_7',
          'skeleton_8',
          'skeleton_9',
          'skeleton_10',
          'skeleton_11',
          'skeleton_12',
          'skeleton_13',
          'skeleton_14',
          'skeleton_15'
        ],
        bracket: 1
      },
      {
        name: '§aSlime',
        cap: 200,
        mobs: [
          'slime_1',
          'slime_2',
          'slime_3',
          'slime_4',
          'slime_5',
          'slime_6',
          'slime_7',
          'slime_8',
          'slime_9',
          'slime_10',
          'slime_11',
          'slime_12',
          'slime_13',
          'slime_14',
          'slime_15'
        ],
        bracket: 1
      },
      {
        name: '§aSpider',
        cap: 200,
        mobs: [
          'spider_1',
          'spider_2',
          'spider_3',
          'spider_4',
          'spider_5',
          'spider_6',
          'spider_7',
          'spider_8',
          'spider_9',
          'spider_10',
          'spider_11',
          'spider_12',
          'spider_13',
          'spider_14',
          'spider_15'
        ],
        bracket: 1
      },
      {
        name: '§aWitch',
        cap: 200,
        mobs: [
          'witch_1',
          'witch_2',
          'witch_3',
          'witch_4',
          'witch_5',
          'witch_6',
          'witch_7',
          'witch_8',
          'witch_9',
          'witch_10',
          'witch_11',
          'witch_12',
          'witch_13',
          'witch_14',
          'witch_15'
        ],
        bracket: 1
      },
      {
        name: '§aZombie',
        cap: 200,
        mobs: [
          'zombie_1',
          'zombie_2',
          'zombie_3',
          'zombie_4',
          'zombie_5',
          'zombie_6',
          'zombie_7',
          'zombie_8',
          'zombie_9',
          'zombie_10',
          'zombie_11',
          'zombie_12',
          'zombie_13',
          'zombie_14',
          'zombie_15'
        ],
        bracket: 1
      }
    ]
  },
  hub: {
    name: 'Hub',
    mobs: [
      {
        name: '§aCrypt Ghoul',
        cap: 40000,
        mobs: ['unburried_zombie_30'],
        bracket: 1
      },
      {
        name: '§6Golden Ghoul',
        cap: 4000,
        mobs: ['unburried_zombie_60'],
        bracket: 3
      },
      {
        name: '§aGraveyard Zombie',
        cap: 200,
        mobs: ['graveyard_zombie_1'],
        bracket: 1
      },
      {
        name: '§aOld Wolf',
        cap: 4000,
        mobs: ['old_wolf_50'],
        bracket: 3
      },
      {
        name: '§aWolf',
        cap: 40000,
        mobs: ['ruin_wolf_15'],
        bracket: 1
      },
      {
        name: '§aZombie Villager',
        cap: 1000,
        mobs: ['zombie_villager_1'],
        bracket: 4
      }
    ]
  },
  farming_1: {
    name: 'The Farming Islands',
    mobs: [
      {
        name: '§aChicken',
        cap: 200,
        mobs: ['farming_chicken_1'],
        bracket: 1
      },
      {
        name: '§aCow',
        cap: 200,
        mobs: ['farming_cow_1'],
        bracket: 1
      },
      {
        name: '§aMushroom Cow',
        cap: 200,
        mobs: ['mushroom_cow_1'],
        bracket: 1
      },
      {
        name: '§aPig',
        cap: 200,
        mobs: ['farming_pig_1'],
        bracket: 1
      },
      {
        name: '§aRabbit',
        cap: 200,
        mobs: ['farming_rabbit_1'],
        bracket: 1
      },
      {
        name: '§aSheep',
        cap: 200,
        mobs: ['farming_sheep_1'],
        bracket: 1
      }
    ]
  },
  combat_1: {
    name: "Spider's Den",
    mobs: [
      {
        name: '§aArachne',
        cap: 500,
        mobs: ['arachne_500', 'arachne_300'],
        bracket: 7
      },
      {
        name: "§aArachne's Brood",
        cap: 1000,
        mobs: ['arachne_brood_200', 'arachne_brood_100'],
        bracket: 4
      },
      {
        name: "§aArachne's Keeper",
        cap: 400,
        mobs: ['arachne_keeper_100'],
        bracket: 5
      },
      {
        name: '§aBroodmother',
        cap: 400,
        mobs: ['brood_mother_spider_12'],
        bracket: 5
      },
      {
        name: '§aDasher Spider',
        cap: 10000,
        mobs: ['dasher_spider_50', 'dasher_spider_45', 'dasher_spider_42', 'dasher_spider_4', 'dasher_spider_6'],
        bracket: 2
      },
      {
        name: '§aGravel Skeleton',
        cap: 4000,
        mobs: ['respawning_skeleton_2'],
        bracket: 3
      },
      {
        name: '§aRain Slime',
        cap: 1000,
        mobs: ['random_slime_8', 'random_slime_20'],
        bracket: 4
      },
      {
        name: '§aSilverfish',
        cap: 10000,
        mobs: [
          'jockey_shot_silverfish_3',
          'splitter_spider_silverfish_2',
          'splitter_spider_silverfish_45',
          'splitter_spider_silverfish_42',
          'splitter_spider_silverfish_50',
          'jockey_shot_silverfish_42'
        ],
        bracket: 2
      },
      {
        name: '§aSpider Jockey',
        cap: 4000,
        mobs: ['spider_jockey_3', 'spider_jockey_42', 'spider_jockey_5'],
        bracket: 3
      },
      {
        name: '§aSplitter Spider',
        cap: 10000,
        mobs: [
          'splitter_spider_2',
          'splitter_spider_45',
          'splitter_spider_42',
          'splitter_spider_50',
          'splitter_spider_4',
          'splitter_spider_6'
        ],
        bracket: 2
      },
      {
        name: '§aVoracious Spider',
        cap: 10000,
        mobs: ['voracious_spider_50', 'voracious_spider_42', 'voracious_spider_45', 'voracious_spider_10'],
        bracket: 2
      },
      {
        name: '§aWeaver Spider',
        cap: 10000,
        mobs: [
          'weaver_spider_3',
          'weaver_spider_4',
          'weaver_spider_5',
          'weaver_spider_6',
          'weaver_spider_42',
          'weaver_spider_45',
          'weaver_spider_50'
        ],
        bracket: 2
      }
    ]
  },
  combat_3: {
    name: 'The End',
    mobs: [
      {
        name: '§aDragon',
        cap: 1000,
        mobs: [
          'protector_dragon_100',
          'old_dragon_100',
          'young_dragon_100',
          'wise_dragon_100',
          'superior_dragon_100',
          'strong_dragon_100',
          'unstable_dragon_100'
        ],
        bracket: 5
      },
      {
        name: '§aEnderman',
        cap: 25000,
        mobs: ['enderman_50', 'enderman_45', 'enderman_42'],
        bracket: 4
      },
      {
        name: '§aEndermite',
        cap: 10000,
        mobs: ['nest_endermite_50', 'endermite_37', 'endermite_40'],
        bracket: 5
      },
      {
        name: '§aEndstone Protector',
        cap: 500,
        mobs: ['corrupted_protector_100'],
        bracket: 7
      },
      {
        name: '§aObsidian Defender',
        cap: 10000,
        mobs: ['obsidian_wither_55'],
        bracket: 5
      },
      {
        name: '§a§dVoidling Extremist',
        cap: 4000,
        mobs: ['voidling_extremist_100'],
        bracket: 3
      },
      {
        name: '§aVoidling Fanatic',
        cap: 25000,
        mobs: ['voidling_fanatic_85'],
        bracket: 4
      },
      {
        name: '§aWatcher',
        cap: 10000,
        mobs: ['watcher_55'],
        bracket: 5
      },
      {
        name: '§aZealot',
        cap: 25000,
        mobs: ['zealot_bruiser_100', 'zealot_enderman_55'],
        bracket: 4
      }
    ]
  },
  crimson_isle: {
    name: 'Crimson Isle',
    mobs: [
      {
        name: '§aAshfang',
        cap: 500,
        mobs: ['ashfang_200'],
        bracket: 7
      },
      {
        name: '§aBarbarian Duke X',
        cap: 500,
        mobs: ['barbarian_duke_x_200'],
        bracket: 7
      },
      {
        name: '§aBladesoul',
        cap: 500,
        mobs: ['bladesoul_200'],
        bracket: 7
      },
      {
        name: '§aBlaze',
        cap: 3000,
        mobs: ['blaze_25', 'blaze_70', 'bezal_80', 'mutated_blaze_70'],
        bracket: 4
      },
      {
        name: '§aFlaming Spider',
        cap: 10000,
        mobs: ['flaming_spider_80'],
        bracket: 3
      },
      {
        name: '§aFlare',
        cap: 100000,
        mobs: ['flare_90'],
        bracket: 1
      },
      {
        name: '§aGhast',
        cap: 3000,
        mobs: ['ghast_85', 'dive_ghast_90'],
        bracket: 4
      },
      {
        name: '§aKada Knight',
        cap: 3000,
        mobs: ['kada_knight_90'],
        bracket: 4
      },
      {
        name: '§5§lMage Outlaw',
        cap: 500,
        mobs: ['mage_outlaw_200'],
        bracket: 7
      },
      {
        name: '§a§4§lMagma Boss',
        cap: 500,
        mobs: ['magma_boss_500'],
        bracket: 7
      },
      {
        name: '§aMagma Cube',
        cap: 10000,
        mobs: ['pack_magma_cube_90', 'magma_cube_75', 'fireball_magma_cube_75'],
        bracket: 3
      },
      {
        name: '§aMagma Cube Rider',
        cap: 3000,
        mobs: ['magma_cube_rider_90'],
        bracket: 4
      },
      {
        name: '§aMatcho',
        cap: 400,
        mobs: ['matcho_100'],
        bracket: 5
      },
      {
        name: '§4Millennia-Aged Blaze',
        cap: 4000,
        mobs: ['old_blaze_110'],
        bracket: 3
      },
      {
        name: '§aMushroom Bull',
        cap: 10000,
        mobs: ['charging_mushroom_cow_80'],
        bracket: 3
      },
      {
        name: '§aSmoldering Blaze',
        cap: 25000,
        mobs: ['smoldering_blaze_95'],
        bracket: 2
      },
      {
        name: '§aTentacle',
        cap: 1000,
        mobs: ['hellwisp_100'],
        bracket: 5
      },
      {
        name: '§5Vanquisher',
        cap: 1000,
        mobs: ['vanquisher_100'],
        bracket: 5
      },
      {
        name: '§aWither Skeleton',
        cap: 3000,
        mobs: ['wither_skeleton_70'],
        bracket: 4
      },
      {
        name: '§aWither Spectre',
        cap: 10000,
        mobs: ['wither_spectre_70'],
        bracket: 3
      }
    ]
  },
  mining_2: {
    name: 'Deep Caverns',
    mobs: [
      {
        name: '§aEmerald Slime',
        cap: 3000,
        mobs: ['emerald_slime_5', 'emerald_slime_10'],
        bracket: 1
      },
      {
        name: '§aLapis Zombie',
        cap: 3000,
        mobs: ['lapis_zombie_7'],
        bracket: 1
      },
      {
        name: '§aMiner Skeleton',
        cap: 3000,
        mobs: ['diamond_skeleton_15', 'diamond_skeleton_20'],
        bracket: 1
      },
      {
        name: '§aMiner Zombie',
        cap: 3000,
        mobs: ['diamond_zombie_15', 'diamond_zombie_20'],
        bracket: 1
      },
      {
        name: '§aRedstone Pigman',
        cap: 3000,
        mobs: ['redstone_pigman_10'],
        bracket: 1
      },
      {
        name: '§aSneaky Creeper',
        cap: 300,
        mobs: ['invisible_creeper_3'],
        bracket: 3
      }
    ]
  },
  mining_3: {
    name: 'Dwarven Mines',
    mobs: [
      {
        name: '§aDiamond Goblin',
        cap: 100,
        mobs: ['goblin_500'],
        bracket: 7
      },
      {
        name: '§aGhost',
        cap: 100000,
        mobs: ['caverns_ghost_250'],
        bracket: 3
      },
      {
        name: '§aGlacite Bowman',
        cap: 1000,
        mobs: ['glacite_bowman_165'],
        bracket: 4
      },
      {
        name: '§aGlacite Caver',
        cap: 1000,
        mobs: ['glacite_caver_200'],
        bracket: 4
      },
      {
        name: '§aGlacite Mage',
        cap: 1000,
        mobs: ['glacite_mage_155'],
        bracket: 4
      },
      {
        name: '§aGlacite Mutt',
        cap: 1000,
        mobs: ['glacite_mutt_180'],
        bracket: 4
      },
      {
        name: '§aGlacite Walker',
        cap: 10000,
        mobs: ['ice_walker_45'],
        bracket: 2
      },
      {
        name: '§aGoblin',
        cap: 25000,
        mobs: [
          'goblin_weakling_melee_25',
          'goblin_weakling_melee_40',
          'goblin_weakling_bow_25',
          'goblin_weakling_bow_40',
          'goblin_creepertamer_100',
          'goblin_pitfighter_70',
          'goblin_knife_thrower_25',
          'goblin_knife_thrower_40',
          'goblin_flamethrower_100',
          'goblin_murderlover_200'
        ],
        bracket: 2
      },
      {
        name: '§aGoblin Raiders',
        cap: 1000,
        mobs: [
          'goblin_weakling_melee_5',
          'goblin_weakling_bow_5',
          'goblin_creepertamer_90',
          'goblin_creeper_20',
          'goblin_battler_60',
          'goblin_murderlover_150',
          'goblin_golem_150'
        ],
        bracket: 4
      },
      {
        name: '§aGolden Goblin',
        cap: 400,
        mobs: ['goblin_50'],
        bracket: 5
      },
      {
        name: '§aPowder Ghast',
        cap: 200,
        mobs: ['powder_ghast_1'],
        bracket: 1
      },
      {
        name: '§5Star Sentry',
        cap: 1000,
        mobs: ['crystal_sentry_50'],
        bracket: 4
      },
      {
        name: '§aTreasure Hoarder',
        cap: 1000,
        mobs: ['treasure_hoarder_70'],
        bracket: 4
      }
    ]
  },
  crystal_hollows: {
    name: 'Crystal Hollows',
    mobs: [
      {
        name: '§aAutomaton',
        cap: 10000,
        mobs: ['automaton_100', 'automaton_150'],
        bracket: 2
      },
      {
        name: '§c§lBal',
        cap: 250,
        mobs: ['bal_boss_100'],
        bracket: 6
      },
      {
        name: '§aBoss Corleone',
        cap: 100,
        mobs: ['team_treasurite_corleone_200'],
        bracket: 7
      },
      {
        name: '§eButterfly',
        cap: 1000,
        mobs: ['butterfly_100'],
        bracket: 4
      },
      {
        name: '§aGrunt',
        cap: 4000,
        mobs: [
          'team_treasurite_grunt_50',
          'team_treasurite_viper_100',
          'team_treasurite_wendy_100',
          'team_treasurite_sebastian_100'
        ],
        bracket: 3
      },
      {
        name: '§aKey Guardian',
        cap: 250,
        mobs: ['key_guardian_100'],
        bracket: 6
      },
      {
        name: '§aSludge',
        cap: 10000,
        mobs: ['sludge_5', 'sludge_10', 'sludge_100'],
        bracket: 2
      },
      {
        name: '§aThyst',
        cap: 4000,
        mobs: ['thyst_20'],
        bracket: 3
      },
      {
        name: '§aWorm',
        cap: 400,
        mobs: ['worm_5', 'scatha_10'],
        bracket: 5
      },
      {
        name: '§aYog',
        cap: 4000,
        mobs: ['yog_100'],
        bracket: 3
      }
    ]
  },
  foraging_1: {
    name: 'The Park',
    mobs: [
      {
        name: '§bHowling Spirit',
        cap: 10000,
        mobs: ['howling_spirit_35'],
        bracket: 2
      },
      {
        name: '§bPack Spirit',
        cap: 10000,
        mobs: ['pack_spirit_30'],
        bracket: 2
      },
      {
        name: '§bSoul of the Alpha',
        cap: 1000,
        mobs: ['soul_of_the_alpha_55'],
        bracket: 4
      }
    ]
  },
  spooky_festival: {
    name: 'Spooky Festival',
    mobs: [
      {
        name: '§8Crazy Witch',
        cap: 750,
        mobs: ['batty_witch_60'],
        bracket: 2
      },
      {
        name: '§6Headless Horseman',
        cap: 500,
        mobs: ['horseman_horse_100'],
        bracket: 7
      },
      {
        name: '§cPhantom Spirit',
        cap: 750,
        mobs: ['phantom_spirit_35'],
        bracket: 2
      },
      {
        name: '§6Scary Jerry',
        cap: 750,
        mobs: ['scary_jerry_30'],
        bracket: 2
      },
      {
        name: '§eTrick or Treater',
        cap: 750,
        mobs: ['trick_or_treater_30'],
        bracket: 2
      },
      {
        name: '§6Wither Gourd',
        cap: 750,
        mobs: ['wither_gourd_40'],
        bracket: 2
      },
      {
        name: '§8Wraith',
        cap: 750,
        mobs: ['wraith_50'],
        bracket: 2
      }
    ]
  },
  mythological_creatures: {
    name: 'Mythological Creatures',
    mobs: [
      {
        name: '§aGaia Construct',
        cap: 3000,
        mobs: ['gaia_construct_140', 'gaia_construct_260'],
        bracket: 4
      },
      {
        name: '§aMinos Champion',
        cap: 1000,
        mobs: ['minos_champion_175', 'minos_champion_310'],
        bracket: 5
      },
      {
        name: '§aMinos Hunter',
        cap: 1000,
        mobs: ['minos_hunter_125', 'minos_hunter_15', 'minos_hunter_60'],
        bracket: 5
      },
      {
        name: '§aMinos Inquisitor',
        cap: 500,
        mobs: ['minos_inquisitor_750'],
        bracket: 7
      },
      {
        name: '§aMinotaur',
        cap: 3000,
        mobs: ['minotaur_45', 'minotaur_120', 'minotaur_210'],
        bracket: 4
      },
      {
        name: '§aSiamese Lynx',
        cap: 3000,
        mobs: ['siamese_lynx_25', 'siamese_lynx_85', 'siamese_lynx_155'],
        bracket: 4
      }
    ]
  },
  jerry: {
    name: 'Jerry',
    mobs: [
      {
        name: '§9Blue Jerry',
        cap: 30,
        mobs: ['mayor_jerry_blue_2'],
        bracket: 5
      },
      {
        name: '§6Golden Jerry',
        cap: 20,
        mobs: ['mayor_jerry_golden_5'],
        bracket: 7
      },
      {
        name: '§aGreen Jerry',
        cap: 75,
        mobs: ['mayor_jerry_green_1'],
        bracket: 4
      },
      {
        name: '§5Purple Jerry',
        cap: 25,
        mobs: ['mayor_jerry_purple_3'],
        bracket: 6
      }
    ]
  },
  kuudra: {
    name: 'Kuudra',
    mobs: [
      {
        name: '§aBlazing Golem',
        cap: 300,
        mobs: ['blazing_golem_100', 'blazing_golem_200', 'blazing_golem_300', 'blazing_golem_400', 'blazing_golem_500'],
        bracket: 3
      },
      {
        name: '§aBlight',
        cap: 10000,
        mobs: ['blight_100', 'blight_200', 'blight_300', 'blight_400', 'blight_500'],
        bracket: 3
      },
      {
        name: '§aDropship',
        cap: 300,
        mobs: ['dropship_100', 'dropship_200', 'dropship_300', 'dropship_400', 'dropship_500'],
        bracket: 3
      },
      {
        name: '§aExplosive Imp',
        cap: 3000,
        mobs: ['explosive_imp_100', 'explosive_imp_200', 'explosive_imp_300', 'explosive_imp_400', 'explosive_imp_500'],
        bracket: 4
      },
      {
        name: '§aInferno Magma Cube',
        cap: 10000,
        mobs: [
          'inferno_magma_cube_100',
          'inferno_magma_cube_200',
          'inferno_magma_cube_300',
          'inferno_magma_cube_400',
          'inferno_magma_cube_500'
        ],
        bracket: 3
      },
      {
        name: '§aKuudra Berserker',
        cap: 10000,
        mobs: [
          'kuudra_berserker_100',
          'kuudra_berserker_200',
          'kuudra_berserker_300',
          'kuudra_berserker_400',
          'kuudra_berserker_500'
        ],
        bracket: 3
      },
      {
        name: '§aKuudra Follower',
        cap: 25000,
        mobs: [
          'kuudra_follower_100',
          'kuudra_follower_200',
          'kuudra_follower_300',
          'kuudra_follower_400',
          'kuudra_follower_500'
        ],
        bracket: 2
      },
      {
        name: '§aKuudra Knocker',
        cap: 10000,
        mobs: [
          'kuudra_knocker_100',
          'kuudra_knocker_200',
          'kuudra_knocker_300',
          'kuudra_knocker_400',
          'kuudra_knocker_500'
        ],
        bracket: 3
      },
      {
        name: '§aKuudra Landmine',
        cap: 10000,
        mobs: [
          'kuudra_landmine_100',
          'kuudra_landmine_200',
          'kuudra_landmine_300',
          'kuudra_landmine_400',
          'kuudra_landmine_500'
        ],
        bracket: 3
      },
      {
        name: '§aKuudra Slasher',
        cap: 30,
        mobs: [
          'kuudra_slasher_100',
          'kuudra_slasher_200',
          'kuudra_slasher_300',
          'kuudra_slasher_400',
          'kuudra_slasher_500'
        ],
        bracket: 5
      },
      {
        name: '§aMagma Follower',
        cap: 30,
        mobs: [
          'magma_follower_100',
          'magma_follower_200',
          'magma_follower_300',
          'magma_follower_400',
          'magma_follower_500'
        ],
        bracket: 5
      },
      {
        name: '§aWandering Blaze',
        cap: 3000,
        mobs: [
          'wandering_blaze_100',
          'wandering_blaze_200',
          'wandering_blaze_300',
          'wandering_blaze_400',
          'wandering_blaze_500'
        ],
        bracket: 4
      },
      {
        name: '§aWither Sentry',
        cap: 75,
        mobs: ['wither_sentry_100', 'wither_sentry_200', 'wither_sentry_300', 'wither_sentry_400', 'wither_sentry_500'],
        bracket: 4
      }
    ]
  },
  fishing: {
    name: 'Fishing',
    hasSubcategories: true,
    fishing: {
      name: 'Fishing',
      mobs: [
        {
          name: '§aAbyssal Miner',
          cap: 250,
          mobs: ['zombie_miner_150'],
          bracket: 6
        },
        {
          name: '§aAgarimoo',
          cap: 4000,
          mobs: ['agarimoo_35'],
          bracket: 3
        },
        {
          name: '§aBlue Ringed Octopus',
          cap: 400,
          mobs: ['blue_ringed_octopus_275'],
          bracket: 5
        },
        {
          name: '§aCarrot King',
          cap: 400,
          mobs: ['carrot_king_25'],
          bracket: 5
        },
        {
          name: '§aCatfish',
          cap: 1000,
          mobs: ['catfish_23'],
          bracket: 4
        },
        {
          name: '§aDeep Sea Protector',
          cap: 1000,
          mobs: ['deep_sea_protector_60'],
          bracket: 4
        },
        {
          name: '§aFrog Man',
          cap: 3000,
          mobs: ['frog_man_10'],
          bracket: 4
        },
        {
          name: '§aGuardian Defender',
          cap: 1000,
          mobs: ['guardian_defender_45'],
          bracket: 4
        },
        {
          name: '§aMithril Grubber',
          cap: 300,
          mobs: [
            'small_mithril_grubber_15',
            'medium_mithril_grubber_15',
            'large_mithril_grubber_15',
            'bloated_mithril_grubber_15'
          ],
          bracket: 3
        },
        {
          name: '§aNight Squid',
          cap: 1000,
          mobs: ['night_squid_6'],
          bracket: 4
        },
        {
          name: '§aOasis Rabbit',
          cap: 300,
          mobs: ['oasis_rabbit_10'],
          bracket: 3
        },
        {
          name: '§aOasis Sheep',
          cap: 300,
          mobs: ['oasis_sheep_10'],
          bracket: 3
        },
        {
          name: '§aPoisoned Water Worm',
          cap: 1000,
          mobs: ['poisoned_water_worm_25'],
          bracket: 4
        },
        {
          name: '§aRider of the Deep',
          cap: 4000,
          mobs: ['zombie_deep_20', 'chicken_deep_20'],
          bracket: 3
        },
        {
          name: '§aSea Archer',
          cap: 4000,
          mobs: ['sea_archer_15'],
          bracket: 3
        },
        {
          name: '§aSea Guardian',
          cap: 4000,
          mobs: ['sea_guardian_10'],
          bracket: 3
        },
        {
          name: '§aSea Leech',
          cap: 1000,
          mobs: ['sea_leech_30'],
          bracket: 4
        },
        {
          name: '§aSea Walker',
          cap: 4000,
          mobs: ['sea_walker_4'],
          bracket: 3
        },
        {
          name: '§aSea Witch',
          cap: 4000,
          mobs: ['sea_witch_15'],
          bracket: 3
        },
        {
          name: '§aSnapping Turtle',
          cap: 1000,
          mobs: ['snapping_turtle_30'],
          bracket: 4
        },
        {
          name: '§aSquid',
          cap: 10000,
          mobs: ['pond_squid_1'],
          bracket: 2
        },
        {
          name: '§aThe Sea Emperor',
          cap: 100,
          mobs: ['skeleton_emperor_150', 'guardian_emperor_150'],
          bracket: 7
        },
        {
          name: '§aWater Hydra',
          cap: 400,
          mobs: ['water_hydra_100'],
          bracket: 5
        },
        {
          name: '§aWater Worm',
          cap: 1000,
          mobs: ['water_worm_20'],
          bracket: 4
        },
        {
          name: '§aWiki Tiki',
          cap: 100,
          mobs: ['wiki_tiki_400'],
          bracket: 7
        }
      ]
    },
    lava: {
      name: 'Lava',
      mobs: [
        {
          name: '§aFiery Scuttler',
          cap: 400,
          mobs: ['fiery_scuttler_475'],
          bracket: 5
        },
        {
          name: '§aFire Eel',
          cap: 1000,
          mobs: ['fire_eel_240'],
          bracket: 4
        },
        {
          name: '§aFireproof Witch',
          cap: 1000,
          mobs: ['fireproof_witch_75'],
          bracket: 4
        },
        {
          name: '§aFlaming Worm',
          cap: 4000,
          mobs: ['flaming_worm_50'],
          bracket: 3
        },
        {
          name: '§aFried Chicken',
          cap: 3000,
          mobs: ['fried_chicken_30'],
          bracket: 4
        },
        {
          name: '§aLava Blaze',
          cap: 1000,
          mobs: ['lava_blaze_100'],
          bracket: 4
        },
        {
          name: '§aLava Flame',
          cap: 1000,
          mobs: ['lava_flame_230'],
          bracket: 4
        },
        {
          name: '§aLava Leech',
          cap: 4000,
          mobs: ['lava_leech_220'],
          bracket: 3
        },
        {
          name: '§aLava Pigman',
          cap: 1000,
          mobs: ['lava_pigman_100'],
          bracket: 4
        },
        {
          name: '§aLord Jawbus',
          cap: 100,
          mobs: ['lord_jawbus_600'],
          bracket: 7
        },
        {
          name: '§aMagma Slug',
          cap: 10000,
          mobs: ['magma_slug_200'],
          bracket: 2
        },
        {
          name: '§aMoogma',
          cap: 4000,
          mobs: ['moogma_210'],
          bracket: 3
        },
        {
          name: '§aPlhlegblast',
          cap: 7,
          mobs: ['pond_squid_300'],
          bracket: 7
        },
        {
          name: '§aPyroclastic Worm',
          cap: 1000,
          mobs: ['pyroclastic_worm_240'],
          bracket: 4
        },
        {
          name: '§aRagnarok',
          cap: 100,
          mobs: ['ragnarok_666'],
          bracket: 7
        },
        {
          name: '§aTaurus',
          cap: 1000,
          mobs: ['pig_rider_250'],
          bracket: 4
        },
        {
          name: '§aThunder',
          cap: 400,
          mobs: ['thunder_400'],
          bracket: 5
        }
      ]
    },
    spooky_festival: {
      name: 'Spooky Festival',
      mobs: [
        {
          name: '§aGrim Reaper',
          cap: 100,
          mobs: ['grim_reaper_190'],
          bracket: 7
        },
        {
          name: '§aNightmare',
          cap: 1000,
          mobs: ['nightmare_24'],
          bracket: 4
        },
        {
          name: '§aPhantom Fisher',
          cap: 250,
          mobs: ['phantom_fisherman_160'],
          bracket: 6
        },
        {
          name: '§aScarecrow',
          cap: 4000,
          mobs: ['scarecrow_9'],
          bracket: 3
        },
        {
          name: '§aWerewolf',
          cap: 1000,
          mobs: ['werewolf_50'],
          bracket: 4
        }
      ]
    },
    fishing_festival: {
      name: 'Fishing Festival',
      mobs: [
        {
          name: '§aBlue Shark',
          cap: 1000,
          mobs: ['blue_shark_20'],
          bracket: 4
        },
        {
          name: '§aGreat White Shark',
          cap: 400,
          mobs: ['great_white_shark_180'],
          bracket: 5
        },
        {
          name: '§aNurse Shark',
          cap: 4000,
          mobs: ['nurse_shark_6'],
          bracket: 3
        },
        {
          name: '§aTiger Shark',
          cap: 1000,
          mobs: ['tiger_shark_50'],
          bracket: 4
        }
      ]
    },
    winter: {
      name: 'Winter',
      mobs: [
        {
          name: '§aFrosty',
          cap: 4000,
          mobs: ['frosty_the_snowman_13'],
          bracket: 3
        },
        {
          name: '§aFrozen Steve',
          cap: 4000,
          mobs: ['frozen_steve_7'],
          bracket: 3
        },
        {
          name: '§aGrinch',
          cap: 250,
          mobs: ['grinch_21'],
          bracket: 6
        },
        {
          name: '§aNutcracker',
          cap: 400,
          mobs: ['nutcracker_50'],
          bracket: 5
        },
        {
          name: '§aReindrake',
          cap: 100,
          mobs: ['reindrake_100'],
          bracket: 7
        },
        {
          name: '§aYeti',
          cap: 250,
          mobs: ['yeti_175'],
          bracket: 6
        }
      ]
    },
    backwater_bayou: {
      name: 'Backwater Bayou',
      mobs: [
        {
          name: '§aAlligator',
          cap: 400,
          mobs: ['alligator_120'],
          bracket: 5
        },
        {
          name: '§aBanshee',
          cap: 1000,
          mobs: ['banshee_10'],
          bracket: 4
        },
        {
          name: '§aBayou Sludge',
          cap: 1000,
          mobs: ['bayou_sludge_25'],
          bracket: 4
        },
        {
          name: '§aDumpster Diver',
          cap: 1000,
          mobs: ['dumpster_diver_15'],
          bracket: 4
        },
        {
          name: '§aTitanoboa',
          cap: 100,
          mobs: ['titanoboa_240'],
          bracket: 7
        },
        {
          name: '§aTrash Gobbler',
          cap: 1000,
          mobs: ['trash_gobbler_8'],
          bracket: 4
        }
      ]
    }
  },
  catacombs: {
    name: 'Catacombs',
    mobs: [
      {
        name: '§a§d§lAngry Archaeologist',
        cap: 3000,
        mobs: [
          'diamond_guy_80',
          'diamond_guy_90',
          'diamond_guy_100',
          'diamond_guy_110',
          'diamond_guy_120',
          'diamond_guy_130',
          'diamond_guy_140',
          'diamond_guy_150',
          'diamond_guy_160',
          'diamond_guy_170',
          'master_diamond_guy_80',
          'master_diamond_guy_90',
          'master_diamond_guy_100',
          'master_diamond_guy_110',
          'master_diamond_guy_120',
          'master_diamond_guy_130',
          'master_diamond_guy_140',
          'master_diamond_guy_150',
          'master_diamond_guy_160',
          'master_diamond_guy_170'
        ],
        bracket: 7
      },
      {
        name: '§aBat',
        cap: 1000,
        mobs: ['dungeon_secret_bat_1'],
        bracket: 4
      },
      {
        name: '§aCellar Spider',
        cap: 1000,
        mobs: [
          'cellar_spider_45',
          'cellar_spider_65',
          'cellar_spider_75',
          'cellar_spider_85',
          'cellar_spider_95',
          'cellar_spider_105',
          'cellar_spider_115',
          'cellar_spider_125',
          'master_cellar_spider_45',
          'master_cellar_spider_65',
          'master_cellar_spider_75',
          'master_cellar_spider_85',
          'master_cellar_spider_95',
          'master_cellar_spider_105',
          'master_cellar_spider_115',
          'master_cellar_spider_125'
        ],
        bracket: 4
      },
      {
        name: '§aLonely Spider',
        cap: 25000,
        mobs: [
          'lonely_spider_35',
          'lonely_spider_55',
          'lonely_spider_65',
          'lonely_spider_75',
          'lonely_spider_85',
          'lonely_spider_95',
          'lonely_spider_105',
          'lonely_spider_115',
          'master_lonely_spider_35',
          'master_lonely_spider_55',
          'master_lonely_spider_65',
          'master_lonely_spider_75',
          'master_lonely_spider_85',
          'master_lonely_spider_95',
          'master_lonely_spider_105',
          'master_lonely_spider_115'
        ],
        bracket: 4
      },
      {
        name: '§aCrypt Dreadlord',
        cap: 25000,
        mobs: [
          'crypt_dreadlord_47',
          'crypt_dreadlord_67',
          'crypt_dreadlord_77',
          'crypt_dreadlord_87',
          'crypt_dreadlord_97',
          'crypt_dreadlord_107',
          'crypt_dreadlord_117',
          'crypt_dreadlord_127',
          'master_crypt_dreadlord_47',
          'master_crypt_dreadlord_67',
          'master_crypt_dreadlord_77',
          'master_crypt_dreadlord_87',
          'master_crypt_dreadlord_97',
          'master_crypt_dreadlord_107',
          'master_crypt_dreadlord_117',
          'master_crypt_dreadlord_127'
        ],
        bracket: 4
      },
      {
        name: '§aCrypt Lurker',
        cap: 25000,
        mobs: [
          'crypt_lurker_41',
          'crypt_lurker_61',
          'crypt_lurker_71',
          'crypt_lurker_81',
          'crypt_lurker_91',
          'crypt_lurker_101',
          'crypt_lurker_111',
          'crypt_lurker_121',
          'master_crypt_lurker_41',
          'master_crypt_lurker_61',
          'master_crypt_lurker_71',
          'master_crypt_lurker_81',
          'master_crypt_lurker_91',
          'master_crypt_lurker_101',
          'master_crypt_lurker_111',
          'master_crypt_lurker_121'
        ],
        bracket: 4
      },
      {
        name: '§aCrypt Souleater',
        cap: 25000,
        mobs: [
          'crypt_souleater_45',
          'crypt_souleater_65',
          'crypt_souleater_75',
          'crypt_souleater_85',
          'crypt_souleater_95',
          'crypt_souleater_105',
          'crypt_souleater_115',
          'crypt_souleater_125',
          'master_crypt_souleater_45',
          'master_crypt_souleater_65',
          'master_crypt_souleater_75',
          'master_crypt_souleater_85',
          'master_crypt_souleater_95',
          'master_crypt_souleater_105',
          'master_crypt_souleater_115',
          'master_crypt_souleater_125'
        ],
        bracket: 4
      },
      {
        name: '§aFels',
        cap: 10000,
        mobs: [
          'tentaclees_90',
          'tentaclees_100',
          'tentaclees_110',
          'master_tentaclees_90',
          'master_tentaclees_100',
          'master_tentaclees_110'
        ],
        bracket: 5
      },
      {
        name: '§aGolem',
        cap: 1000,
        mobs: ['sadan_golem_1', 'master_sadan_golem_1'],
        bracket: 4
      },
      {
        name: '§a§d§lKing Midas',
        cap: 750,
        mobs: [
          'king_midas_130',
          'king_midas_140',
          'king_midas_150',
          'king_midas_160',
          'king_midas_170',
          'master_king_midas_130',
          'master_king_midas_140',
          'master_king_midas_150',
          'master_king_midas_160',
          'master_king_midas_170'
        ],
        bracket: 6
      },
      {
        name: '§a§d§lLost Adventurer',
        cap: 3000,
        mobs: [
          'lost_adventurer_80',
          'lost_adventurer_81',
          'lost_adventurer_82',
          'lost_adventurer_83',
          'lost_adventurer_85',
          'lost_adventurer_86',
          'lost_adventurer_87',
          'lost_adventurer_88',
          'lost_adventurer_90',
          'lost_adventurer_91',
          'lost_adventurer_92',
          'lost_adventurer_93',
          'lost_adventurer_100',
          'lost_adventurer_101',
          'lost_adventurer_102',
          'lost_adventurer_103',
          'lost_adventurer_110',
          'lost_adventurer_111',
          'lost_adventurer_112',
          'lost_adventurer_113',
          'lost_adventurer_120',
          'lost_adventurer_121',
          'lost_adventurer_122',
          'lost_adventurer_123',
          'lost_adventurer_130',
          'lost_adventurer_131',
          'lost_adventurer_132',
          'lost_adventurer_133',
          'lost_adventurer_134',
          'lost_adventurer_135',
          'lost_adventurer_140',
          'lost_adventurer_141',
          'lost_adventurer_142',
          'lost_adventurer_143',
          'lost_adventurer_144',
          'lost_adventurer_150',
          'lost_adventurer_151',
          'lost_adventurer_152',
          'lost_adventurer_153',
          'lost_adventurer_154',
          'lost_adventurer_160',
          'lost_adventurer_161',
          'lost_adventurer_162',
          'lost_adventurer_163',
          'lost_adventurer_164',
          'master_lost_adventurer_80',
          'master_lost_adventurer_81',
          'master_lost_adventurer_82',
          'master_lost_adventurer_83',
          'master_lost_adventurer_85',
          'master_lost_adventurer_86',
          'master_lost_adventurer_87',
          'master_lost_adventurer_88',
          'master_lost_adventurer_90',
          'master_lost_adventurer_91',
          'master_lost_adventurer_92',
          'master_lost_adventurer_93',
          'master_lost_adventurer_100',
          'master_lost_adventurer_101',
          'master_lost_adventurer_102',
          'master_lost_adventurer_103',
          'master_lost_adventurer_110',
          'master_lost_adventurer_111',
          'master_lost_adventurer_112',
          'master_lost_adventurer_113',
          'master_lost_adventurer_120',
          'master_lost_adventurer_121',
          'master_lost_adventurer_122',
          'master_lost_adventurer_123',
          'master_lost_adventurer_130',
          'master_lost_adventurer_131',
          'master_lost_adventurer_132',
          'master_lost_adventurer_133',
          'master_lost_adventurer_134',
          'master_lost_adventurer_135',
          'master_lost_adventurer_140',
          'master_lost_adventurer_141',
          'master_lost_adventurer_142',
          'master_lost_adventurer_143',
          'master_lost_adventurer_144',
          'master_lost_adventurer_150',
          'master_lost_adventurer_151',
          'master_lost_adventurer_152',
          'master_lost_adventurer_153',
          'master_lost_adventurer_154',
          'master_lost_adventurer_160',
          'master_lost_adventurer_161',
          'master_lost_adventurer_162',
          'master_lost_adventurer_163',
          'master_lost_adventurer_164'
        ],
        bracket: 7
      },
      {
        name: '§aMimic',
        cap: 1000,
        mobs: ['mimic_115', 'mimic_125', 'master_mimic_115', 'master_mimic_125'],
        bracket: 4
      },
      {
        name: '§aScared Skeleton',
        cap: 4000,
        mobs: [
          'scared_skeleton_42',
          'scared_skeleton_62',
          'scared_skeleton_72',
          'master_scared_skeleton_42',
          'master_scared_skeleton_62',
          'master_scared_skeleton_72'
        ],
        bracket: 3
      },
      {
        name: '§a§d§lShadow Assassin',
        cap: 3000,
        mobs: [
          'shadow_assassin_120',
          'shadow_assassin_130',
          'shadow_assassin_140',
          'shadow_assassin_150',
          'shadow_assassin_160',
          'shadow_assassin_170',
          'shadow_assassin_171',
          'master_shadow_assassin_120',
          'master_shadow_assassin_130',
          'master_shadow_assassin_140',
          'master_shadow_assassin_150',
          'master_shadow_assassin_160',
          'master_shadow_assassin_170',
          'master_shadow_assassin_171'
        ],
        bracket: 7
      },
      {
        name: '§aSkeleton Grunt',
        cap: 4000,
        mobs: [
          'skeleton_grunt_40',
          'skeleton_grunt_60',
          'skeleton_grunt_70',
          'skeleton_grunt_80',
          'master_skeleton_grunt_40',
          'master_skeleton_grunt_60',
          'master_skeleton_grunt_70',
          'master_skeleton_grunt_80'
        ],
        bracket: 3
      },
      {
        name: '§aSkeleton Lord',
        cap: 1000,
        mobs: ['skeleton_lord_150', 'master_skeleton_lord_150'],
        bracket: 5
      },
      {
        name: '§aSkeleton Master',
        cap: 25000,
        mobs: [
          'skeleton_master_48',
          'skeleton_master_68',
          'skeleton_master_78',
          'skeleton_master_88',
          'skeleton_master_98',
          'skeleton_master_108',
          'skeleton_master_118',
          'skeleton_master_128',
          'master_skeleton_master_48',
          'master_skeleton_master_68',
          'master_skeleton_master_78',
          'master_skeleton_master_88',
          'master_skeleton_master_98',
          'master_skeleton_master_108',
          'master_skeleton_master_118',
          'master_skeleton_master_128'
        ],
        bracket: 4
      },
      {
        name: '§aSkeleton Soldier',
        cap: 40000,
        mobs: [
          'skeleton_soldier_46',
          'skeleton_soldier_66',
          'skeleton_soldier_76',
          'skeleton_soldier_86',
          'skeleton_soldier_96',
          'skeleton_soldier_106',
          'skeleton_soldier_116',
          'skeleton_soldier_126',
          'master_skeleton_soldier_46',
          'master_skeleton_soldier_66',
          'master_skeleton_soldier_76',
          'master_skeleton_soldier_86',
          'master_skeleton_soldier_96',
          'master_skeleton_soldier_106',
          'master_skeleton_soldier_116',
          'master_skeleton_soldier_126'
        ],
        bracket: 1
      },
      {
        name: '§aSkeletor',
        cap: 10000,
        mobs: [
          'skeletor_80',
          'skeletor_90',
          'skeletor_100',
          'skeletor_101',
          'skeletor_110',
          'skeletor_120',
          'skeletor_prime_100',
          'skeletor_prime_110',
          'skeletor_prime_120',
          'master_skeletor_80',
          'master_skeletor_90',
          'master_skeletor_100',
          'master_skeletor_101',
          'master_skeletor_110',
          'master_skeletor_120',
          'master_skeletor_prime_100',
          'master_skeletor_prime_110',
          'master_skeletor_prime_120'
        ],
        bracket: 5
      },
      {
        name: '§aSniper',
        cap: 4000,
        mobs: [
          'sniper_skeleton_43',
          'sniper_skeleton_63',
          'sniper_skeleton_73',
          'sniper_skeleton_83',
          'sniper_skeleton_93',
          'sniper_skeleton_103',
          'sniper_skeleton_113',
          'sniper_skeleton_123',
          'master_sniper_skeleton_43',
          'master_sniper_skeleton_63',
          'master_sniper_skeleton_73',
          'master_sniper_skeleton_83',
          'master_sniper_skeleton_93',
          'master_sniper_skeleton_103',
          'master_sniper_skeleton_113',
          'master_sniper_skeleton_123'
        ],
        bracket: 3
      },
      {
        name: '§aSuper Archer',
        cap: 10000,
        mobs: [
          'super_archer_90',
          'super_archer_100',
          'super_archer_110',
          'super_archer_120',
          'master_super_archer_90',
          'master_super_archer_100',
          'master_super_archer_110',
          'master_super_archer_120'
        ],
        bracket: 5
      },
      {
        name: '§aSuper Tank Zombie',
        cap: 25000,
        mobs: [
          'super_tank_zombie_90',
          'super_tank_zombie_100',
          'super_tank_zombie_110',
          'super_tank_zombie_120',
          'master_super_tank_zombie_90',
          'master_super_tank_zombie_100',
          'master_super_tank_zombie_110',
          'master_super_tank_zombie_120'
        ],
        bracket: 4
      },
      {
        name: '§aTank Zombie',
        cap: 4000,
        mobs: [
          'crypt_tank_zombie_40',
          'crypt_tank_zombie_60',
          'crypt_tank_zombie_70',
          'crypt_tank_zombie_80',
          'crypt_tank_zombie_90',
          'master_crypt_tank_zombie_40',
          'master_crypt_tank_zombie_60',
          'master_crypt_tank_zombie_70',
          'master_crypt_tank_zombie_80',
          'master_crypt_tank_zombie_90'
        ],
        bracket: 3
      },
      {
        name: '§aTerracotta',
        cap: 40000,
        mobs: ['sadan_statue_1', 'master_sadan_statue_1'],
        bracket: 1
      },
      {
        name: '§a§4§lUndead',
        cap: 10000,
        mobs: [
          'watcher_summon_undead_1',
          'watcher_summon_undead_2',
          'watcher_summon_undead_3',
          'watcher_summon_undead_4',
          'watcher_summon_undead_5',
          'watcher_summon_undead_6',
          'watcher_summon_undead_7',
          'watcher_summon_undead_8',
          'master_watcher_summon_undead_1',
          'master_watcher_summon_undead_2',
          'master_watcher_summon_undead_3',
          'master_watcher_summon_undead_4',
          'master_watcher_summon_undead_5',
          'master_watcher_summon_undead_6',
          'master_watcher_summon_undead_7',
          'master_watcher_summon_undead_8'
        ],
        bracket: 2
      },
      {
        name: '§aUndead Skeleton',
        cap: 25000,
        mobs: [
          'dungeon_respawning_skeleton_40',
          'dungeon_respawning_skeleton_skull_40',
          'dungeon_respawning_skeleton_60',
          'dungeon_respawning_skeleton_70',
          'dungeon_respawning_skeleton_80',
          'dungeon_respawning_skeleton_90',
          'dungeon_respawning_skeleton_100',
          'dungeon_respawning_skeleton_110',
          'dungeon_respawning_skeleton_120',
          'master_dungeon_respawning_skeleton_40',
          'master_dungeon_respawning_skeleton_60',
          'master_dungeon_respawning_skeleton_70',
          'master_dungeon_respawning_skeleton_80',
          'master_dungeon_respawning_skeleton_90',
          'master_dungeon_respawning_skeleton_100',
          'master_dungeon_respawning_skeleton_110',
          'master_dungeon_respawning_skeleton_120'
        ],
        bracket: 4
      },
      {
        name: '§aWither Guard',
        cap: 10000,
        mobs: ['wither_guard_100', 'master_wither_guard_100'],
        bracket: 5
      },
      {
        name: '§aWither Husk',
        cap: 10000,
        mobs: ['master_wither_husk_100'],
        bracket: 5
      },
      {
        name: '§aWither Miner',
        cap: 25000,
        mobs: ['wither_miner_100', 'master_wither_miner_100'],
        bracket: 4
      },
      {
        name: '§aWithermancer',
        cap: 25000,
        mobs: [
          'crypt_witherskeleton_90',
          'crypt_witherskeleton_100',
          'crypt_witherskeleton_110',
          'crypt_witherskeleton_120',
          'master_crypt_witherskeleton_90',
          'master_crypt_witherskeleton_100',
          'master_crypt_witherskeleton_110',
          'master_crypt_witherskeleton_120'
        ],
        bracket: 4
      },
      {
        name: '§aZombie Commander',
        cap: 3000,
        mobs: [
          'zombie_commander_110',
          'zombie_commander_120',
          'master_zombie_commander_110',
          'master_zombie_commander_120'
        ],
        bracket: 4
      },
      {
        name: '§aZombie Grunt',
        cap: 4000,
        mobs: [
          'zombie_grunt_40',
          'zombie_grunt_60',
          'zombie_grunt_70',
          'zombie_grunt_80',
          'master_zombie_grunt_40',
          'master_zombie_grunt_60',
          'master_zombie_grunt_70',
          'master_zombie_grunt_80'
        ],
        bracket: 3
      },
      {
        name: '§aZombie Knight',
        cap: 10000,
        mobs: [
          'zombie_knight_86',
          'zombie_knight_96',
          'zombie_knight_106',
          'zombie_knight_116',
          'zombie_knight_126',
          'master_zombie_knight_86',
          'master_zombie_knight_96',
          'master_zombie_knight_106',
          'master_zombie_knight_116',
          'master_zombie_knight_126'
        ],
        bracket: 5
      },
      {
        name: '§aZombie Lord',
        cap: 1000,
        mobs: ['zombie_lord_150', 'master_zombie_lord_150'],
        bracket: 5
      },
      {
        name: '§aZombie Soldier',
        cap: 40000,
        mobs: [
          'zombie_soldier_83',
          'zombie_soldier_93',
          'zombie_soldier_103',
          'zombie_soldier_113',
          'zombie_soldier_123',
          'master_zombie_soldier_83',
          'master_zombie_soldier_93',
          'master_zombie_soldier_103',
          'master_zombie_soldier_113',
          'master_zombie_soldier_123'
        ],
        bracket: 1
      }
    ]
  },
  garden: {
    name: 'Garden',
    mobs: [
      {
        name: '§aBeetle',
        cap: 250,
        mobs: ['pest_beetle_1'],
        bracket: 6
      },
      {
        name: '§aCricket',
        cap: 250,
        mobs: ['pest_cricket_1'],
        bracket: 6
      },
      {
        name: '§aEarthworm',
        cap: 250,
        mobs: ['pest_worm_1'],
        bracket: 6
      },
      {
        name: '§aField Mouse',
        cap: 100,
        mobs: ['pest_mouse_1'],
        bracket: 7
      },
      {
        name: '§aFly',
        cap: 250,
        mobs: ['pest_fly_1'],
        bracket: 6
      },
      {
        name: '§aLocust',
        cap: 250,
        mobs: ['pest_locust_1'],
        bracket: 6
      },
      {
        name: '§aMite',
        cap: 250,
        mobs: ['pest_mite_1'],
        bracket: 6
      },
      {
        name: '§aMosquito',
        cap: 250,
        mobs: ['pest_mosquito_1'],
        bracket: 6
      },
      {
        name: '§aMoth',
        cap: 250,
        mobs: ['pest_moth_1'],
        bracket: 6
      },
      {
        name: '§aRat',
        cap: 250,
        mobs: ['pest_rat_1'],
        bracket: 6
      },
      {
        name: '§aSlug',
        cap: 250,
        mobs: ['pest_slug_1'],
        bracket: 6
      }
    ]
  }
};
