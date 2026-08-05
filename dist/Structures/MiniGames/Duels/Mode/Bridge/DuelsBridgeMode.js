import DuelsMode from "../DuelsMode.js";
import { ParseModeBefore } from "../../../../../Utils/ParseMode.js";
class DuelsBridgeMode extends DuelsMode {
    goals;
    constructor(data, mode) {
        super(data, mode);
        mode = ParseModeBefore(mode);
        this.goals = data?.[`${mode}goals`] ?? 0;
    }
}
export default DuelsBridgeMode;
//# sourceMappingURL=DuelsBridgeMode.js.map