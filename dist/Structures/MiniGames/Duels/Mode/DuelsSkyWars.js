import DuelsMode from "./DuelsMode.js";
import DuelsModeFull from "./DuelsModeFull.js";
import InventoryLayout from "../../Shared/InventoryLayout.js";
import { getDuelsTitle } from "../../../../Utils/Constants.js";
class DuelsSkyWars extends DuelsModeFull {
    data;
    doubles;
    tournament;
    selectedKit;
    constructor(data) {
        super(data, 'sw_duel');
        this.data = data;
        this.doubles = new DuelsMode(this.data, 'sw_doubles');
        this.title = getDuelsTitle(this.wins + this.doubles.wins);
        this.tournament = new DuelsMode(this.data, 'sw_tournament');
        this.selectedKit = this.data?.sw_duels_kit_new3 ?? 'UNKNOWN';
    }
    getKitLayout(kit = this.selectedKit) {
        return new InventoryLayout(this.data?.[`layout_sw_duel_${kit}`] ?? {});
    }
}
export default DuelsSkyWars;
//# sourceMappingURL=DuelsSkyWars.js.map