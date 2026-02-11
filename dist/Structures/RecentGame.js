import Game from './Game.js';
class RecentGame {
    game;
    dateTimestamp;
    dateAt;
    mode;
    map;
    ongoing;
    endedTimestamp;
    endedAt;
    constructor(data) {
        this.game = data?.gameType ? new Game(data.gameType) : null;
        this.dateTimestamp = data?.date || null;
        this.dateAt = this.dateTimestamp ? new Date(this.dateTimestamp) : null;
        this.mode = data?.mode || null;
        this.map = data?.map || null;
        this.ongoing = Boolean(!data?.ended || 0) || false;
        this.endedTimestamp = data?.ended ? data?.ended : null;
        this.endedAt = this.endedTimestamp ? new Date(this.endedTimestamp) : null;
    }
    toString() {
        return this.mode;
    }
    isRaw() {
        return false;
    }
}
export default RecentGame;
//# sourceMappingURL=RecentGame.js.map