import Divide from '../../../Utils/Divide.js';
import type { BedwarsGamemodeName } from '../../../Types/Player.js';

class BedWarsBeds {
  broken: number;
  lost: number;
  BLRatio: number;
  constructor(data: Record<string, any>, mode?: BedwarsGamemodeName | string) {
    mode = mode ? `${mode}_` : '';
    this.broken = data?.[`${mode}beds_broken_bedwars`] || 0;
    this.lost = data?.[`${mode}beds_lost_bedwars`] || 0;
    this.BLRatio = Divide(data?.[`${mode}beds_broken_bedwars`], data?.[`${mode}_beds_lost_bedwars`]);
  }
}

export default BedWarsBeds;
