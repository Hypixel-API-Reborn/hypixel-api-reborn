import Divide from '../../../Utils/Divide.js';
import type { SpeedUHCModes } from '../../../Types/Player.js';

class SpeedUHCMode {
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  losses: number;
  WLR: number;
  playedGames: number;
  winstreak: number;
  killStreak: number;
  assists: number;
  constructor(data: Record<string, any>, mode: SpeedUHCModes) {
    this.kills = data?.[`kills_${mode}`] || 0;
    this.deaths = data?.[`deaths_${mode}`] || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.[`wins_${mode}`] || 0;
    this.losses = data?.[`losses_${mode}`] || 0;
    this.WLR = Divide(this.wins, this.losses);
    this.playedGames = data?.[`games_${mode}`] || 0;
    this.winstreak = data?.[`win_streak_${mode}`] || 0;
    this.killStreak = data?.[`killstreak_${mode}`] || 0;
    this.assists = data?.[`assists_${mode}`] || 0;
  }
}

export default SpeedUHCMode;
