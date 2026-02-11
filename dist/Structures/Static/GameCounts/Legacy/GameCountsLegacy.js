import GameCountsGameCountsLegacyModes from './GameCountsLegacyModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsLegacy extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsLegacyModes(data?.modes);
    }
}
export default GameCountsLegacy;
//# sourceMappingURL=GameCountsLegacy.js.map