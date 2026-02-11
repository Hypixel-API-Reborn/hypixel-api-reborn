import Divide from '../../../Utils/Divide.js';
import { ParseModeBefore } from "../../../Utils/ParseMode.js";
class BedWarsBeds {
    broken;
    lost;
    ratio;
    constructor(data, mode) {
        mode = ParseModeBefore(mode);
        this.broken = data?.[`${mode}beds_broken_bedwars`] || 0;
        this.lost = data?.[`${mode}beds_lost_bedwars`] || 0;
        this.ratio = Divide(this.broken, this.lost);
    }
}
export default BedWarsBeds;
//# sourceMappingURL=BedWarsBeds.js.map