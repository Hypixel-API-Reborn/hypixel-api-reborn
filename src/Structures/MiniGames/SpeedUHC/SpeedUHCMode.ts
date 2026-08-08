import { Divide } from '../../../Utils/index.js';
import type { SpeedUHCModeId } from '../../../Types/index.js';

class SpeedUHCMode {
  kills: number;
  deaths: number;
  killDeathRatio: number;
  wins: number;
  losses: number;
  winLossRatio: number;
  playedGames: number;
  winStreak: number;
  killStreak: number;
  assists: number;
  constructor(data: Record<string, any>, mode: SpeedUHCModeId) {
    this.kills = data?.[`kills_${mode}`] ?? 0;
    this.deaths = data?.[`deaths_${mode}`] ?? 0;
    this.killDeathRatio = Divide(this.kills, this.deaths);
    this.wins = data?.[`wins_${mode}`] ?? 0;
    this.losses = data?.[`losses_${mode}`] ?? 0;
    this.winLossRatio = Divide(this.wins, this.losses);
    this.playedGames = data?.[`games_${mode}`] ?? 0;
    this.winStreak = data?.[`win_streak_${mode}`] ?? 0;
    this.killStreak = data?.[`killstreak_${mode}`] ?? 0;
    this.assists = data?.[`assists_${mode}`] ?? 0;
  }
}

export default SpeedUHCMode;
