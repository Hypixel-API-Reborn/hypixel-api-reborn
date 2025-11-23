import type { ArcadeEnderSpleefTrail } from '../../../Types/Player.js';

class EnderSpleef {
  bigshotPowerupActivations: number;
  blocksDestroyed: number;
  spleefTrail: ArcadeEnderSpleefTrail | 'UNKNOWN';
  powerupActivations: number;
  tripleshotPowerupActivations: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.bigshotPowerupActivations = data?.bigshot_powerup_activations_ender || 0;
    this.blocksDestroyed = data?.blocks_destroyed_ender || 0;
    this.spleefTrail = data?.enderspleef_trail || 'UNKNOWN';
    this.powerupActivations = data?.powerup_activations_ender || 0;
    this.tripleshotPowerupActivations = data?.tripleshot_powerup_activations_ender || 0;
    this.wins = data?.wins_ender || 0;
  }
}

export default EnderSpleef;
