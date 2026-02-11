class PlayerAchievementsTotem {
    canCustomize;
    allowedMaxHeight;
    unlockedParts;
    selectedParts;
    unlockedColors;
    selectedColors;
    constructor(data) {
        this.canCustomize = data?.canCustomize || false;
        this.allowedMaxHeight = data?.allowed_max_height || 0;
        this.unlockedParts = data?.unlockedParts || [];
        this.selectedParts = data?.selectedParts || {};
        this.unlockedColors = data?.unlockedColors || [];
        this.selectedColors = data?.selectedColors || {};
    }
}
export default PlayerAchievementsTotem;
//# sourceMappingURL=PlayerAchievementsTotem.js.map