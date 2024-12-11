import Divide from '../../../Utils/Divide.js';
import PixelPartyGameMode from './PixelPartyGameMode.js';

class PixelParty {
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  roundsPlayed: number;
  powerUpsCollected: number;
  normal: PixelPartyGameMode;
  hyper: PixelPartyGameMode;
  highestRound: number;
  musicVolume: number;
  colorBlind: object;
  constructor(data: Record<string, any>) {
    this.wins = data?.pixel_party?.wins || 0;
    this.gamesPlayed = data?.pixel_party?.games_played || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = Divide(this.wins, this.losses);
    this.roundsPlayed = data?.pixel_party?.rounds_completed || 0;
    this.powerUpsCollected = data?.pixel_party?.power_ups_collected || 0;
    this.normal = new PixelPartyGameMode(data?.pixel_party, 'normal');
    this.hyper = new PixelPartyGameMode(data?.pixel_party, 'hyper');
    this.highestRound = data?.pixel_party?.highest_round || 0;
    this.musicVolume = data?.pixel_party_music_volume || 0;
    this.colorBlind = data?.pixelparty || {};
  }
}

export default PixelParty;
