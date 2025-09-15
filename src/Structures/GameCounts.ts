import { MiniGamesString } from '../Utils/Constants.js';
import { RemoveSnakeCaseString, recursive } from '../Utils/RemoveSnakeCase.js';
import type RequestData from '../Private/RequestData.ts';

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

  isRaw(): this is RequestData {
    return false;
  }
}

export default GameCounts;
