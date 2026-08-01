import GameCountsBasicModes from '../GameCountsBasicModes.js';
import GameCountsGeneric from '../GameCountsGeneric.js';

class GameCountsSpeedUHC extends GameCountsGeneric {
  modes: GameCountsBasicModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsBasicModes(data?.modes);
  }
}

export default GameCountsSpeedUHC;
