import DuelsMode from './DuelsMode.ts';
import DuelsModeFull from './DuelsModeFull.ts';

class DuelsSumo extends DuelsModeFull {
  tournament: DuelsMode;
  constructor(data: Record<string, any>) {
    super(data, 'sumo_duel');
    this.tournament = new DuelsMode(data, 'sumo_tournament');
  }
}

export default DuelsSumo;
