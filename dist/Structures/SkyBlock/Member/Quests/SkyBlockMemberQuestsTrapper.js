class SkyBlockMemberQuestsTrapper {
    peltCount;
    lastCompletedTimestamp;
    lastCompletedAt;
    constructor(data) {
        this.peltCount = data?.pelt_count || 0;
        this.lastCompletedTimestamp = data?.last_task_time || 0;
        this.lastCompletedAt = new Date(this.lastCompletedTimestamp);
    }
    toString() {
        return this.peltCount;
    }
}
export default SkyBlockMemberQuestsTrapper;
//# sourceMappingURL=SkyBlockMemberQuestsTrapper.js.map