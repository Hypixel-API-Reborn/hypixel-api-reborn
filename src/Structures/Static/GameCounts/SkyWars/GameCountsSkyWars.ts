import GameCountsGeneric from '../GameCountsGeneric.js';
import GameCountsMCGOModes from './GameCountsSkyWarsModes.js';

class GameCountsSkyWars extends GameCountsGeneric {
  modes: GameCountsMCGOModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsMCGOModes(data?.modes);
  }
}

export default GameCountsSkyWars;
