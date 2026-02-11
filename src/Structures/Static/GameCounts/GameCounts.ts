import GameCountGames from './GameCountsGames.ts';
import type RequestData from '../../../Private/RequestData.ts';

class GameCounts {
  playerCount: number;
  games: GameCountGames;
  constructor(data: Record<string, any>) {
    this.playerCount = data?.playerCount || 0;
    this.games = new GameCountGames(data.games);
  }

  toString(): number {
    return this.playerCount;
  }

  isRaw(): this is RequestData {
    return false;
  }
}

export default GameCounts;
