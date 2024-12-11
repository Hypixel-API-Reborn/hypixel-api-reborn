import Divide from '../../../Utils/Divide.js';
import type { CopsAndCrimsGamemodes } from '../../../Types/Player.js';

class CopsAndCrimsGamemode {
  kills: number;
  criminalKills: number;
  copKills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  constructor(data: Record<string, any>, mode: CopsAndCrimsGamemodes) {
    this.kills = data?.[`kills_${mode}`] || 0;
    this.criminalKills = data?.[`criminal_kills_${mode}`] || 0;
    this.copKills = data?.[`cop_kills_${mode}`] || 0;
    this.assists = data?.[`assists_${mode}`] || 0;
    this.deaths = data?.[`deaths_${mode}`] || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.[`game_wins_${mode}`] || 0;
    this.gamesPlayed = data?.[`game_plays_${mode}`] || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = Divide(this.wins, this.losses);
  }
}

export default CopsAndCrimsGamemode;
