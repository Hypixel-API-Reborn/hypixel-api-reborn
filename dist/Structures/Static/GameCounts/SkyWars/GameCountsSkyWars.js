import GameCountsGeneric from "../GameCountsGeneric.js";
import GameCountsMCGOModes from './GameCountsSkyWarsModes.js';
class GameCountsSkyWars extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsMCGOModes(data?.modes);
    }
}
export default GameCountsSkyWars;
//# sourceMappingURL=GameCountsSkyWars.js.map