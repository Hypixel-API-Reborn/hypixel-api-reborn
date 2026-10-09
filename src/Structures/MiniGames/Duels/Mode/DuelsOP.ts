import DuelsMode from './DuelsMode.ts';
import DuelsModeFull from './DuelsModeFull.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';

class DuelsOP extends DuelsModeFull {
  doubles: DuelsMode;
  constructor(data: Record<string, any>) {
    super(data, 'op_duel');
    this.doubles = new DuelsMode(data, 'op_doubles');
    this.layout = new InventoryLayout(data?.op_duel_layout_5 ?? {});
  }
}

export default DuelsOP;
