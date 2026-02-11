import GameCountsGameCountsMCGOModes from './GameCountsMCGOModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsMCGO extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsMCGOModes(data?.modes);
    }
}
export default GameCountsMCGO;
//# sourceMappingURL=GameCountsMCGO.js.map