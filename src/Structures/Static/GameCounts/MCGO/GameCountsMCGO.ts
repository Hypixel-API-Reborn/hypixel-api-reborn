import GameCountsGameCountsMCGOModes from './GameCountsMCGOModes.js';
import GameCountsGeneric from '../GameCountsGeneric.js';

class GameCountsMCGO extends GameCountsGeneric {
  modes: GameCountsGameCountsMCGOModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsMCGOModes(data?.modes);
  }
}

export default GameCountsMCGO;
