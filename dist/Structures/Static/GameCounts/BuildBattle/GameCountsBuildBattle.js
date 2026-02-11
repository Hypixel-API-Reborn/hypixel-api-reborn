import GameCountsGameCountsBuildBattleModes from './GameCountsBuildBattleModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsBuildBattle extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsBuildBattleModes(data?.modes);
    }
}
export default GameCountsBuildBattle;
//# sourceMappingURL=GameCountsBuildBattle.js.map