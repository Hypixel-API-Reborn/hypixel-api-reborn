import { games } from '../Utils/Constants.js';
class Game {
    game;
    id;
    code;
    name;
    found;
    constructor(game) {
        this.game = game;
        const result = games.find((Game) => Game.code.toLowerCase() === this.game ||
            Game.id.toString() === this.game ||
            Game.name.toLowerCase() === this.game) || null;
        this.id = result?.id || null;
        this.code = result?.code || null;
        this.name = result?.name || null;
        this.found = result !== null;
    }
    toString() {
        return this.name;
    }
    static get IDS() {
        return games.map((x) => x.id);
    }
    static get CODES() {
        return games.map((x) => x.code);
    }
    static get NAMES() {
        return games.map((x) => x.name);
    }
}
export default Game;
//# sourceMappingURL=Game.js.map