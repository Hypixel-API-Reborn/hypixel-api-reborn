import DuelsMode from "./DuelsMode.js";
import DuelsModeFull from "./DuelsModeFull.js";
class DuelsSumo extends DuelsModeFull {
    tournament;
    constructor(data) {
        super(data, 'sumo_duel');
        this.tournament = new DuelsMode(data, 'sumo_tournament');
    }
}
export default DuelsSumo;
//# sourceMappingURL=DuelsSumo.js.map