import GameCountsBasicModes from "../GameCountsBasicModes.js";
import GameCountsGeneric from "../GameCountsGeneric.js";
class GameCountsSurvivalGames extends GameCountsGeneric {
    modes;
    constructor(data) {
        super(data);
        this.modes = new GameCountsBasicModes(data?.modes);
    }
}
export default GameCountsSurvivalGames;
//# sourceMappingURL=GameCountsSurvivalGames.js.map