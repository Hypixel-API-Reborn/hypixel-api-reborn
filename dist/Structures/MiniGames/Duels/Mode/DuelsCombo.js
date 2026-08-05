import DuelsModeFull from "./DuelsModeFull.js";
import InventoryLayout from "../../Shared/InventoryLayout.js";
class DuelsCombo extends DuelsModeFull {
    constructor(data) {
        super(data, 'combo_duel');
        this.layout = new InventoryLayout(data?.combo_duel_layout_5 ?? {});
    }
}
export default DuelsCombo;
//# sourceMappingURL=DuelsCombo.js.map