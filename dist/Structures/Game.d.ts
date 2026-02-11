import type { GameCode, GameID, GameString } from '../Types/Game.js';
declare class Game {
    game: GameID | GameCode;
    id: GameID | null;
    code: GameCode | null;
    name: GameString | null;
    found: boolean;
    constructor(game: GameID | GameCode);
    toString(): GameString | null;
    static get IDS(): GameID[];
    static get CODES(): GameCode[];
    static get NAMES(): GameString[];
}
export default Game;
//# sourceMappingURL=Game.d.ts.map