import GameCountsBattleGroundModes from './GameCountsBattleGroundModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsBattleGround extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsBattleGroundModes(data?.modes);
    }
}
export default GameCountsBattleGround;
//# sourceMappingURL=GameCountsBattleGround.js.map