import QuestObjective from './QuestObjective.js';
class Quest {
    id;
    name;
    description;
    rewards;
    type;
    objectives;
    constructor(data) {
        this.id = (data?.id || '').trim();
        this.name = (data?.name || '').trim();
        this.description = (data?.description || '').trim();
        this.rewards = data.rewards || [];
        this.type = data.requirements?.[0].type === 'DailyResetQuestRequirement' ? 'Daily' : 'Weekly';
        this.objectives = (data?.objectives || []).map((objective) => new QuestObjective(objective));
    }
    toString() {
        return this.name;
    }
}
export default Quest;
//# sourceMappingURL=Quest.js.map