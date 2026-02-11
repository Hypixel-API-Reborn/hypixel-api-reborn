import Game from '../Game.js';
class Booster {
    purchaser;
    amount;
    originalLength;
    remaining;
    activatedTimestamp;
    activated;
    game;
    isActive;
    type;
    stackers;
    expired;
    constructor(data) {
        this.purchaser = data.purchaserUuid || 'UNKNOWN';
        this.amount = data.amount || 0;
        this.originalLength = data.originalLength || 0;
        this.remaining = data.length || 0;
        this.activatedTimestamp = data.dateActivated || 0;
        this.activated = new Date(data.dateActivated);
        this.game = new Game(data.gameType);
        this.isActive = Array.isArray(data.stacked);
        this.type = Booster.parseType(data);
        this.stackers = Array.isArray(data.stacked) ? Array.from(data.stacked) : [];
        this.expired = data.length < 0;
    }
    toString() {
        return `${this.purchaser}'s booster in ${this.game}`;
    }
    isRaw() {
        return false;
    }
    static parseType(data) {
        if (data.stacked === true)
            return 'STACKED';
        if (data.stacked === false)
            return 'QUEUED';
        return 'ACTIVE';
    }
}
export default Booster;
//# sourceMappingURL=Booster.js.map