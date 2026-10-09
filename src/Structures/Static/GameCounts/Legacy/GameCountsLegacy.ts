import GameCountsGameCountsLegacyModes from './GameCountsLegacyModes.ts';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsLegacy extends GameCountsGeneric {
  modes: GameCountsGameCountsLegacyModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsLegacyModes(data?.modes);
  }
}

export default GameCountsLegacy;
