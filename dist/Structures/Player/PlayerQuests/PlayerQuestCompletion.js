class PlayerQuestCompletion {
    amount;
    timestamp;
    timestampAt;
    constructor(data) {
        this.amount = data.length || 0;
        this.timestamp = data?.time ? data.time : null;
        this.timestampAt = this.timestamp ? new Date(this.timestamp) : null;
    }
}
export default PlayerQuestCompletion;
//# sourceMappingURL=PlayerQuestCompletion.js.map