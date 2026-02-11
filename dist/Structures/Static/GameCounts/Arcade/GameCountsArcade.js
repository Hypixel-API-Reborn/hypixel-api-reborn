import GameCountsArcadeModes from "./GameCountsArcadeModes.js";
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsArcade extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsArcadeModes(data?.modes);
    }
}
export default GameCountsArcade;
//# sourceMappingURL=GameCountsArcade.js.map