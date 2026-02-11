import OneTimeAchievement from './OneTimeAchievement.js';
import TieredAchievement from './TieredAchievement.js';
class GuildAchievements {
    lastUpdatedTimestamp;
    lastUpdatedAt;
    oneTimeAchievements;
    tieredAchievements;
    constructor(data) {
        this.lastUpdatedTimestamp = data.lastUpdated || 0;
        this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
        this.oneTimeAchievements = Object.keys(data.one_time || {}).map((achievementKey) => new OneTimeAchievement(achievementKey, data.one_time[achievementKey]));
        this.tieredAchievements = Object.keys(data.tiered || {}).map((achievementKey) => new TieredAchievement(achievementKey, data.tiered[achievementKey]));
    }
    isRaw() {
        return false;
    }
}
export default GuildAchievements;
//# sourceMappingURL=GuildAchievements.js.map