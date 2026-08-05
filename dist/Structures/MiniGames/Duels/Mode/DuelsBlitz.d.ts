import DuelsModeFull from './DuelsModeFull.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';
import type { DuelsModeBlitzKitId } from '../../../../Types/Player.ts';
declare class DuelsBlitz extends DuelsModeFull {
    private data;
    selectedKit: DuelsModeBlitzKitId | 'UNKNOWN';
    constructor(data: Record<string, any>);
    getKitLayout(kit?: DuelsModeBlitzKitId | 'UNKNOWN'): InventoryLayout;
}
export default DuelsBlitz;
//# sourceMappingURL=DuelsBlitz.d.ts.map