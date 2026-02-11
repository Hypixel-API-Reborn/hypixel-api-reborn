import GameCountGames from "./GameCountsGames.js";
class GameCounts {
    playerCount;
    games;
    constructor(data) {
        this.playerCount = data?.playerCount || 0;
        this.games = new GameCountGames(data.games);
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