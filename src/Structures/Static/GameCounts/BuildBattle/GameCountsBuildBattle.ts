import GameCountsGameCountsBuildBattleModes from './GameCountsBuildBattleModes.js';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsBuildBattle extends GameCountsGeneric {
  modes: GameCountsGameCountsBuildBattleModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsBuildBattleModes(data?.modes);
  }
}

export default GameCountsBuildBattle;
