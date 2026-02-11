import BaseAchievement from './BaseAchievement.js';
class TieredAchievement extends BaseAchievement {
    tiers;
    constructor(achievementName, data) {
        super(achievementName, data);
        this.tiers = data.tiers || [];
    }
}
export default TieredAchievement;
//# sourceMappingURL=TieredAchievement.js.map