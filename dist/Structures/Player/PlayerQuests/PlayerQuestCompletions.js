import PlayerQuestCompletion from './PlayerQuestCompletion.js';
class PlayerQuestCompletions {
    amount;
    completions;
    constructor(data) {
        this.amount = data.length || 0;
        this.completions = [];
        data.forEach((completion) => {
            this.completions.push(new PlayerQuestCompletion(completion));
        });
    }
}
export default PlayerQuestCompletions;
//# sourceMappingURL=PlayerQuestCompletions.js.map