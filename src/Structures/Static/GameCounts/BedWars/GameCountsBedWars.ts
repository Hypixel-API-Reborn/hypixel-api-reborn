import GameCountsGameCountsBedWarsModes from './GameCountsBedWarsModes.js';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsBedWars extends GameCountsGeneric {
  modes: GameCountsGameCountsBedWarsModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsBedWarsModes(data?.modes);
  }
}

export default GameCountsBedWars;
