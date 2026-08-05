import GenericDuelsMode from './GenericDuelsMode.ts';
import InventoryLayout from '../../Shared/InventoryLayout.js';
import type { DuelsModeId } from '../../../../Types/Player.ts';
declare class DuelsMode extends GenericDuelsMode {
    duelEnabled: boolean;
    layout: InventoryLayout;
    constructor(data: Record<string, any>, mode: DuelsModeId);
}
export default DuelsMode;
//# sourceMappingURL=DuelsMode.d.ts.map