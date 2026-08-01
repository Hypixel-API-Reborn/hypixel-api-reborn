import GameCountsGameCountsMurderMysteryModes from './GameCountsMurderMysteryModes.js';
import GameCountsGeneric from '../GameCountsGeneric.js';

class GameCountsMurderMystery extends GameCountsGeneric {
  modes: GameCountsGameCountsMurderMysteryModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsMurderMysteryModes(data?.modes);
  }
}

export default GameCountsMurderMystery;
