class LeaderboardSettings {
    mode;
    resetType;
    constructor(data) {
        this.mode = data?.mode || 'UNKNOWN';
        this.resetType = data?.resetType || 'UNKNOWN';
    }
}
export default LeaderboardSettings;
//# sourceMappingURL=LeaderboardSettings.js.map