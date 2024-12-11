import Divide from '../../../Utils/Divide.js';
import type { PixelPartyGameModes } from '../../../Types/Player.js';

class PixelPartyGameMode {
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  roundsPlayed: number;
  powerUpsCollected: number;
  constructor(data: Record<string, any>, modeName: PixelPartyGameModes) {
    this.wins = data?.[`wins_${modeName}`] || 0;
    this.gamesPlayed = data?.[`games_played_${modeName}`] || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = Divide(this.wins, this.losses);
    this.roundsPlayed = data?.[`rounds_completed_${modeName}`] || 0;
    this.powerUpsCollected = data?.[`power_ups_collected_${modeName}`] || 0;
  }
}

export default PixelPartyGameMode;
