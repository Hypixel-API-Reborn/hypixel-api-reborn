import GameCountsGameCountsLegacyModes from './GameCountsLegacyModes.js';
import GameCountsGeneric from '../GameCountsGeneric.js';

class GameCountsLegacy extends GameCountsGeneric {
  modes: GameCountsGameCountsLegacyModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsLegacyModes(data?.modes);
  }
}

export default GameCountsLegacy;
