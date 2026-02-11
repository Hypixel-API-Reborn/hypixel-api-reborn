import GameCountsGeneric from '../GameCountsGeneric.ts';
import GameCountsTNTGamesModes from './GameCountsTNTGamesModes.js';

class GameCountsTNTGames extends GameCountsGeneric {
  modes: GameCountsTNTGamesModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsTNTGamesModes(data?.modes);
  }
}

export default GameCountsTNTGames;
