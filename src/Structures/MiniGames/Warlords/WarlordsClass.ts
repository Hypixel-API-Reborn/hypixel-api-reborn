import Divide from '../../../Utils/Divide.js';
import type { WarlordsClassId } from '../../../Types/Player.ts';

class WarlordsClass {
  wins: number;
  losses: number;
  WLR: number;
  gamesPlayed: number;
  damage: number;
  heal: number;
  damagePrevented: number;
  constructor(data: Record<string, any>, className: WarlordsClassId) {
    this.wins = data?.[`wins_${className}`] || 0;
    this.losses = data?.[`losses_${className}`] || 0;
    this.WLR = Divide(this.wins, this.losses);
    this.gamesPlayed = data?.[`${className}_plays`] || 0;
    this.damage = data?.[`damage_${className}`] || 0;
    this.heal = data?.[`heal_${className}`] || 0;
    this.damagePrevented = data?.[`damage_prevented_${className}`] || 0;
  }
}

export default WarlordsClass;
