import GenericDuelsMode from './GenericDuelsMode.js';
import InventoryLayout from '../../Shared/InventoryLayout.js';
import { ParseModeBeforeAfter } from '../../../../Utils/index.js';
import type { DuelsModeId } from '../../../../Types/index.js';

class DuelsMode extends GenericDuelsMode {
  duelEnabled: boolean;
  layout: InventoryLayout;
  constructor(data: Record<string, any>, mode: DuelsModeId) {
    super(data, mode);
    this.duelEnabled = data?.[mode] ?? true;
    mode = ParseModeBeforeAfter(mode) as DuelsModeId;
    this.layout = new InventoryLayout(data?.[`layout${mode}layout`] ?? {});
  }
}

export default DuelsMode;
