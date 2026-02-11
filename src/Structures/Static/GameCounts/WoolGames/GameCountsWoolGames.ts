import GameCountsGameCountsWoolGamesModes from './GameCountsWoolGamesModes.js';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsWoolGames extends GameCountsGeneric {
  modes: GameCountsGameCountsWoolGamesModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsWoolGamesModes(data?.modes);
  }
}

export default GameCountsWoolGames;
