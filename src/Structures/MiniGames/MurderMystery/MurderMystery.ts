import Emblem from '../Shared/Emblem/Emblem.js';
import LeaderboardSettings from '../Shared/LeaderboardSettings.js';
import MurderMysteryDescent from './MurderMysteryDescent.js';
import MurderMysteryFavorites from './MurderMysteryFavorites.ts';
import MurderMysteryGamemode from './MurderMysteryGamemode.ts';
import MurderMysteryKnifeSkinPrestige from './MurderMysteryKnifeSkinPrestige.ts';
import MurderMysteryMap from './MurderMysteryMap.ts';
import type {
  MurderMysteryAnimatedHat,
  MurderMysteryDeathCry,
  MurderMysteryDescentMode,
  MurderMysteryEmblemIcon,
  MurderMysteryGesture,
  MurderMysteryGravestone,
  MurderMysteryItem,
  MurderMysteryKillNote,
  MurderMysteryKnifeSkin,
  MurderMysteryLastWords,
  MurderMysteryMapName,
  MurderMysteryProjectileTrail,
  MurderMysteryRole,
  MurderMysteryVictoryDance,
  ShopSort
} from '../../../Types/Player.ts';

class MurderMystery {
  activeAnimatedHat: MurderMysteryAnimatedHat | 'UNKNOWN';
  activeDeathCry: MurderMysteryDeathCry | 'UNKNOWN';
  activeGesture: MurderMysteryGesture | 'UNKNOWN';
  activeGravestone: MurderMysteryGravestone | 'UNKNOWN';
  activeKillNote: MurderMysteryKillNote | 'UNKNOWN';
  activeKnifeSkin: MurderMysteryKnifeSkin | 'UNKNOWN';
  activeLastWords: MurderMysteryLastWords | 'UNKNOWN';
  activeProjectileTrail: MurderMysteryProjectileTrail | 'UNKNOWN';
  activeVictoryDance: MurderMysteryVictoryDance | 'UNKNOWN';
  alphaWins: number;
  bowKills: number;
  chestHistoryNew: MurderMysteryItem[];
  tokens: number;
  tokensPickedUp: number;
  deaths: number;
  descent: MurderMysteryDescent;
  detectiveWins: number;
  doEmblemsInGame: boolean;
  doHeartbeatSounds: boolean;
  doHints: boolean;
  emblem: Emblem<MurderMysteryEmblemIcon>;
  favoriteDescentMode: MurderMysteryDescentMode | 'UNKNOWN';
  favorites: MurderMysteryFavorites;
  games: number;
  grantedChests: number;
  kills: number;
  knifeSkinPrestiges: MurderMysteryKnifeSkinPrestige;
  leaderboardSettings: LeaderboardSettings<'UNKNOWN'>;
  knifeKills: number;
  lastOneAlive: number;
  longestTimeAsSurvivorSeconds: number;
  mapsConsumablesUsed: MurderMysteryMapName[];
  mapsMurdererTrapKills: MurderMysteryMapName[];
  chestHistory: MurderMysteryItem[];
  chests: number;
  christmasChests: number;
  easterChests: number;
  goldenChests: number;
  halloweenChests: number;
  lunarChests: number;
  merryChests: number;
  murdererWins: number;
  books: MurderMysteryRole[];
  quickestDetectiveWinTimeSeconds: number;
  quickestMurdererWinTimeSeconds: number;
  quickestShowdownWinTimeSeconds: number;
  shopSort: ShopSort | 'UNKNOWN';
  shopSortEnableOwnedFirst: boolean;
  showdownPotg: number;
  showQueueBook: boolean;
  spookyOpenAch: number;
  suicides: number;
  survivorWins: number;
  thrownKnifeKills: number;
  totalTimeSurvivedSeconds: number;
  trapKills: number;
  wasHero: number;
  wins: number;
  openedChests: number;
  openedCommons: number;
  openedEpics: number;
  openedLegendaries: number;
  openedRares: number;
  ancientTomb: MurderMysteryMap;
  aquarium: MurderMysteryMap;
  archives: MurderMysteryMap;
  archivesTopFloor: MurderMysteryMap;
  cattleridgeFarm: MurderMysteryMap;
  cruiseShip: MurderMysteryMap;
  darkfall: MurderMysteryMap;
  easterWorld: MurderMysteryMap;
  goldRush: MurderMysteryMap;
  headquarters: MurderMysteryMap;
  hollywood: MurderMysteryMap;
  hypixelWorld: MurderMysteryMap;
  library: MurderMysteryMap;
  mountain: MurderMysteryMap;
  sanPeratico: MurderMysteryMap;
  sanPeraticoV2: MurderMysteryMap;
  skywayPier: MurderMysteryMap;
  snowfall: MurderMysteryMap;
  snowglobe: MurderMysteryMap;
  spookyMansion: MurderMysteryMap;
  subway: MurderMysteryMap;
  towerfall: MurderMysteryMap;
  transport: MurderMysteryMap;
  villa: MurderMysteryMap;
  widowsDen: MurderMysteryMap;
  assassins: MurderMysteryGamemode;
  classic: MurderMysteryGamemode;
  doubleUp: MurderMysteryGamemode;
  hardcode: MurderMysteryGamemode;
  infection: MurderMysteryGamemode;
  showdown: MurderMysteryGamemode;
  constructor(data: Record<string, any>) {
    this.activeAnimatedHat = data?.active_animated_hat || 'UNKNOWN';
    this.activeDeathCry = data?.active_deathcry || 'UNKNOWN';
    this.activeGesture = data?.active_gesture || 'UNKNOWN';
    this.activeGravestone = data?.active_gravestone || 'UNKNOWN';
    this.activeKillNote = data?.active_kill_note || 'UNKNOWN';
    this.activeKnifeSkin = data?.active_knife_skin || 'UNKNOWN';
    this.activeLastWords = data?.active_last_words || 'UNKNOWN';
    this.activeProjectileTrail = data?.active_projectile_trail || data?.activeProjectileTrail || 'UNKNOWN';
    this.activeVictoryDance = data?.active_victory_dance || 'UNKNOWN';
    this.alphaWins = data?.alpha_wins || 0;
    this.bowKills = data?.bow_kills || 0;
    this.chestHistoryNew = data?.chest_history_new || [];
    this.tokens = data?.coins || 0;
    this.tokensPickedUp = data?.coins_pickedup || 0;
    this.deaths = data?.deaths || 0;
    this.descent = new MurderMysteryDescent(data?.descent || {});
    this.detectiveWins = data?.detective_wins || 0;
    this.doEmblemsInGame = data?.doEmblemsInGame || false;
    this.doHeartbeatSounds = data?.doHeartbeatSounds || false;
    this.doHints = data?.doHints || false;
    this.emblem = new Emblem<MurderMysteryEmblemIcon>(data?.emblem || {});
    this.favoriteDescentMode = data?.favoriteDescentMode || 'UNKNOWN';
    this.favorites = new MurderMysteryFavorites(data?.favorites || {});
    this.games = data?.games || 0;
    this.grantedChests = data?.granted_chests || 0;
    this.kills = data?.kills || 0;
    this.knifeSkinPrestiges = new MurderMysteryKnifeSkinPrestige(data?.knifeSkinPrestiges || {});
    this.leaderboardSettings = new LeaderboardSettings<'UNKNOWN'>(data?.leaderboardSettings || {});
    this.knifeKills = data?.knife_kills || 0;
    this.lastOneAlive = data?.last_one_alive || 0;
    this.longestTimeAsSurvivorSeconds = data?.longest_time_as_survivor_seconds || 0;
    this.mapsConsumablesUsed = data?.mapsConsumablesUsed || [];
    this.mapsMurdererTrapKills = data?.mapsMurdererTrapKills || [];
    this.chestHistory = data?.mm_chest_history || [];
    this.chests = data?.mm_chests || 0;
    this.christmasChests = data?.mm_christmas_chests || 0;
    this.easterChests = data?.mm_easter_chests || 0;
    this.goldenChests = data?.mm_golden_chests || 0;
    this.halloweenChests = data?.mm_halloween_chests || 0;
    this.lunarChests = data?.mm_lunar_chests || 0;
    this.merryChests = data?.mm_merry_chests || 0;
    this.murdererWins = data?.murderer_wins || 0;
    this.books = data?.murdermystery_books || [];
    this.quickestDetectiveWinTimeSeconds = data?.quickest_detective_win_time_seconds || 0;
    this.quickestMurdererWinTimeSeconds = data?.quickest_murderer_win_time_seconds || 0;
    this.quickestShowdownWinTimeSeconds = data?.quickest_showdown_win_time_seconds || 0;
    this.shopSort = data?.shop_sort || false;
    this.shopSortEnableOwnedFirst = data?.shop_sort_enable_owned_first || false;
    this.showdownPotg = data?.showdown_potg || 0;
    this.showQueueBook = data?.showqueuebook || true;
    this.spookyOpenAch = data?.spooky_open_ach || 0;
    this.suicides = data?.suicides || 0;
    this.survivorWins = data?.survivor_wins || 0;
    this.thrownKnifeKills = data?.thrown_knife_kills || 0;
    this.totalTimeSurvivedSeconds = data?.total_time_survived_seconds || 0;
    this.trapKills = data?.trap_kills || 0;
    this.wasHero = data?.was_hero || 0;
    this.wins = data?.wins || 0;
    this.openedChests = data?.MurderMystery_openedChests || 0;
    this.openedCommons = data?.MurderMystery_openedCommons || 0;
    this.openedEpics = data?.MurderMystery_openedEpics || 0;
    this.openedLegendaries = data?.MurderMystery_openedLegendaries || 0;
    this.openedRares = data?.MurderMystery_openedRares || 0;
    this.ancientTomb = new MurderMysteryMap(data, 'ancient_tomb');
    this.aquarium = new MurderMysteryMap(data, 'aquarium');
    this.archives = new MurderMysteryMap(data, 'archives');
    this.archivesTopFloor = new MurderMysteryMap(data, 'archives_top_floor');
    this.cattleridgeFarm = new MurderMysteryMap(data, 'cattleridge_farm');
    this.cruiseShip = new MurderMysteryMap(data, 'cruise_ship');
    this.darkfall = new MurderMysteryMap(data, 'darkfall');
    this.easterWorld = new MurderMysteryMap(data, 'easter_world');
    this.goldRush = new MurderMysteryMap(data, 'gold_rush');
    this.headquarters = new MurderMysteryMap(data, 'headquarters');
    this.hollywood = new MurderMysteryMap(data, 'hollywood');
    this.hypixelWorld = new MurderMysteryMap(data, 'hypixel_world');
    this.library = new MurderMysteryMap(data, 'library');
    this.mountain = new MurderMysteryMap(data, 'mountain');
    this.sanPeratico = new MurderMysteryMap(data, 'san_peratico');
    this.sanPeraticoV2 = new MurderMysteryMap(data, 'san_peratico_v2');
    this.skywayPier = new MurderMysteryMap(data, 'skyway_pier');
    this.snowfall = new MurderMysteryMap(data, 'snowfall');
    this.snowglobe = new MurderMysteryMap(data, 'snowglobe');
    this.spookyMansion = new MurderMysteryMap(data, 'spooky_mansion');
    this.subway = new MurderMysteryMap(data, 'subway');
    this.towerfall = new MurderMysteryMap(data, 'towerfall');
    this.transport = new MurderMysteryMap(data, 'transport');
    this.villa = new MurderMysteryMap(data, 'villa');
    this.widowsDen = new MurderMysteryMap(data, "widow's_den");
    this.assassins = new MurderMysteryGamemode(data, 'MURDER_ASSASSINS');
    this.classic = new MurderMysteryGamemode(data, 'MURDER_CLASSIC');
    this.doubleUp = new MurderMysteryGamemode(data, 'MURDER_DOUBLE_UP');
    this.hardcode = new MurderMysteryGamemode(data, 'MURDER_HARDCORE');
    this.infection = new MurderMysteryGamemode(data, 'MURDER_INFECTION');
    this.showdown = new MurderMysteryGamemode(data, 'MURDER_SHOWDOWN');
  }
}

export default MurderMystery;
