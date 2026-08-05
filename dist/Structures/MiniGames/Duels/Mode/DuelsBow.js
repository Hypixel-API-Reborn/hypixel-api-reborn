import DuelsModeFull from "./DuelsModeFull.js";
import InventoryLayout from "../../Shared/InventoryLayout.js";
class DuelsBow extends DuelsModeFull {
    constructor(data) {
        super(data, 'bow_duel');
        this.layout = new InventoryLayout(data?.bow_duel_layout_5 ?? {});
    }
}
export default DuelsBow;
//# sourceMappingURL=DuelsBow.js.map