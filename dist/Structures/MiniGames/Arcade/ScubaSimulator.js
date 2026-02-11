class ScubaSimulator {
    itemsFound;
    totalPoints;
    wins;
    constructor(data) {
        this.itemsFound = data?.items_found_scuba_simulator || 0;
        this.totalPoints = data?.total_points_scuba_simulator || 0;
        this.wins = data?.wins_scuba_simulator || 0;
    }
}
export default ScubaSimulator;
//# sourceMappingURL=ScubaSimulator.js.map