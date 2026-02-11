import GameCountsGameCountsDuelsModes from './GameCountsDuelsModes.js';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GaemCountsDuels extends GameCountsGeneric {
  modes: GameCountsGameCountsDuelsModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsDuelsModes(data?.modes);
  }
}

export default GaemCountsDuels;
