import DuelsModeFull from "./DuelsModeFull.js";
import InventoryLayout from "../../Shared/InventoryLayout.js";
class DuelsBlitz extends DuelsModeFull {
    data;
    selectedKit;
    constructor(data) {
        super(data, 'blitz_duel');
        this.data = data;
        this.selectedKit = this.data?.blitz_duels_kit ?? 'UNKNOWN';
    }
    getKitLayout(kit = this.selectedKit) {
        return new InventoryLayout(this.data?.[`layout_blitz_duel_${kit}`] ?? {});
    }
}
export default DuelsBlitz;
//# sourceMappingURL=DuelsBlitz.js.map