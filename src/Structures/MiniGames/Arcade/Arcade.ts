import ArcadeOptions from './ArcadeOptions.ts';
import BlockingDead from './BlockingDead.ts';
import DragonWars from './DragonWars.ts';
import DrawTheirThing from './DrawTheirThing.ts';
import Dropper from './Dropper/Dropper.ts';
import Dtt from './Dtt.ts';
import EasterSimulator from './EasterSimulator.ts';
import EnderSpleef from './EnderSpleef.ts';
import FarmHunt from './FarmHunt.ts';
import FootBall from './FootBall.ts';
import GalaxyWars from './GalaxyWars.ts';
import GrinchSimulator from './GrinchSimulator.ts';
import HalloweenSimulator from './HalloweenSimulator.ts';
import HideAndSeek from './HideAndSeek.ts';
import HoleInTheWall from './HoleInTheWall.ts';
import HypixelSports from './HypixelSports.ts';
import MiniWalls from './MiniWalls.ts';
import OneInTheQuiver from './OneInTheQuiver.ts';
import PartyGames from './PartyGames/PartyGames.js';
import SantaSays from './SantaSays.ts';
import SantaSimulator from './SantaSimulator.ts';
import ScubaSimulator from './ScubaSimulator.ts';
import SimonSays from './SimonSays.ts';
import Soccer from './Soccer.ts';
import ThrowOut from './ThrowOut.ts';
import WoolHunt from './WoolHunt.ts';
import Zombies from './Zombies/Zombies.ts';
import { monthAB, weekAB } from '../../../Utils/Oscillation.ts';
import type {
  ArcadeBountyHead,
  ArcadeMeleeWeapon,
  ArcadeMovementTrail,
  ArcadePackage,
  ArcadeProjectileTrail,
  ArcadeVictoryDance,
  Language,
  PlayerGeneralSelectedCosmetic,
  ShopSort
} from '../../../Types/Player.ts';

class Arcade {
  activeMovementTrail: ArcadeMovementTrail | PlayerGeneralSelectedCosmetic | 'UNKNOWN';
  activeProjectileTrail: ArcadeProjectileTrail | PlayerGeneralSelectedCosmetic | 'UNKNOWN';
  activeVictoryDance: ArcadeVictoryDance | PlayerGeneralSelectedCosmetic | 'UNKNOWN';
  blood: boolean;
  bountyHead: ArcadeBountyHead;
  tokens: number;
  dec2016Achievements: boolean;
  dec2016Achievements2: boolean;
  flash: boolean;
  hideAndSeekShowQueueBook: boolean;
  hints: boolean;
  language: Language | 'UNKNOWN';
  maxWave: number;
  meleeWeapon: ArcadeMeleeWeapon | 'UNKNOWN';
  monthlyTokens: number;
  monthlyTokensA: number;
  monthlyTokensB: number;
  music: boolean;
  mysteryGiftsObtained: number;
  options: ArcadeOptions;
  poopCollected: number;
  ppLanguage: Language | 'UNKNOWN';
  privategames: Record<string, any>;
  shopSort: ShopSort | 'UNKNOWN';
  shopSortEnableOwnedFirst: boolean;
  showInfoBook: boolean;
  simonSong: boolean;
  stampLevel: number;
  timestamp: number;
  weeklyTokens: number;
  weeklyTokensA: number;
  weeklyTokensB: number;
  xmasMusic: boolean;
  packages: ArcadePackage[];
  blockingDead: BlockingDead;
  dragonWars: DragonWars;
  dropper: Dropper;
  drawTheirThing: DrawTheirThing;
  dtt: Dtt;
  easterSimulator: EasterSimulator;
  enderSpleef: EnderSpleef;
  farmHunt: FarmHunt;
  footBall: FootBall;
  galaxyWars: GalaxyWars;
  grinchSimulator: GrinchSimulator;
  halloweenSimulator: HalloweenSimulator;
  hideAndSeek: HideAndSeek;
  holeInTheWall: HoleInTheWall;
  hypixelSports: HypixelSports;
  MiniWalls: MiniWalls;
  oneInTheQuiver: OneInTheQuiver;
  partyGames: PartyGames;
  santaSays: SantaSays;
  santaSimulator: SantaSimulator;
  scubaSimulator: ScubaSimulator;
  simonSays: SimonSays;
  soccer: Soccer;
  throwOut: ThrowOut;
  woolHunt: WoolHunt;
  zombies: Zombies;
  constructor(data: Record<string, any>) {
    this.activeMovementTrail = data?.active_movement_trail || 'UNKNOWN';
    this.activeProjectileTrail = data?.active_projectile_trail || 'UNKNOWN';
    this.activeVictoryDance = data?.active_victory_dance || 'UNKNOWN';
    this.blood = data?.blood || false;
    this.bountyHead = data?.bounty_head || 'DEFAULT';
    this.tokens = data?.tokens || data?.coins || 0;
    this.dec2016Achievements = data?.dec2016_achievements || false;
    this.dec2016Achievements2 = data?.dec2016_achievements2 || false;
    this.flash = data?.flash || false;
    this.hideAndSeekShowQueueBook = data?.hideandseek_showqueuebook || false;
    this.hints = data?.hints || false;
    this.language = data?.language || 'UNKNOWN';
    this.maxWave = data?.max_wave || 0;
    this.meleeWeapon = data?.melee_weapon || 'UNKNOWN';
    this.monthlyTokens = parseInt(
      data?.[`monthly_tokens_${monthAB()}`] || data?.[`monthly_coins_${monthAB()}`] || 0,
      10
    );
    this.monthlyTokensA = data?.monthly_coins_a || 0;
    this.monthlyTokensB = data?.monthly_coins_b || 0;
    this.music = data?.music || false;
    this.mysteryGiftsObtained = data?.mystery_gifts_obtained || 0;
    this.options = new ArcadeOptions(data);
    this.poopCollected = data?.poop_collected || 0;
    this.ppLanguage = data?.pp_language || 'UNKNOWN';
    this.privategames = data?.privategames || {};
    this.shopSort = data?.shop_sort || 'UNKNOWN';
    this.shopSortEnableOwnedFirst = data?.shop_sort_enable_owned_first || false;
    this.showInfoBook = data?.showinfobook || false;
    this.simonSong = data?.simon_song || false;
    this.stampLevel = data?.stamp_level || 0;
    this.timestamp = data?.time_stamp || 0;
    this.weeklyTokens = parseInt(data?.[`weekly_tokens_${weekAB()}`] || data?.[`weekly_coins_${weekAB()}`] || 0, 10);
    this.weeklyTokensA = data?.weekly_tokens_a || data?.weekly_coins_a || 0;
    this.weeklyTokensB = data?.weekly_tokens_b || data?.weekly_coins_b || 0;
    this.xmasMusic = data?.xmas_music || false;
    this.packages = data?.packages || [];
    this.blockingDead = new BlockingDead(data);
    this.dragonWars = new DragonWars(data);
    this.dropper = new Dropper(data?.dropper || {});
    this.drawTheirThing = new DrawTheirThing(data);
    this.dtt = new Dtt(data);
    this.easterSimulator = new EasterSimulator(data);
    this.enderSpleef = new EnderSpleef(data);
    this.farmHunt = new FarmHunt(data);
    this.footBall = new FootBall(data);
    this.galaxyWars = new GalaxyWars(data);
    this.grinchSimulator = new GrinchSimulator(data);
    this.halloweenSimulator = new HalloweenSimulator(data);
    this.hideAndSeek = new HideAndSeek(data);
    this.holeInTheWall = new HoleInTheWall(data);
    this.hypixelSports = new HypixelSports(data);
    this.MiniWalls = new MiniWalls(data);
    this.oneInTheQuiver = new OneInTheQuiver(data);
    this.partyGames = new PartyGames(data);
    this.santaSays = new SantaSays(data);
    this.santaSimulator = new SantaSimulator(data);
    this.scubaSimulator = new ScubaSimulator(data);
    this.simonSays = new SimonSays(data);
    this.soccer = new Soccer(data);
    this.throwOut = new ThrowOut(data);
    this.woolHunt = new WoolHunt(data);
    this.zombies = new Zombies(data);
  }
}

export default Arcade;
