import GameCountsGameCountsSkyBlockModes from './GameCountsSkyBlockModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsSkyBlock extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsSkyBlockModes(data?.modes);
    }
}
export default GameCountsSkyBlock;
//# sourceMappingURL=GameCountsSkyBlock.js.map