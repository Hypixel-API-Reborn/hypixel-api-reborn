import DuelsMode from './DuelsMode.ts';
import { getDuelsTitle } from '../../../../Utils/Constants.ts';
import type { DuelsModeId, DuelsTitleParsed } from '../../../../Types/Player.ts';

class DuelsModeFull extends DuelsMode {
  title: DuelsTitleParsed;
  constructor(data: Record<string, any>, mode: DuelsModeId) {
    super(data, mode);
    this.title = getDuelsTitle(this.wins);
  }
}

export default DuelsModeFull;
