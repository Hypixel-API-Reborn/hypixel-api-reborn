import GenericDuelsMode from "./GenericDuelsMode.js";
import InventoryLayout from '../../Shared/InventoryLayout.js';
import { ParseModeBeforeAfter } from '../../../../Utils/ParseMode.js';
class DuelsMode extends GenericDuelsMode {
    duelEnabled;
    layout;
    constructor(data, mode) {
        super(data, mode);
        this.duelEnabled = data?.[mode] ?? true;
        mode = ParseModeBeforeAfter(mode);
        this.layout = new InventoryLayout(data?.[`layout${mode}layout`] ?? {});
    }
}
export default DuelsMode;
//# sourceMappingURL=DuelsMode.js.map