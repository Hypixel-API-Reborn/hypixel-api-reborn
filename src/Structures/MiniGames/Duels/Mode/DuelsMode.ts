import GenericDuelsMode from './GenericDuelsMode.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';
import { ParseModeBeforeAfter } from '../../../../Utils/index.ts';
import type { DuelsModeId } from '../../../../Types/index.ts';

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
