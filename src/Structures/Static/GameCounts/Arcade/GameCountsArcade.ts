import GameCountsArcadeModes from './GameCountsArcadeModes.ts';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsArcade extends GameCountsGeneric {
  modes: GameCountsArcadeModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsArcadeModes(data?.modes);
  }
}

export default GameCountsArcade;
