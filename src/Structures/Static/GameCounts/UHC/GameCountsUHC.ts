import GameCountsGeneric from '../GameCountsGeneric.ts';
import GameCountsUHCModes from './GameCountsUHCModes.js';

class GameCountsUHC extends GameCountsGeneric {
  modes: GameCountsUHCModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsUHCModes(data?.modes);
  }
}

export default GameCountsUHC;
