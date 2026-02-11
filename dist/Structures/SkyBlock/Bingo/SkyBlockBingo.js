import SkyBlockBingoGoal from './SkyBlockBingoGoal.js';
class SkyBlockBingo {
    lastUpdatedTimestamp;
    lastUpdatedAt;
    id;
    name;
    start;
    startAt;
    end;
    endAt;
    goals;
    constructor(data) {
        this.lastUpdatedTimestamp = data?.lastUpdated || 0;
        this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
        this.id = data?.id || null;
        this.name = data?.name || 'UNKNOWN';
        this.start = data?.start || 0;
        this.startAt = new Date(this.start);
        this.end = data?.end || 0;
        this.endAt = new Date(this.end);
        this.goals = Array.isArray(data.goals) ? data.goals.map((goal, index) => new SkyBlockBingoGoal(goal, index)) : null;
    }
    toString() {
        return this.id;
    }
    isRaw() {
        return false;
    }
}
export default SkyBlockBingo;
//# sourceMappingURL=SkyBlockBingo.js.map