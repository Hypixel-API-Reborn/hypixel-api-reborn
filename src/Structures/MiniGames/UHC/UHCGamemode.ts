import Divide from '../../../Utils/Divide.js';
import type { UHCModes } from '../../../Types/Player.js';

class UHCGamemode {
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  headsEaten: number;
  ultimatesCrafted: number;
  extraUltimatesCrafted: number;
  constructor(data: Record<string, any>, mode?: UHCModes) {
    const modeName = mode ? `_${mode}` : '';
    this.kills = data?.[`kills${modeName}`] || 0;
    this.deaths = data?.[`deaths${modeName}`] || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.[`wins${modeName}`] || 0;
    this.headsEaten = data?.[`heads_eaten${modeName}`] || 0;
    this.ultimatesCrafted = data?.[`ultimates_crafted${modeName}`] || 0;
    this.extraUltimatesCrafted = data?.[`extra_ultimates_crafted${modeName}`] || 0;
  }
}

export default UHCGamemode;
