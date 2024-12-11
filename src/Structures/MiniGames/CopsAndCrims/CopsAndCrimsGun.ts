import { CopsAndCrimsGuns } from '../../../Types/Player.js';

class CopsAndCrimsGun {
  gunName: CopsAndCrimsGuns;
  damageIncrease: number;
  recoilReduction: number;
  reloadSpeedReduction: number;
  costReduction: number;
  kills: number;
  headshots: number;
  constructor(data: Record<string, any>, gunName: CopsAndCrimsGuns) {
    this.gunName = gunName;
    this.damageIncrease = data?.[`${gunName}_damage_increase`] || 0;
    this.recoilReduction = data?.[`${gunName}_recoil_reduction`] || 0;
    this.reloadSpeedReduction = data?.[`${gunName}_reload_speed_reduction`] || 0;
    this.costReduction = data?.[`${gunName}_cost_reduction`] || 0;
    this.kills = data?.[`${gunName}Kills`] || data?.[`${gunName}_kills`] || 0;
    this.headshots = data?.[`${gunName}Headshots`] || 0;
  }
}

export default CopsAndCrimsGun;
