import GameAchievements from './GameAchievements.js';
class Achievements {
    lastUpdatedTimestamp;
    lastUpdatedAt;
    achievementsPerGame;
    constructor(data) {
        this.lastUpdatedTimestamp = data.lastUpdated || 0;
        this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
        this.achievementsPerGame = {};
        Object.keys(data.achievements || {}).forEach((game) => {
            this.achievementsPerGame.game = new GameAchievements(game, data.achievements[game]);
        });
    }
    isRaw() {
        return false;
    }
}
export default Achievements;
//# sourceMappingURL=Achievements.js.map