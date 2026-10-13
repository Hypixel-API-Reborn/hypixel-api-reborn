class BedWarsSlumberQuestNPCData {
    started;
    lastStarted;
    completed;
    lastCompleted;
    constructor(data, npcName) {
        this.started = data?.started?.[npcName] ?? false;
        this.lastStarted = data?.lastStarted?.[npcName] ?? -1;
        this.completed = data?.completed?.[npcName] ?? false;
        this.lastCompleted = data?.lastCompleted?.[npcName] ?? -1;
    }
}
export default BedWarsSlumberQuestNPCData;
//# sourceMappingURL=BedWarsSlumberQuestNPCData.js.map