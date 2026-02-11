import Quest from './Quest.js';
class GameQuests {
    game;
    quests;
    constructor(name, data) {
        this.game = name;
        this.quests = data.map((quest) => new Quest(quest));
    }
}
export default GameQuests;
//# sourceMappingURL=GameQuests.js.map