import DuelsMode from "./DuelsMode.js";
import DuelsModeFull from "./DuelsModeFull.js";
import InventoryLayout from "../../Shared/InventoryLayout.js";
class DuelsUHC extends DuelsModeFull {
    doubles;
    four;
    meetup;
    tournament;
    constructor(data) {
        super(data, 'uhc_duel');
        this.doubles = new DuelsMode(data, 'uhc_doubles');
        this.four = new DuelsMode(data, 'uhc_four');
        this.meetup = new DuelsMode(data, 'uhc_meetup');
        this.tournament = new DuelsMode(data, 'uhc_tournament');
        this.layout = new InventoryLayout(data?.uhc_duel_layout_5 ?? {});
    }
}
export default DuelsUHC;
//# sourceMappingURL=DuelsUHC.js.map