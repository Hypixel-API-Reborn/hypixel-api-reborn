import GameCountsGameCountsSkyBlockModes from './GameCountsSkyBlockModes.js';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsSkyBlock extends GameCountsGeneric {
  modes: GameCountsGameCountsSkyBlockModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsSkyBlockModes(data?.modes);
  }
}

export default GameCountsSkyBlock;
