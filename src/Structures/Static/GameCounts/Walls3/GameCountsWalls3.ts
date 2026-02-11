import GameCountsGeneric from '../GameCountsGeneric.ts';
import GameCountsWalls3Modes from './GameCountsWalls3Modes.js';

class GameCountsWalls3 extends GameCountsGeneric {
  modes: GameCountsWalls3Modes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsWalls3Modes(data?.modes);
  }
}

export default GameCountsWalls3;
