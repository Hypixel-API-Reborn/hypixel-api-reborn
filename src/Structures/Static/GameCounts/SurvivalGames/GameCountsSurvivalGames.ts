import GameCountsBasicModes from '../GameCountsBasicModes.ts';
import GameCountsGeneric from '../GameCountsGeneric.ts';

class GameCountsSurvivalGames extends GameCountsGeneric {
  modes: GameCountsBasicModes;
  constructor(data: Record<string, any>) {
    super(data);
    this.modes = new GameCountsBasicModes(data?.modes);
  }
}

export default GameCountsSurvivalGames;
