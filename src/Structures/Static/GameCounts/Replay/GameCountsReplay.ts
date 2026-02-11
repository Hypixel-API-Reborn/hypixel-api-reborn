import GameCountsGameContsReplayModes from './GameCountsReplayModes.js';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsReplay extends GameCountsGeneric {
  modes: GameCountsGameContsReplayModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameContsReplayModes(data?.modes);
  }
}

export default GameCountsReplay;
