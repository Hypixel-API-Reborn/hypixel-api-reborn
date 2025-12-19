import Divide from '../../../../Utils/Divide.ts';
import SkyWarsHeads from '../SkyWarsHeads.ts';
import SkyWarsKillsDeaths from '../SkyWarsKillsDeaths.ts';
import { ParseModeAfter } from '../../../../Utils/ParseMode.ts';
import type { SkyWarsKitId, SkyWarsModeId } from '../../../../Types/Player.ts';

class SkyWarsMode {
  kills: SkyWarsKillsDeaths;
  deaths: SkyWarsKillsDeaths;
  heads: SkyWarsHeads;
  wins: number;
  losses: number;
  WLRatio: number;
  gamesPlayed: number;
  timePlayed: number;
  winstreak: number;
  survivedPlayers: number;
  chestsOpened: number;
  killstreak: number;
  longestBowKill: number;
  fastestWin: number;
  assists: number;
  mostKillsGame: number;
  longestBowShot: number;
  arrowsHit: number;
  arrowsShot: number;
  shard: number;
  mobsKilled: number;
  blocksBroken: number;
  blocksPlaced: number;
  eggThrown: number;
  enderpearlsThrown: number;
  itemsEnchanted: number;
  constructor(data: Record<string, any>, mode?: SkyWarsModeId | SkyWarsKitId) {
    mode = ParseModeAfter(mode) as SkyWarsModeId;
    this.kills = new SkyWarsKillsDeaths(data, mode);
    this.deaths = new SkyWarsKillsDeaths(data, mode);
    this.heads = new SkyWarsHeads(data, mode);
    this.wins = data?.[`wins${mode}`] || 0;
    this.losses = data?.[`losses${mode}`] || 0;
    this.WLRatio = Divide(this.wins, this.losses) || 0;
    this.gamesPlayed = data?.[`games${mode}`] || 0;
    this.timePlayed = data?.[`time_played${mode}`] || 0;
    this.winstreak = data?.[`winstreak${mode}`] || 0;
    this.survivedPlayers = data?.[`survived_players${mode}`] || 0;
    this.chestsOpened = data?.[`chests_opened${mode}`] || 0;
    this.killstreak = data?.[`killstreak${mode}`] || 0;
    this.longestBowKill = data?.[`longest_bow_kill${mode}`] || 0;
    this.fastestWin = data?.[`fastest_win${mode}`] || 0;
    this.assists = data?.[`assists${mode}`] || 0;
    this.mostKillsGame = data?.[`most_kills_game${mode}`] || 0;
    this.longestBowShot = data?.[`longest_bow_shot${mode}`] || 0;
    this.arrowsHit = data?.[`arrows_hit${mode}`] || 0;
    this.arrowsShot = data?.[`arrows_shot${mode}`] || 0;
    this.shard = data?.[`shard${mode}`] || 0;
    this.mobsKilled = data?.[`mobs_killed${mode}`] || 0;
    this.blocksBroken = data?.[`blocks_broken${mode}`] || 0;
    this.blocksPlaced = data?.[`blocks_placed${mode}`] || 0;
    this.eggThrown = data?.[`egg_thrown${mode}`] || 0;
    this.enderpearlsThrown = data?.[`enderpearls_thrown${mode}`] || 0;
    this.itemsEnchanted = data?.[`items_enchanted${mode}`] || 0;
  }
}

export default SkyWarsMode;
