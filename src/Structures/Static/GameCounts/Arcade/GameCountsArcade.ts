import GameCountsArcadeModes from './GameCountsArcadeModes.js';
import GameCountsGeneric from '../GameCountsGeneric.js';

class GameCountsArcade extends GameCountsGeneric {
  modes: GameCountsArcadeModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsArcadeModes(data?.modes);
  }
}

export default GameCountsArcade;
