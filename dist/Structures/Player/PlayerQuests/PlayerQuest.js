import PlayerQuestCompletions from './PlayerQuestCompletions.js';
class PlayerQuest {
    name;
    completions;
    constructor(data, name) {
        this.name = name;
        this.completions = new PlayerQuestCompletions(data?.completions || []);
    }
}
export default PlayerQuest;
//# sourceMappingURL=PlayerQuest.js.map