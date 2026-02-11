import GameQuests from './GameQuests.js';
class Quests {
    lastUpdatedTimestamp;
    lastUpdatedAt;
    questsPerGame;
    constructor(data) {
        this.lastUpdatedTimestamp = data.lastUpdated || 0;
        this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
        this.questsPerGame = {};
        Object.keys(data.quests || {}).forEach((game) => {
            this.questsPerGame[game] = new GameQuests(game, data.quests[game]);
        });
    }
    isRaw() {
        return false;
    }
}
export default Quests;
//# sourceMappingURL=Quests.js.map