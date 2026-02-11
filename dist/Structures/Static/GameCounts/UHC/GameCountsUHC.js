import GameCountsGeneric from "../GameCountsGeneric.js";
import GameCountsUHCModes from './GameCountsUHCModes.js';
class GameCountsUHC extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsUHCModes(data?.modes);
    }
}
export default GameCountsUHC;
//# sourceMappingURL=GameCountsUHC.js.map