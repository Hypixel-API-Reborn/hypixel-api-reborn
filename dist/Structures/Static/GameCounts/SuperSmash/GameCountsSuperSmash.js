import GameCountsGameCountsSuperSmashModes from './GameCountsSuperSmashModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsSuperSmash extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsSuperSmashModes(data?.modes);
    }
}
export default GameCountsSuperSmash;
//# sourceMappingURL=GameCountsSuperSmash.js.map