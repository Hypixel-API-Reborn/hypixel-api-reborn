import Divide from '../../../Utils/Divide.js';
import DuelsBridge from './DuelsBridge.js';
import DuelsGamemode from './DuelsGamemode.js';
import DuelsMegaWalls from './DuelsMegaWalls.js';
import DuelsOP from './DuelsOP.js';
import DuelsSkyWars from './DuelsSkyWars.js';
import DuelsUHC from './DuelsUHC.js';
import Romanize from '../../../Utils/Romanize.js';
import { duelsDivisions } from '../../../Utils/Constants.js';
import type { DuelsModes } from '../../../Types/Player.js';

export function getTitle(data: Record<string, any>, mode: 'all_modes' | DuelsModes): string {
  for (const div of duelsDivisions.slice().reverse()) {
    const prestige = data?.[`${mode}_${div.key}_title_prestige`];
    if (prestige) return `${div.name} ${Romanize(prestige)}`;
  }
  return '';
}

class Duels {
  tokens: number;
  title: string | null;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  winStreak: number;
  bestWinStreak: number;
  ping: number;
  blocksPlaced: number;
  swings: number;
  hits: number;
  meleeAccuracy: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  healthRegenerated: number;
  goldenApplesEaten: number;
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
  constructor(data: Record<string, any>) {
    this.tokens = data?.coins || data?.tokens || 0;
    this.title = getTitle(data, 'all_modes');
    this.kills = data?.kills || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.wins || 0;
    this.losses = data?.losses || 0;
    this.WLR = Divide(this.wins, this.losses);
    this.playedGames = data?.games_played_duels || 0;
    this.winStreak = data?.current_winstreak || 0;
    this.bestWinStreak = data?.best_overall_winstreak || 0;
    this.ping = data?.pingPreference || 0;
    this.blocksPlaced = data?.blocks_placed || 0;
    this.swings = data?.melee_swings || 0;
    this.hits = data?.melee_hits || 0;
    this.meleeAccuracy = Divide(this.hits, this.swings);
    this.bowShots = data?.bow_shots || 0;
    this.bowHits = data?.bow_hits || 0;
    this.bowAccuracy = Divide(this.bowHits, this.bowShots);
    this.healthRegenerated = data?.health_regenerated || 0;
    this.goldenApplesEaten = data?.golden_apples_eaten || 0;
    this.uhc = new DuelsUHC(data);
    this.skywars = new DuelsSkyWars(data);
    this.megawalls = new DuelsMegaWalls(data);
    this.blitz = new DuelsGamemode(data, 'blitz_duel', getTitle(data, 'blitz'));
    this.op = new DuelsOP(data);
    this.classic = new DuelsGamemode(data, 'classic_duel', getTitle(data, 'classic'));
    this.bow = new DuelsGamemode(data, 'bow_duel', getTitle(data, 'bow'));
    this.noDebuff = new DuelsGamemode(data, 'potion_duel', getTitle(data, 'no_debuff'));
    this.combo = new DuelsGamemode(data, 'combo_duel', getTitle(data, 'combo'));
    this.bowSpleef = new DuelsGamemode(data, 'bowspleef_duel', getTitle(data, 'tnt_games'));
    this.sumo = new DuelsGamemode(data, 'sumo_duel', getTitle(data, 'sumo'));
    this.bridge = new DuelsBridge(data);
    this.parkour = new DuelsGamemode(data, 'parkour_eight', getTitle(data, 'parkour'));
    this.arena = new DuelsGamemode(data, 'duel_arena');
  }
}

export default Duels;
