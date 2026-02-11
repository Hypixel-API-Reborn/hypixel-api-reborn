import GameCountsGeneric from "../GameCountsGeneric.js";
import GameCountsWalls3Modes from './GameCountsWalls3Modes.js';
class GameCountsWalls3 extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsWalls3Modes(data?.modes);
    }
}
export default GameCountsWalls3;
//# sourceMappingURL=GameCountsWalls3.js.map