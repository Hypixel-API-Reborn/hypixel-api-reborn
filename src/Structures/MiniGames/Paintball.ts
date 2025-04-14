import Divide from '../../Utils/Divide.js';
import type { PaintballHats } from '../../Types/Player.js';

class Paintball {
  coins: number;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  shotsFired: number;
  killStreaks: number;
  forceFieldTime: number;
  hat: PaintballHats | 'None';
  adrenaline: number;
  endurance: number;
  fortune: number;
  godfather: number;
  superluck: number;
  transfusion: number;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.kills = data?.kills || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = Divide(this.kills, this.deaths);
    this.wins = data?.wins || 0;
    this.shotsFired = data?.shots_fired || 0;
    this.killStreaks = data?.killstreaks || 0;
    this.forceFieldTime = data?.forcefieldTime || 0;
    this.hat = data?.hat || 'None';
    this.adrenaline = data?.adrenaline || 0;
    this.endurance = data?.endurance || 0;
    this.fortune = data?.fortune || 0;
    this.godfather = data?.godfather || 0;
    this.superluck = data?.superluck || 0;
    this.transfusion = data?.transfusion || 0;
  }
}

export default Paintball;
