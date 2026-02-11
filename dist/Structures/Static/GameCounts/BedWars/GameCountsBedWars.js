import GameCountsGameCountsBedWarsModes from './GameCountsBedWarsModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsBedWars extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsBedWarsModes(data?.modes);
    }
}
export default GameCountsBedWars;
//# sourceMappingURL=GameCountsBedWars.js.map