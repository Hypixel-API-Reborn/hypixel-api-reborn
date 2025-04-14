import Divide from '../../../Utils/Divide.js';
import SkyWarsMode from './SkyWarsMode.js';
import type { SkyWarsBaseModes, SkyWarsKitNames } from '../../../Types/Player.js';

class SkyWarsModeStats {
  activeKit: SkyWarsKitNames;
  killStreak: number;
  kills: number;
  voidKills: number;
  meleeKills: number;
  bowKills: number;
  mobKills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
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
  normal: SkyWarsMode;
  insane: SkyWarsMode;
  constructor(data: Record<string, any>, gamemode: SkyWarsBaseModes) {
    this.activeKit = data?.[`activeKit_${gamemode?.toUpperCase()}`] || '';
    this.killStreak = data?.[`killstreak_${gamemode}`] || 0;
    this.kills = data?.[`kills_${gamemode}`] || 0;
    this.voidKills = data?.[`void_kills_${gamemode}`] || 0;
    this.meleeKills = data?.[`melee_kills_${gamemode}`] || 0;
    this.bowKills = data?.[`bow_kills_${gamemode}`] || 0;
    this.mobKills = data?.[`mob_kills_${gamemode}`] || 0;
    this.assists = data?.[`assists_${gamemode}`] || 0;
    this.deaths = data?.[`deaths_${gamemode}`] || 0;
    this.KDR = Divide(data?.kills, data?.deaths);
    this.wins = data?.[`wins_${gamemode}`] || 0;
    this.losses = data?.[`losses_${gamemode}`] || 0;
    this.WLR = Divide(data?.wins, data?.losses);
    this.gamesPlayed = data?.[`games_${gamemode}`] || 0;
    this.survivedPlayers = data?.[`survived_players_${gamemode}`] || 0;
    this.chestsOpened = data?.[`chests_opened_${gamemode}`] || 0;
    this.timePlayed = data?.[`time_played_${gamemode}`] || 0;
    this.shard = data?.[`shard_${gamemode}`] || 0;
    this.longestBowShot = data?.[`longest_bow_shot_${gamemode}`] || 0;
    this.arrowsShot = data?.[`arrows_shot_${gamemode}`] || 0;
    this.arrowsHit = data?.[`arrows_hit_${gamemode}`] || 0;
    this.bowAccuracy = Divide(this.arrowsHit, this.arrowsShot);
    this.fastestWin = data?.[`fastest_win_${gamemode}`] || 0;
    this.heads = data?.[`heads_${gamemode}`] || 0;
    this.insane = new SkyWarsMode(data, `${gamemode}_insane`);
    this.normal = new SkyWarsMode(data, `${gamemode}_normal`);
  }
}

export default SkyWarsModeStats;
