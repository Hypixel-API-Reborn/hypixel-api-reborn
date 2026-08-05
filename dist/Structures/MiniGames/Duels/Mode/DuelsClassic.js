import DuelsMode from "./DuelsMode.js";
import DuelsModeFull from "./DuelsModeFull.js";
import InventoryLayout from "../../Shared/InventoryLayout.js";
class DuelsClassic extends DuelsModeFull {
    doubles;
    constructor(data) {
        super(data, 'classic_duel');
        this.doubles = new DuelsMode(data, 'classic_doubles');
        this.layout = new InventoryLayout(data?.classic_duel_layout_5 ?? {});
    }
}
export default DuelsClassic;
//# sourceMappingURL=DuelsClassic.js.map