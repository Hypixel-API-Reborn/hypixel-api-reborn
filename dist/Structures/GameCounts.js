import { MiniGamesString } from '../Utils/Constants.js';
import { RemoveSnakeCaseString, recursive } from '../Utils/RemoveSnakeCase.js';
class GameCounts {
    playerCount;
    constructor(data) {
        this.playerCount = data.playerCount || 0;
        for (const game in data.games) {
            if (Object.prototype.hasOwnProperty.call(MiniGamesString, game)) {
                const objectName = (MiniGamesString[game] || 'UNKNOWN').toUpperCase().replace(/ +/g, '_');
                this[RemoveSnakeCaseString(objectName)] = recursive(data.games[game], true);
            }
            else {
                this[RemoveSnakeCaseString(game)] = recursive(data.games[game], true);
            }
        }
    }
    toString() {
        return this.playerCount;
    }
    isRaw() {
        return false;
    }
}
export default GameCounts;
//# sourceMappingURL=GameCounts.js.map