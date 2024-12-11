import Divide from '../../../Utils/Divide.js';
import type { SkyWarsModes } from '../../../Types/Player.js';

class SkyWarsMode {
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  constructor(data: Record<string, any>, gamemode: SkyWarsModes) {
    this.kills = data?.[`kills_${gamemode}`] || 0;
    this.deaths = data?.[`deaths_${gamemode}`] || 0;
    this.KDR = Divide(data?.kills, data?.deaths);
    this.wins = data?.[`wins_${gamemode}`] || 0;
    this.losses = data?.[`losses_${gamemode}`] || 0;
    this.WLR = Divide(data?.wins, data?.losses);
  }
}

export default SkyWarsMode;
