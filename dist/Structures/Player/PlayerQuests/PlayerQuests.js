import PlayerQuest from './PlayerQuest.js';
class PlayerQuests {
    quests;
    autoActivate;
    constructor(data, autoActivate) {
        this.quests = Object.keys(data).map((quest) => new PlayerQuest(data[quest], quest));
        this.autoActivate = autoActivate;
    }
}
export default PlayerQuests;
//# sourceMappingURL=PlayerQuests.js.map