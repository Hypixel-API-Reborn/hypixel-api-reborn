import { Divide, ParseModeBefore } from '../../../Utils/index.js';
import type { BedWarsModeId } from '../../../Types/index.js';

class BedWarsBeds {
  broken: number;
  lost: number;
  ratio: number;
  constructor(data: Record<string, any>, mode?: BedWarsModeId) {
    mode = ParseModeBefore(mode) as BedWarsModeId;
    this.broken = data?.[`${mode}beds_broken_bedwars`] ?? 0;
    this.lost = data?.[`${mode}beds_lost_bedwars`] ?? 0;
    this.ratio = Divide(this.broken, this.lost);
  }
}

export default BedWarsBeds;
