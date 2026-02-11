import Challenge from './Challenge.js';
class GameChallenges {
    category;
    challenges;
    constructor(name, data) {
        this.category = name;
        this.challenges = data.map((challenge) => new Challenge(challenge));
    }
}
export default GameChallenges;
//# sourceMappingURL=GameChallenges.js.map