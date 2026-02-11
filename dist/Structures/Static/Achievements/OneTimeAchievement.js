import BaseAchievement from './BaseAchievement.js';
class OneTimeAchievement extends BaseAchievement {
    points;
    gamePercentUnlocked;
    globalPercentUnlocked;
    constructor(achievementName, data) {
        super(achievementName, data);
        this.points = data.points || 0;
        this.gamePercentUnlocked = data.gamePercentUnlocked || 0;
        this.globalPercentUnlocked = data.globalPercentUnlocked || 0;
    }
}
export default OneTimeAchievement;
//# sourceMappingURL=OneTimeAchievement.js.map