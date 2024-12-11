import BedWarsMode from './BedWarsMode.js';
import type { BedwarsDreamGamemodeName } from '../../../Types/Player.js';

class BedwarsDreamMode {
  doubles: BedWarsMode;
  fours: BedWarsMode;
  constructor(data: Record<string, any>, mode: BedwarsDreamGamemodeName) {
    this.doubles = new BedWarsMode(data, `eight_two_${mode}`);
    this.fours = new BedWarsMode(data, `four_four_${mode}`);
  }
}

export default BedwarsDreamMode;
