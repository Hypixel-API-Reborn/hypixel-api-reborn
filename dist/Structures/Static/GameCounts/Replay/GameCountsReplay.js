import GameCountsGameContsReplayModes from './GameCountsReplayModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsReplay extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameContsReplayModes(data?.modes);
    }
}
export default GameCountsReplay;
//# sourceMappingURL=GameCountsReplay.js.map