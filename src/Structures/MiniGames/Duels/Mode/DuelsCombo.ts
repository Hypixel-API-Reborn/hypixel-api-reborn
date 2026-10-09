import DuelsModeFull from './DuelsModeFull.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';

class DuelsCombo extends DuelsModeFull {
  constructor(data: Record<string, any>) {
    super(data, 'combo_duel');
    this.layout = new InventoryLayout(data?.combo_duel_layout_5 ?? {});
  }
}

export default DuelsCombo;
