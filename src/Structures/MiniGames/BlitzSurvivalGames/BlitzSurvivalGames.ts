import BlitzSurvivalGamesData from './BlitzSurvivalGamesData.ts';
import BlitzSurvivalGamesKit from './BlitzSurvivalGamesKit.ts';
import BlitzSurvivalGamesPrivateGames from './BlitzSurvivalGamesPrivateGames.ts';
import LeaderboardSettings from '../Shared/LeaderboardSettings.js';
import { monthAB } from '../../../Utils/Oscillation.ts';
import type {
  BlitzSurvivalGamesAura,
  BlitzSurvivalGamesFinisher,
  BlitzSurvivalGamesKillEffect,
  BlitzSurvivalGamesKitName,
  BlitzSurvivalGamesLeaderboardSettingsMode,
  BlitzSurvivalGamesTaunt,
  BlitzSurvivalGamesVictoryDance
} from '../../../Types/Player.ts';

class BlitzSurvivalGames extends BlitzSurvivalGamesData {
  aura: BlitzSurvivalGamesAura | 'UNKNOWN';
  auraToggle: boolean;
  blood: boolean;
  chosenTaunt: BlitzSurvivalGamesTaunt;
  chosenVictoryDance: BlitzSurvivalGamesVictoryDance | 'UNKNOWN';
  chosenFinisher: BlitzSurvivalGamesFinisher | 'UNKNOWN';
  coins: number;
  packages: string[];
  monthlyKills: number;
  monthlyKillsA: number;
  monthlyKillsB: number;
  weeklyKills: number;
  weeklyKillsA: number;
  weeklyKillsB: number;
  autoArmor: boolean;
  defaultKit: BlitzSurvivalGamesKitName | 'UNKNOWN';
  combatTracker: boolean;
  alternativeKillMessageEnabled: boolean;
  prefersFullKitsMenu: boolean;
  disablePrestigeFinisher: boolean;
  toggled: boolean;
  fancyMode: boolean;
  afterKillEffect: BlitzSurvivalGamesKillEffect;
  leaderboardSettings: LeaderboardSettings<BlitzSurvivalGamesLeaderboardSettingsMode>;
  privateGames: BlitzSurvivalGamesPrivateGames;
  arachnologist: BlitzSurvivalGamesKit;
  archer: BlitzSurvivalGamesKit;
  armorer: BlitzSurvivalGamesKit;
  astronaut: BlitzSurvivalGamesKit;
  backup: BlitzSurvivalGamesKit;
  baker: BlitzSurvivalGamesKit;
  blaze: BlitzSurvivalGamesKit;
  creepertamer: BlitzSurvivalGamesKit;
  diver: BlitzSurvivalGamesKit;
  donkeytamer: BlitzSurvivalGamesKit;
  farmer: BlitzSurvivalGamesKit;
  fisherman: BlitzSurvivalGamesKit;
  florist: BlitzSurvivalGamesKit;
  golem: BlitzSurvivalGamesKit;
  guardian: BlitzSurvivalGamesKit;
  horsetamer: BlitzSurvivalGamesKit;
  hunter: BlitzSurvivalGamesKit;
  hypeTrain: BlitzSurvivalGamesKit;
  jockey: BlitzSurvivalGamesKit;
  knight: BlitzSurvivalGamesKit;
  meatmaster: BlitzSurvivalGamesKit;
  milkman: BlitzSurvivalGamesKit;
  necromancer: BlitzSurvivalGamesKit;
  paladin: BlitzSurvivalGamesKit;
  phoenix: BlitzSurvivalGamesKit;
  pigman: BlitzSurvivalGamesKit;
  rambo: BlitzSurvivalGamesKit;
  random: BlitzSurvivalGamesKit;
  ranger: BlitzSurvivalGamesKit;
  reaper: BlitzSurvivalGamesKit;
  reddragon: BlitzSurvivalGamesKit;
  rogue: BlitzSurvivalGamesKit;
  scout: BlitzSurvivalGamesKit;
  shadowKnight: BlitzSurvivalGamesKit;
  shark: BlitzSurvivalGamesKit;
  slimeyslime: BlitzSurvivalGamesKit;
  snowman: BlitzSurvivalGamesKit;
  speleologist: BlitzSurvivalGamesKit;
  tim: BlitzSurvivalGamesKit;
  toxicologist: BlitzSurvivalGamesKit;
  troll: BlitzSurvivalGamesKit;
  viking: BlitzSurvivalGamesKit;
  warlock: BlitzSurvivalGamesKit;
  warrior: BlitzSurvivalGamesKit;
  wolftamer: BlitzSurvivalGamesKit;
  constructor(data: Record<string, any>) {
    super(data);
    this.aura = data?.aura || 'UNKNOWN';
    this.auraToggle = data?.auratoggle || false;
    this.blood = data?.blood || true;
    this.chosenTaunt = data?.chosen_taunt || 'DEFAULT';
    this.chosenVictoryDance = data?.chosen_victorydance || 'UNKNOWN';
    this.chosenFinisher = data?.chosen_finisher || 'UNKNOWN';
    this.coins = data?.coins || 0;
    this.packages = data?.packages || [];
    this.monthlyKills = parseInt(data?.[`monthly_kills_${monthAB()}`] || 0, 10);
    this.monthlyKillsA = data?.monthly_kills_a || 0;
    this.monthlyKillsB = data?.monthly_kills_b || 0;
    this.weeklyKills = parseInt(data?.[`weekly_kills_${monthAB()}`] || 0, 10);
    this.weeklyKillsA = data?.weekly_kills_a || 0;
    this.weeklyKillsB = data?.weekly_kills_b || 0;
    this.autoArmor = data?.autoarmor || true;
    this.defaultKit = data?.defaultkit || 'UNKNOWN';
    this.combatTracker = data?.combatTracker || true;
    this.alternativeKillMessageEnabled = data?.alternative_kill_message_enabled || true;
    this.prefersFullKitsMenu = data?.prefers_full_kits_menu || true;
    this.disablePrestigeFinisher = data?.disableprestigefinisher || true;
    this.toggled = data?.toggled || true;
    this.fancyMode = data?.fancyMode || false;
    this.afterKillEffect = data?.afterkill || 'rapid_fire';
    this.leaderboardSettings = new LeaderboardSettings<BlitzSurvivalGamesLeaderboardSettingsMode>(
      data?.leaderboardSettings || {}
    );
    this.privateGames = new BlitzSurvivalGamesPrivateGames(data?.privategames || {});
    this.arachnologist = new BlitzSurvivalGamesKit(data, 'arachnologist');
    this.archer = new BlitzSurvivalGamesKit(data, 'archer');
    this.armorer = new BlitzSurvivalGamesKit(data, 'armorer');
    this.astronaut = new BlitzSurvivalGamesKit(data, 'astronaut');
    this.backup = new BlitzSurvivalGamesKit(data, 'backup');
    this.baker = new BlitzSurvivalGamesKit(data, 'baker');
    this.blaze = new BlitzSurvivalGamesKit(data, 'blaze');
    this.creepertamer = new BlitzSurvivalGamesKit(data, 'creepertamer');
    this.diver = new BlitzSurvivalGamesKit(data, 'diver');
    this.donkeytamer = new BlitzSurvivalGamesKit(data, 'donkeytamer');
    this.farmer = new BlitzSurvivalGamesKit(data, 'farmer');
    this.fisherman = new BlitzSurvivalGamesKit(data, 'fisherman');
    this.florist = new BlitzSurvivalGamesKit(data, 'florist');
    this.golem = new BlitzSurvivalGamesKit(data, 'golem');
    this.guardian = new BlitzSurvivalGamesKit(data, 'guardian');
    this.horsetamer = new BlitzSurvivalGamesKit(data, 'horsetamer');
    this.hunter = new BlitzSurvivalGamesKit(data, 'hunter');
    this.hypeTrain = new BlitzSurvivalGamesKit(data, 'hype train');
    this.jockey = new BlitzSurvivalGamesKit(data, 'jockey');
    this.knight = new BlitzSurvivalGamesKit(data, 'knight');
    this.meatmaster = new BlitzSurvivalGamesKit(data, 'meatmaster');
    this.milkman = new BlitzSurvivalGamesKit(data, 'milkman');
    this.necromancer = new BlitzSurvivalGamesKit(data, 'necromancer');
    this.paladin = new BlitzSurvivalGamesKit(data, 'paladin');
    this.phoenix = new BlitzSurvivalGamesKit(data, 'phoenix');
    this.pigman = new BlitzSurvivalGamesKit(data, 'pigman');
    this.rambo = new BlitzSurvivalGamesKit(data, 'rambo');
    this.random = new BlitzSurvivalGamesKit(data, 'random');
    this.ranger = new BlitzSurvivalGamesKit(data, 'ranger');
    this.reaper = new BlitzSurvivalGamesKit(data, 'reaper');
    this.reddragon = new BlitzSurvivalGamesKit(data, 'reddragon');
    this.rogue = new BlitzSurvivalGamesKit(data, 'rogue');
    this.scout = new BlitzSurvivalGamesKit(data, 'scout');
    this.shadowKnight = new BlitzSurvivalGamesKit(data, 'shadow knight');
    this.shark = new BlitzSurvivalGamesKit(data, 'shark');
    this.slimeyslime = new BlitzSurvivalGamesKit(data, 'slimeyslime');
    this.snowman = new BlitzSurvivalGamesKit(data, 'snowman');
    this.speleologist = new BlitzSurvivalGamesKit(data, 'speleologist');
    this.tim = new BlitzSurvivalGamesKit(data, 'tim');
    this.toxicologist = new BlitzSurvivalGamesKit(data, 'toxicologist');
    this.troll = new BlitzSurvivalGamesKit(data, 'troll');
    this.viking = new BlitzSurvivalGamesKit(data, 'viking');
    this.warlock = new BlitzSurvivalGamesKit(data, 'warlock');
    this.warrior = new BlitzSurvivalGamesKit(data, 'warrior');
    this.wolftamer = new BlitzSurvivalGamesKit(data, 'wolftamer');
  }
}

export default BlitzSurvivalGames;
