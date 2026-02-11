import GameChallenges from './GameChallenges.js';
class Challenges {
    lastUpdatedTimestamp;
    lastUpdatedAt;
    challengesPerGame;
    constructor(data) {
        this.lastUpdatedTimestamp = data.lastUpdated || 0;
        this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
        this.challengesPerGame = {};
        Object.keys(data?.challenges || {}).forEach((game) => {
            this.challengesPerGame[game] = new GameChallenges(game, data.challenges[game]);
        });
    }
    isRaw() {
        return false;
    }
}
export default Challenges;
//# sourceMappingURL=Challenges.js.map