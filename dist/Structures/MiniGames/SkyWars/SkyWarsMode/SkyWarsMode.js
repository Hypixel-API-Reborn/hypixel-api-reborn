import BaseSkyWarsMode from "./BaseSkyWarsMode.js";
import { ParseModeAfter } from "../../../../Utils/ParseMode.js";
class SkyWarsMode extends BaseSkyWarsMode {
    activeKit;
    constructor(data, mode) {
        mode = ParseModeAfter(mode);
        super(data, mode);
        this.activeKit = data?.[`activeKit${mode.toUpperCase()}`] || 'UNKNOWN';
    }
}
export default SkyWarsMode;
//# sourceMappingURL=SkyWarsMode.js.map