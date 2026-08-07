import DuelsMode from './DuelsMode.js';
import DuelsModeFull from './DuelsModeFull.js';
import InventoryLayout from '../../Shared/InventoryLayout.js';

class DuelsOP extends DuelsModeFull {
  doubles: DuelsMode;
  constructor(data: Record<string, any>) {
    super(data, 'op_duel');
    this.doubles = new DuelsMode(data, 'op_doubles');
    this.layout = new InventoryLayout(data?.op_duel_layout_5 ?? {});
  }
}

export default DuelsOP;
