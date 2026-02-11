import GameCountsGeneric from '../GameCountsGeneric.ts';
import GameCountsMCGOModes from './GameCountsSkyWarsModes.js';
declare class GameCountsSkyWars extends GameCountsGeneric {
    modes: GameCountsMCGOModes;
    constructor(data: Record<string, any>);
}
export default GameCountsSkyWars;
//# sourceMappingURL=GameCountsSkyWars.d.ts.map