import DuelsModeFull from './DuelsModeFull.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';

class DuelsBow extends DuelsModeFull {
  constructor(data: Record<string, any>) {
    super(data, 'bow_duel');
    this.layout = new InventoryLayout(data?.bow_duel_layout_5 ?? {});
  }
}

export default DuelsBow;
