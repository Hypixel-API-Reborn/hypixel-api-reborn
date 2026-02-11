import GameCountsBasicModes from '../GameCountsBasicModes.ts';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsSpeedUHC extends GameCountsGeneric {
  modes: GameCountsBasicModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsBasicModes(data?.modes);
  }
}

export default GameCountsSpeedUHC;
