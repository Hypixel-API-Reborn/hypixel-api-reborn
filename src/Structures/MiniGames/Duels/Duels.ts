import DuelsBedWars from './Mode/DuelsBedWars.ts';
import DuelsBlitz from './Mode/DuelsBlitz.ts';
import DuelsBow from './Mode/DuelsBow.ts';
import DuelsBridge from './Mode/Bridge/DuelsBridge.ts';
import DuelsClassic from './Mode/DuelsClassic.ts';
import DuelsCombo from './Mode/DuelsCombo.js';
import DuelsMegaWalls from './Mode/DuelsMegaWalls.ts';
import DuelsModeFull from './Mode/DuelsModeFull.ts';
import DuelsOP from './Mode/DuelsOP.ts';
import DuelsOdyssey from './DuelsOdyssey.js';
import DuelsOptions from './DuelsOptions.ts';
import DuelsPotion from './Mode/DuelsPotion.js';
import DuelsPrivateGames from './DuelsPrivateGames.js';
import DuelsSkyWars from './Mode/DuelsSkyWars.ts';
import DuelsSumo from './Mode/DuelsSumo.ts';
import DuelsUHC from './Mode/DuelsUHC.ts';
import GenericDuelsMode from './Mode/GenericDuelsMode.ts';
import LeaderboardSettings from '../Shared/LeaderboardSettings.js';
import { getDuelsTitle } from '../../../Utils/Constants.ts';
import type {
  DuelsLeaderboardSettingsMode,
  DuelsMap,
  DuelsPackage,
  DuelsPackageArrowTrail,
  DuelsPackageAura,
  DuelsPackageBoxingFish,
  DuelsPackageCage,
  DuelsPackageDoubleJump,
  DuelsPackageEmblem,
  DuelsPackageGlyph,
  DuelsPackageGoal,
  DuelsPackageHat,
  DuelsPackageKillEffect,
  DuelsPackageKillMessage,
  DuelsPackagePrefixIcon,
  DuelsPackagePrefixSchema,
  DuelsPackageProjectileTrail,
  DuelsPackageSpleefShovel,
  DuelsPackageStartingHelmet,
  DuelsPackageStartingWeapon,
  DuelsPackageTitle,
  DuelsPackageTitleCosmetic,
  DuelsPackageVictoryDance,
  DuelsPackageWeaponPack,
  DuelsPackageWoodSkin,
  DuelsStatus,
  DuelsTitleParsed,
  PlayerGenericSelectedCosmetic
} from '../../../Types/Player.ts';

class Duels extends GenericDuelsMode {
  title: DuelsTitleParsed;
  chests: number;
  openedChests: number;
  openedCommons: number;
  openedRares: number;
  packages: DuelsPackage[];
  duelsChestHistory: DuelsPackage[];
  activeAuras: DuelsPackageAura | PlayerGenericSelectedCosmetic | 'auras_none';
  activeEmblem: DuelsPackageEmblem | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeKillMessage: DuelsPackageKillMessage | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeVictoryDance: DuelsPackageVictoryDance | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeHat: DuelsPackageHat | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeKillEffect: DuelsPackageKillEffect | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeProjectileTrail: DuelsPackageProjectileTrail | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeCage: DuelsPackageCage | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeCosmeticTitle: DuelsPackageTitleCosmetic | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeWeaponPack: DuelsPackageWeaponPack | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeGoal: DuelsPackageGoal | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activePrefixIcon: DuelsPackagePrefixIcon | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeTitle: DuelsPackageTitle | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeWoodSkin: DuelsPackageWoodSkin | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activePrefixScheme: DuelsPackagePrefixSchema | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeSpleefShovel: DuelsPackageSpleefShovel | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeArrowTrail: DuelsPackageArrowTrail | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeStartingWeapon: DuelsPackageStartingWeapon | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeDoubleJump: DuelsPackageDoubleJump | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeBoxingFish: DuelsPackageBoxingFish | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeStartingHelmet: DuelsPackageStartingHelmet | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  activeGlyph: DuelsPackageGlyph | PlayerGenericSelectedCosmetic | 'UNKNOWN';
  mapsWonOn: DuelsMap[];
  customTitles: string[];
  statusField: DuelsStatus | 'UNKNOWN';
  pingPreference: number;
  options: DuelsOptions;
  oddyssey: DuelsOdyssey;
  leaderboardSettings: LeaderboardSettings<DuelsLeaderboardSettingsMode>;
  privateGames: DuelsPrivateGames;
  combo: DuelsCombo;
  boxing: DuelsModeFull;
  parkour: DuelsModeFull;
  blitz: DuelsBlitz;
  bow: DuelsBow;
  quake: DuelsModeFull;
  spleef: DuelsModeFull;
  bowspleef: DuelsModeFull;
  potion: DuelsPotion;
  arena: DuelsModeFull;
  bedWars: DuelsBedWars;
  bridge: DuelsBridge;
  classic: DuelsClassic;
  megaWalls: DuelsMegaWalls;
  op: DuelsOP;
  skyWars: DuelsSkyWars;
  sumo: DuelsSumo;
  uhc: DuelsUHC;
  constructor(data: Record<string, any>) {
    super(data);
    this.title = getDuelsTitle(this.wins, true);
    this.chests = data?.duels_chests ?? 0;
    this.openedChests = data?.Duels_openedChests ?? 0;
    this.openedCommons = data?.Duels_openedCommons ?? 0;
    this.openedRares = data?.Duels_openedRares ?? 0;
    this.packages = data?.packages ?? [];
    this.duelsChestHistory = data?.duels_chest_history ?? [];
    this.activeAuras = data?.active_auras ?? 'auras_none';
    this.activeEmblem = data?.active_auras ?? 'UNKNOWN';
    this.activeKillMessage = data?.active_auras ?? 'UNKNOWN';
    this.activeVictoryDance = data?.active_victory_dance ?? 'UNKNOWN';
    this.activeHat = data?.active_hat ?? 'UNKNOWN';
    this.activeKillEffect = data?.active_kill_effect ?? 'UNKNOWN';
    this.activeProjectileTrail = data?.active_projectile_trail ?? 'UNKNOWN';
    this.activeCage = data?.active_cage ?? 'UNKNOWN';
    this.activeCosmeticTitle = data?.active_cosmetictitle ?? 'UNKNOWN';
    this.activeWeaponPack = data?.active_weaponpacks ?? 'UNKNOWN';
    this.activeGoal = data?.active_goal ?? 'UNKNOWN';
    this.activePrefixIcon = data?.active_prefix_icon ?? 'UNKNOWN';
    this.activeTitle = data?.active_title ?? 'UNKNOWN';
    this.activeWoodSkin = data?.active_wood_skin ?? 'UNKNOWN';
    this.activePrefixScheme = data?.active_prefix_scheme ?? 'UNKNOWN';
    this.activeSpleefShovel = data?.active_spleef_shovel ?? 'UNKNOWN';
    this.activeArrowTrail = data?.active_arrow_trail ?? 'UNKNOWN';
    this.activeStartingWeapon = data?.active_starting_weapon ?? 'UNKNOWN';
    this.activeDoubleJump = data?.active_double_jump ?? 'UNKNOWN';
    this.activeBoxingFish = data?.active_boxing_fish ?? 'UNKNOWN';
    this.activeStartingHelmet = data?.active_starting_helmet ?? 'UNKNOWN';
    this.activeGlyph = data?.active_glyph ?? 'UNKNOWN';
    this.mapsWonOn = data?.maps_won_on ?? [];
    this.customTitles = data?.custom_titles ?? [];
    this.statusField = data?.status_field ?? 'UNKNOWN';
    this.pingPreference = data?.pingPreference ?? 300;
    this.options = new DuelsOptions(data);
    this.oddyssey = new DuelsOdyssey(data);
    this.leaderboardSettings = new LeaderboardSettings<DuelsLeaderboardSettingsMode>(data?.leaderboardSettings ?? {});
    this.privateGames = new DuelsPrivateGames(data?.privategames ?? {});
    this.combo = new DuelsCombo(data);
    this.boxing = new DuelsModeFull(data, 'boxing_duel');
    this.parkour = new DuelsModeFull(data, 'parkour_eight');
    this.blitz = new DuelsBlitz(data);
    this.bow = new DuelsBow(data);
    this.quake = new DuelsModeFull(data, 'quake_duel');
    this.spleef = new DuelsModeFull(data, 'spleef_duel');
    this.bowspleef = new DuelsModeFull(data, 'bowspleef_duel');
    this.potion = new DuelsPotion(data);
    this.arena = new DuelsModeFull(data, 'duel_arena');
    this.bedWars = new DuelsBedWars(data);
    this.bridge = new DuelsBridge(data);
    this.classic = new DuelsClassic(data);
    this.megaWalls = new DuelsMegaWalls(data);
    this.op = new DuelsOP(data);
    this.skyWars = new DuelsSkyWars(data);
    this.sumo = new DuelsSumo(data);
    this.uhc = new DuelsUHC(data);
  }
}

export default Duels;
