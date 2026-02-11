import GameCountsBattleGroundModes from './GameCountsBattleGroundModes.js';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsBattleGround extends GameCountsGeneric {
  modes: GameCountsBattleGroundModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsBattleGroundModes(data?.modes);
  }
}

export default GameCountsBattleGround;
