import DuelsMode from "./DuelsMode.js";
import { getDuelsTitle } from "../../../../Utils/Constants.js";
class DuelsModeFull extends DuelsMode {
    title;
    constructor(data, mode) {
        super(data, mode);
        this.title = getDuelsTitle(this.wins);
    }
}
export default DuelsModeFull;
//# sourceMappingURL=DuelsModeFull.js.map