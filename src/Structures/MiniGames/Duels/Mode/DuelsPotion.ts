import DuelsModeFull from './DuelsModeFull.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';

class DuelsPotion extends DuelsModeFull {
  constructor(data: Record<string, any>) {
    super(data, 'potion_duel');
    this.layout = new InventoryLayout(data?.potion_duel_layout_5 ?? {});
  }
}

export default DuelsPotion;
