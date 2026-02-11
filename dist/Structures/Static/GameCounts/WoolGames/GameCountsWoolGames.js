import GameCountsGameCountsWoolGamesModes from './GameCountsWoolGamesModes.js';
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsWoolGames extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsGameCountsWoolGamesModes(data?.modes);
    }
}
export default GameCountsWoolGames;
//# sourceMappingURL=GameCountsWoolGames.js.map