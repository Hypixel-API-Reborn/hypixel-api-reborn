import DuelsMode from './DuelsMode.ts';
import DuelsModeFull from './DuelsModeFull.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';

class DuelsClassic extends DuelsModeFull {
  doubles: DuelsMode;
  constructor(data: Record<string, any>) {
    super(data, 'classic_duel');
    this.doubles = new DuelsMode(data, 'classic_doubles');
    this.layout = new InventoryLayout(data?.classic_duel_layout_5 ?? {});
  }
}

export default DuelsClassic;
