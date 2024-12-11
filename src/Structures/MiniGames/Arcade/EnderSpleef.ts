import type { EnderSpleefTrails } from '../../../Types/Player.js';

class EnderSpleef {
  wins: number;
  kills: number;
  trail: EnderSpleefTrails | 'None';
  blocksDestroyed: number;
  bigShotActivations: number;
  tripleShotActivations: number;
  totalPowerUpActivations: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_ender || 0;
    this.kills = data?.kills_dragonwars2 || 0;
    this.trail = data?.enderspleef_trail || 'None';
    this.blocksDestroyed = data?.blocks_destroyed_ender || 0;
    this.bigShotActivations = data?.bigshot_powerup_activations_ender || 0;
    this.tripleShotActivations = data?.tripleshot_powerup_activations_ender || 0;
    this.totalPowerUpActivations = this.bigShotActivations + this.tripleShotActivations;
  }
}

export default EnderSpleef;
