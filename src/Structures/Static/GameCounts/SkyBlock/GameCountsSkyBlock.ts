import GameCountsGameCountsSkyBlockModes from './GameCountsSkyBlockModes.ts';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsSkyBlock extends GameCountsGeneric {
  modes: GameCountsGameCountsSkyBlockModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsSkyBlockModes(data?.modes);
  }
}

export default GameCountsSkyBlock;
