import GameCountsGameCountsDuelsModes from './GameCountsDuelsModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GaemCountsDuels extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsDuelsModes(data?.modes);
    }
}
export default GaemCountsDuels;
//# sourceMappingURL=GameCountsDuels.js.map