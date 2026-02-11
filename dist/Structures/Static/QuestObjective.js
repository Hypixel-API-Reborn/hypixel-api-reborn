class QuestObjective {
    id;
    type;
    amountNeeded;
    constructor(objective) {
        this.id = objective.id || 'UNKNOWN';
        this.type = objective.type === 'IntegerObjective' ? 'Integer' : 'Boolean';
        this.amountNeeded = parseInt(objective.integer || '1', 10);
    }
}
export default QuestObjective;
//# sourceMappingURL=QuestObjective.js.map