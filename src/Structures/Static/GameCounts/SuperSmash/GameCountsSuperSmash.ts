import GameCountsGameCountsSuperSmashModes from './GameCountsSuperSmashModes.ts';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsSuperSmash extends GameCountsGeneric {
  modes: GameCountsGameCountsSuperSmashModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsGameCountsSuperSmashModes(data?.modes);
  }
}

export default GameCountsSuperSmash;
