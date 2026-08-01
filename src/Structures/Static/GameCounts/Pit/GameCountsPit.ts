import GameCountsGameCountsPitModes from './GameCountsPitModes.js';
import GameCountsGeneric from '../GameCountsGeneric.js';

class GameCountsPit extends GameCountsGeneric {
  modes: GameCountsGameCountsPitModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsPitModes(data?.modes);
  }
}

export default GameCountsPit;
