import SkyblockInventoryItem from '../Structures/SkyBlock/SkyblockInventoryItem.ts';

export type SkyblockGemstoneQuality = 'Rough' | 'Flawed' | 'Fine' | 'Flawless' | 'Perfect';
export type TrophyFishRank = 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
export type DungeonClass = 'healer' | 'mage' | 'berserk' | 'archer' | 'tank';
export type CrimsonIsleFactions = 'mages' | 'barbarians';
export type CrimsonIsleBelt = 'White' | 'Yellow' | 'Green' | 'Blue' | 'Brown' | 'Black';
export type CrimsonIsleDojoRank = 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
export type Rarity =
  | 'COMMON'
  | 'UNCOMMON'
  | 'RARE'
  | 'EPIC'
  | 'LEGENDARY'
  | 'MYTHIC'
  | 'DIVINE'
  | 'SPECIAL'
  | 'VERY_SPECIAL';

export interface Equipment {
  gauntlet: SkyblockInventoryItem | null;
  belt: SkyblockInventoryItem | null;
  cloak: SkyblockInventoryItem | null;
  necklace: SkyblockInventoryItem | null;
}

export interface Armor {
  helmet: SkyblockInventoryItem | null;
  chestplate: SkyblockInventoryItem | null;
  leggings: SkyblockInventoryItem | null;
  boots: SkyblockInventoryItem | null;
}

export interface MemberStatsCandyCollected {
  green: number;
  purple: number;
  total: number;
}

export interface MemberStatsFestival {
  year: number;
  collected: MemberStatsCandyCollected;
}

export interface MemberStatsCandy extends MemberStatsCandyCollected {
  festivals: MemberStatsFestival[];
}

export interface MemberStatsPetMilestones {
  oresMinned: number;
  seaCreaturesKilled: number;
}

export interface MemberStatsAuctionsStats {
  uncommon: number;
  common: number;
  rare: number;
  epic: number;
  legendary: number;
  special: number;
  mythic: number;
  total: number;
}

export interface MemberStatsAuctions {
  bids: number;
  highestBid: number;
  goldSpent: number;
  goldEarnt: number;
  auctionsWon: number;
  auctionsCompleted: number;
  auctionsCreated: number;
  auctionFees: number;
  auctionsWithOutBids: number;
  sold: MemberStatsAuctionsStats;
  bought: MemberStatsAuctionsStats;
}

export interface MemberStatsGifts {
  given: number;
  received: number;
}

export interface MemberStatsFishing {
  total: number;
  normal: number;
  tresure: number;
  largeTresure: number;
}

export interface MemberStatsBurrow {
  total: number;
  common: number;
}

export interface MemberStatsMythos {
  kills: number;
  burrowsDugNext: MemberStatsBurrow;
  burrowsDugCombat: MemberStatsBurrow;
  burrowsDugTreasure: MemberStatsBurrow;
  burrowsDugComplate: MemberStatsBurrow;
}

export interface JacobDataMedals {
  gold: number;
  silver: number;
  bronze: number;
}

export interface JacobDataPerks {
  doubleDrops: number;
  farmingLevelCap: number;
  personalBests: boolean;
}

export interface JacobData {
  medals: JacobDataMedals;
  perks: JacobDataPerks;
  contests: Record<string, any>;
}

export interface ChocolateFactoryDataEmployees {
  bro: number;
  cousin: number;
  sis: number;
  father: number;
  grandma: number;
  dog: number;
  uncle: number;
}

export interface ChocolateFactoryDataChocolate {
  current: number;
  total: number;
  sincePrestige: number;
}

export interface ChocolateFactoryDataTimeTower {
  charges: number;
  level: number;
}

export interface ChocolateFactoryDataUpgrades {
  click: number;
  multiplier: number;
  rabbitRarity: number;
}

export interface ChocolateFactoryDataGoldenClick {
  amount: number;
  year: number;
}

export interface ChocolateFactoryData {
  employees: ChocolateFactoryDataEmployees;
  chocolate: ChocolateFactoryDataChocolate;
  timeTower: ChocolateFactoryDataTimeTower;
  upgrades: ChocolateFactoryDataUpgrades;
  goldenClick: ChocolateFactoryDataGoldenClick;
  barnCapacity: number;
  prestige: number;
}

export interface SlayerData {
  xp: number;
  tier1: number;
  tier2: number;
  tier3: number;
  tier4: number;
  tier5: number;
  level: number;
}

export interface Slayer {
  zombie: SlayerData;
  spider: SlayerData;
  wolf: SlayerData;
  enderman: SlayerData;
  blaze: SlayerData;
  vampire: SlayerData;
}
export interface SkillLevel {
  xp: number;
  level: number;
  maxLevel: number;
  xpCurrent: number;
  xpForNext: number;
  progress: number;
  cosmetic: boolean;
}

export interface Skills {
  combat: SkillLevel;
  farming: SkillLevel;
  fishing: SkillLevel;
  mining: SkillLevel;
  foraging: SkillLevel;
  enchanting: SkillLevel;
  alchemy: SkillLevel;
  carpentry: SkillLevel;
  runecrafting: SkillLevel;
  taming: SkillLevel;
  social: SkillLevel;
  average: number;
}

export interface RawDungeonRun {
  timestamp: number;
  score_exploration: number;
  score_speed: number;
  score_skill: number;
  score_bonus: number;
  dungeon_class: DungeonClass;
  teammates: string[];
  elapsed_time: number;
  damage_dealt: number;
  deaths: number;
  mobs_killed: number;
  secrets_found: number;
  damage_mitigated: number;
  ally_healing: number;
}

export interface DungeonsFloorStats {
  fastestRun: RawDungeonRun;
  fastestSRun: RawDungeonRun;
  fastestSPlusRun: RawDungeonRun;
  completions: number;
}

export interface DungeonsFloors {
  entrance: DungeonsFloorStats;
  floor1: DungeonsFloorStats;
  floor2: DungeonsFloorStats;
  floor3: DungeonsFloorStats;
  floor4: DungeonsFloorStats;
  floor5: DungeonsFloorStats;
  floor6: DungeonsFloorStats;
  floor7: DungeonsFloorStats;
  masterMode1: DungeonsFloorStats;
  masterMode2: DungeonsFloorStats;
  masterMode3: DungeonsFloorStats;
  masterMode4: DungeonsFloorStats;
  masterMode5: DungeonsFloorStats;
  masterMode6: DungeonsFloorStats;
  masterMode7: DungeonsFloorStats;
}

export interface DungeonsClasses {
  healer: SkillLevel;
  mage: SkillLevel;
  berserk: SkillLevel;
  archer: SkillLevel;
  tank: SkillLevel;
  selected: DungeonClass;
}

export interface DungeonsEssence {
  diamond: number;
  dragon: number;
  spider: number;
  wither: number;
  undead: number;
  gold: number;
  ice: number;
  crimson: number;
}
export interface DungeonsCompletions {
  catacombs: Record<string, number>;
  masterMode: Record<string, number>;
}

export interface Dungeons {
  experience: SkillLevel;
  secrets: number;
  completions: DungeonsCompletions;
  floors: DungeonsFloors;
  classes: DungeonsClasses;
  essence: DungeonsEssence;
}

export interface CrimsonIsleKuudra {
  none: number;
  hot: number;
  burning: number;
  fiery: number;
  highestWaveHot: number;
  highestWaveFiery: number;
  infernal: number;
  highestWaveInfernal: number;
  highestWaveBurning: number;
}

export interface CrimsonIsleReputation {
  mages: number;
  barbarians: number;
}

export interface CrimsonIsleTrophyFishCaught {
  total: number;
  bronze: number;
  silver: number;
  gold: number;
  diamond: number;
}

export interface CrimsonIsleTrophyFish {
  rank: TrophyFishRank;
  caught: CrimsonIsleTrophyFishCaught;
}

export interface CrimsonIsleDojoMinigame {
  points: number;
  rank: CrimsonIsleDojoRank;
}

export interface CrimsonIsleDojo {
  belt: CrimsonIsleBelt;
  force: CrimsonIsleDojoMinigame;
  stamina: CrimsonIsleDojoMinigame;
  mastery: CrimsonIsleDojoMinigame;
  discipline: CrimsonIsleDojoMinigame;
  swiftness: CrimsonIsleDojoMinigame;
  control: CrimsonIsleDojoMinigame;
  tenacity: CrimsonIsleDojoMinigame;
}

export interface CrimsonIsle {
  faction: CrimsonIsleFactions | null;
  reputation: CrimsonIsleReputation;
  trophyFish: CrimsonIsleTrophyFish;
  dojo: CrimsonIsleDojo;
  kuudra: CrimsonIsleKuudra;
}

export interface HOTMPowderData {
  spent: number;
  current: number;
  total: number;
}

export interface HOTMPowder {
  mithril: HOTMPowderData;
  gemstone: HOTMPowderData;
  glacite: HOTMPowderData;
}

export interface HOTM {
  experience: SkillLevel;
  ability: string;
  powder: HOTMPowder;
}
export interface SkyblockGardenVisitorServed {
  total: number;
  unique: number;
}

export interface SkyblockGardenVisitor {
  visited: Record<string, number>;
  completed: Record<string, number>;
  served: SkyblockGardenVisitorServed;
}

export interface SkyblockGardenComposterUpgrades {
  speed: number;
  multiDrop: number;
  fuelCap: number;
  organicMatterCap: number;
  costReduction: number;
}

export interface SkyblockGardenComposter {
  organicMatter: number;
  fuelUnits: number;
  compostUnits: number;
  compostItems: number;
  conversionTicks: number;
  upgrades: SkyblockGardenComposterUpgrades;
}

export interface SkyblockGarenCrops {
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

export interface SkyblockGardenCropMilestones {
  wheat: SkillLevel;
  carrot: SkillLevel;
  sugarCane: SkillLevel;
  potato: SkillLevel;
  pumpkin: SkillLevel;
  melon: SkillLevel;
  cactus: SkillLevel;
  cocoaBeans: SkillLevel;
  mushroom: SkillLevel;
  netherWart: SkillLevel;
}

export interface ProductStatus {
  sellPrice: number;
  buyPrice: number;
  sellVolume: number;
  buyVolume: number;
  sellMovingWeek: number;
  buyMovingWeek: number;
  sellOrders: number;
  buyOrders: number;
}
