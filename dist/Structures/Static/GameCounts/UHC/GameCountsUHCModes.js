class GameCountsUHCModes {
    teams;
    solo;
    brawlDuo;
    constructor(data) {
        this.teams = data?.TEAMS || 0;
        this.solo = data?.SOLO || 0;
        this.brawlDuo = data?.BRAWL_DUO || 0;
    }
}
export default GameCountsUHCModes;
//# sourceMappingURL=GameCountsUHCModes.js.map