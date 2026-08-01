import GameCountGames from './GameCountsGames.js';

class GameCounts {
  playerCount: number;
  games: GameCountGames;
  constructor(data: Record<string, any>) {
    this.playerCount = data?.playerCount ?? 0;
    this.games = new GameCountGames(data.games);
  }

  toString(): number {
    return this.playerCount;
  }
}

export default GameCounts;
