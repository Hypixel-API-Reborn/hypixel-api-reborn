import Divide from '../../../Utils/Divide.js';
import type { SmashHeoresMode } from '../../../Types/Player.js';

class SmashHeroesMode {
  kills: number;
  deaths: number;
  killDeathRatio: number;
  wins: number;
  losses: number;
  winLossRatio: number;
  constructor(data: Record<string, any>, mode: SmashHeoresMode) {
    this.kills = data?.[`kills_${mode}`] ?? 0;
    this.deaths = data?.[`deaths_${mode}`] ?? 0;
    this.killDeathRatio = Divide(this.kills, this.deaths);
    this.wins = data?.[`wins_${mode}`] ?? 0;
    this.losses = data?.[`losses_${mode}`] ?? 0;
    this.winLossRatio = Divide(this.wins, this.losses);
  }
}

export default SmashHeroesMode;
