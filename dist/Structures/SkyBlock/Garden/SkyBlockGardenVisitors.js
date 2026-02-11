class SkyBlockGardenVisitors {
    visited;
    completed;
    totalCompleted;
    uniqueNpcsServed;
    constructor(data) {
        this.visited = data?.visits || {};
        this.completed = data?.completed || {};
        this.totalCompleted = data?.total_completed || 0;
        this.uniqueNpcsServed = data?.unique_npcs_served || 0;
    }
}
export default SkyBlockGardenVisitors;
//# sourceMappingURL=SkyBlockGardenVisitors.js.map