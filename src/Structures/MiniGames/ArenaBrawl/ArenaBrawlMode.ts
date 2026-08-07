import { Divide } from '../../../Utils/index.js';
import type { ArenaBrawlModeId } from '../../../Types/Player.js';

class ArenaBrawlMode {
  damage: number;
  kills: number;
  deaths: number;
  killDeathRatio: number;
  healed: number;
  wins: number;
  losses: number;
  winLossRatio: number;
  games: number;
  winStreak: number;
  constructor(data: Record<string, any>, mode: ArenaBrawlModeId) {
    this.damage = data?.[`damage_${mode}`] ?? 0;
    this.kills = data?.[`kills_${mode}`] ?? 0;
    this.deaths = data?.[`deaths_${mode}`] ?? 0;
    this.killDeathRatio = Divide(this.kills, this.deaths);
    this.healed = data?.[`healed_${mode}`] ?? 0;
    this.wins = data?.[`wins_${mode}`] ?? 0;
    this.losses = data?.[`losses_${mode}`] ?? 0;
    this.winLossRatio = Divide(this.wins, this.losses);
    this.games = data?.[`games_${mode}`] ?? 0;
    this.winStreak = data?.[`win_streaks_${mode}`] ?? 0;
  }
}

export default ArenaBrawlMode;
