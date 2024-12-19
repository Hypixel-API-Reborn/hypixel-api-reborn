import { games } from '../Utils/Constants.js';
import type { GameCode, GameID, GameString } from '../Types/Game.js';

class Game {
  game: GameID | GameCode;
  id: GameID | null;
  code: GameCode | null;
  name: GameString | null;
  found: boolean;
  constructor(game: GameID | GameCode) {
    this.game = game;
    const result =
      games.find(
        (Game) =>
          Game.code.toLowerCase() === this.game ||
          Game.id.toString() === this.game ||
          Game.name.toLowerCase() === this.game
      ) || null;
    this.id = result?.id || null;
    this.code = result?.code || null;
    this.name = result?.name || null;
    this.found = null !== result;
  }

  toString(): GameString | null {
    return this.name;
  }

  static get IDS(): GameID[] {
    return games.map((x) => x.id as GameID);
  }

  static get CODES(): GameCode[] {
    return games.map((x) => x.code) as GameCode[];
  }

  static get NAMES(): GameString[] {
    return games.map((x) => x.name) as GameString[];
  }
}

export default Game;
