import { MiniGamesString } from '../Utils/Constants.js';
import { RemoveSnakeCaseString, recursive } from '../Utils/RemoveSnakeCase.js';

class GameCounts {
  playerCount: number;
  [x: string]: object | number;
  constructor(data: Record<string, any>) {
    this.playerCount = data.playerCount;
    for (const game in data.games) {
      if (Object.prototype.hasOwnProperty.call(MiniGamesString, game)) {
        const objectName = (MiniGamesString[game] || 'Unknown').toUpperCase().replace(/ +/g, '_');
        this[RemoveSnakeCaseString(objectName)] = recursive(data.games[game], true);
      } else {
        this[RemoveSnakeCaseString(game)] = recursive(data.games[game], true);
      }
    }
  }

  toString(): number {
    return this.playerCount;
  }
}

export default GameCounts;
