import DuelsModeFull from "./DuelsModeFull.js";
import InventoryLayout from "../../Shared/InventoryLayout.js";
class DuelsPotion extends DuelsModeFull {
    constructor(data) {
        super(data, 'potion_duel');
        this.layout = new InventoryLayout(data?.potion_duel_layout_5 ?? {});
    }
}
export default DuelsPotion;
//# sourceMappingURL=DuelsPotion.js.map