import type { CopsAndCrimsGunId } from '../../../Types/Player.js';

class CopsAndCrimsGun {
  gunId: CopsAndCrimsGunId;
  damageIncrease: number;
  recoilReduction: number;
  reloadSpeedReduction: number;
  costReduction: number;
  kills: number;
  headShots: number;
  constructor(data: Record<string, any>, gunId: CopsAndCrimsGunId) {
    this.gunId = gunId;
    this.damageIncrease = data?.[`${gunId}_damage_increase`] || 0;
    this.recoilReduction = data?.[`${gunId}_recoil_reduction`] || 0;
    this.reloadSpeedReduction = data?.[`${gunId}_reload_speed_reduction`] || 0;
    this.costReduction = data?.[`${gunId}_cost_reduction`] || 0;
    this.kills = data?.[`${gunId}Kills`] || data?.[`${gunId}_kills`] || 0;
    this.headShots = data?.[`${gunId}Headshots`] || 0;
  }
}

export default CopsAndCrimsGun;
