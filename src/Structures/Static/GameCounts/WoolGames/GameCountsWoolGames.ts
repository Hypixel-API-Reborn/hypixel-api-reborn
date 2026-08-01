import GameCountsGameCountsWoolGamesModes from './GameCountsWoolGamesModes.js';
import GameCountsGeneric from '../GameCountsGeneric.js';

class GameCountsWoolGames extends GameCountsGeneric {
  modes: GameCountsGameCountsWoolGamesModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsWoolGamesModes(data?.modes);
  }
}

export default GameCountsWoolGames;
