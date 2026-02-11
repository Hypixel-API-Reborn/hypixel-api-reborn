import GameCountsBasicModes from "../GameCountsBasicModes.js";
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsSpeedUHC extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsBasicModes(data?.modes);
    }
}
export default GameCountsSpeedUHC;
//# sourceMappingURL=GameCountsSpeedUHC.js.map