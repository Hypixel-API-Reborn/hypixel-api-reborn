import GameCountsGameCountsPitModes from './GameCountsPitModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsPit extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsPitModes(data?.modes);
    }
}
export default GameCountsPit;
//# sourceMappingURL=GameCountsPit.js.map