import GameCountsGeneric from "../GameCountsGeneric.js";
import GameCountsTNTGamesModes from './GameCountsTNTGamesModes.js';
class GameCountsTNTGames extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsTNTGamesModes(data?.modes);
    }
}
export default GameCountsTNTGames;
//# sourceMappingURL=GameCountsTNTGames.js.map