import DuelsMode from './DuelsMode.ts';
import DuelsModeFull from './DuelsModeFull.ts';

class DuelsMegaWalls extends DuelsModeFull {
  doubles: DuelsMode;
  four: DuelsMode;
  constructor(data: Record<string, any>) {
    super(data, 'mw_duel');
    this.doubles = new DuelsMode(data, 'mw_doubles');
    this.four = new DuelsMode(data, 'mw_four');
  }
}

export default DuelsMegaWalls;
