import Divide from '../../../Utils/Divide.js';
import { ParseModeBefore } from '../../../Utils/ParseMode.ts';
import type { BedWarsModeId } from '../../../Types/Player.js';

class BedWarsBeds {
  broken: number;
  lost: number;
  ratio: number;
  constructor(data: Record<string, any>, mode?: BedWarsModeId) {
    mode = ParseModeBefore(mode) as BedWarsModeId;
    this.broken = data?.[`${mode}beds_broken_bedwars`] || 0;
    this.lost = data?.[`${mode}beds_lost_bedwars`] || 0;
    this.ratio = Divide(this.broken, this.lost);
  }
}

export default BedWarsBeds;
