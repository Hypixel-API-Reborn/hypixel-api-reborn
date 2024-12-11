import TurboKartRacersMap from './TurboKartRacersMap.js';
import type { TurboKartRacersHorn } from '../../../Types/Player.js';

class TurboKartRacers {
  coins: number;
  wins: number;
  completedLaps: number;
  bronzeTrophies: number;
  silverTrophies: number;
  goldTrophies: number;
  boxPickups: number;
  horn: TurboKartRacersHorn;
  retro: TurboKartRacersMap;
  hypixelgp: TurboKartRacersMap;
  olympus: TurboKartRacersMap;
  junglerush: TurboKartRacersMap;
  canyon: TurboKartRacersMap;
  bananaHitsReceived: number;
  bananaHitsSent: number;
  blueTorpedoHit: number;
  grandPrix: boolean;
  grandPrixTokens: number;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.wins = data?.wins || 0;
    this.completedLaps = data?.laps_completed || 0;
    this.bronzeTrophies = data?.bronze_trophy || 0;
    this.silverTrophies = data?.silver_trophy || 0;
    this.goldTrophies = data?.gold_trophy || 0;
    this.boxPickups = data?.box_pickups || 0;
    this.horn = data?.horn || 'DEFAULT';
    this.retro = new TurboKartRacersMap(data, 'retro');
    this.hypixelgp = new TurboKartRacersMap(data, 'hypixelgp');
    this.olympus = new TurboKartRacersMap(data, 'olympus');
    this.junglerush = new TurboKartRacersMap(data, 'junglerush');
    this.canyon = new TurboKartRacersMap(data, 'canyon');
    this.bananaHitsReceived = data?.banana_hits_received || 0;
    this.bananaHitsSent = data?.banana_hits_sent || 0;
    this.blueTorpedoHit = data?.blue_torpedo_hit || 0;
    this.grandPrix = data?.grand_prix || 'false';
    this.grandPrixTokens = data?.grand_prix_tokens || 0;
  }
}

export default TurboKartRacers;
