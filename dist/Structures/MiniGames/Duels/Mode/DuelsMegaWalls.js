import DuelsMode from "./DuelsMode.js";
import DuelsModeFull from "./DuelsModeFull.js";
class DuelsMegaWalls extends DuelsModeFull {
    doubles;
    four;
    constructor(data) {
        super(data, 'mw_duel');
        this.doubles = new DuelsMode(data, 'mw_doubles');
        this.four = new DuelsMode(data, 'mw_four');
    }
}
export default DuelsMegaWalls;
//# sourceMappingURL=DuelsMegaWalls.js.map