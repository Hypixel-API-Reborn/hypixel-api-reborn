import DuelsMode from './DuelsMode.ts';
import DuelsModeFull from './DuelsModeFull.ts';
import InventoryLayout from '../../Shared/InventoryLayout.ts';
import type { DuelsModeSkyWarsKitId } from '../../../../Types/Player.ts';
declare class DuelsSkyWars extends DuelsModeFull {
    private data;
    doubles: DuelsMode;
    tournament: DuelsMode;
    selectedKit: DuelsModeSkyWarsKitId | 'UNKNOWN';
    constructor(data: Record<string, any>);
    getKitLayout(kit?: DuelsModeSkyWarsKitId | 'UNKNOWN'): InventoryLayout;
}
export default DuelsSkyWars;
//# sourceMappingURL=DuelsSkyWars.d.ts.map