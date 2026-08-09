import DuelsMode from './DuelsMode.js';
import { getDuelsTitle } from '../../../../Utils/index.js';
import type { DuelsModeId, DuelsTitleParsed } from '../../../../Types/index.js';

class DuelsModeFull extends DuelsMode {
  title: DuelsTitleParsed;
  constructor(data: Record<string, any>, mode: DuelsModeId) {
    super(data, mode);
    this.title = getDuelsTitle(this.wins);
  }
}

export default DuelsModeFull;
