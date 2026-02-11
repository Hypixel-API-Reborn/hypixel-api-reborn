import Game from './Game.js';
class Status {
    online;
    game;
    mode;
    map;
    constructor(data) {
        this.online = data?.online || false;
        this.game = data.gameType ? new Game(data.gameType) : null;
        this.mode = data?.mode || null;
        this.map = data?.map || null;
    }
    toString() {
        return this.online ? 'Online' : 'Offline';
    }
    isRaw() {
        return false;
    }
}
export default Status;
//# sourceMappingURL=Status.js.map