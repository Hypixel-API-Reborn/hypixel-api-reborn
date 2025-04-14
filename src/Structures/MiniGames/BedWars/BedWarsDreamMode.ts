import BedWarsMode from './BedWarsMode.js';
import type { BedWarsDreamGamemodeName } from '../../../Types/Player.js';

class BedWarsDreamMode {
  doubles: BedWarsMode;
  fours: BedWarsMode;
  constructor(data: Record<string, any>, mode: BedWarsDreamGamemodeName) {
    this.doubles = new BedWarsMode(data, `eight_two_${mode}`);
    this.fours = new BedWarsMode(data, `four_four_${mode}`);
  }
}

export default BedWarsDreamMode;
