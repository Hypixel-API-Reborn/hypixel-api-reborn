import GameCountsGameCountsMurderMysteryModes from './GameCountsMurderMysteryModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsMurderMystery extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsMurderMysteryModes(data?.modes);
    }
}
export default GameCountsMurderMystery;
//# sourceMappingURL=GameCountsMurderMystery.js.map