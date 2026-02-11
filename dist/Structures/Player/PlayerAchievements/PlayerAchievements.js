import PlayerAchievementsRewards from './PlayerAchievementsRewards.js';
import PlayerAchievementsTotem from './PlayerAchievementsTotem.js';
class PlayerAchievements {
    points;
    rewards;
    tracking;
    achievements;
    oneTime;
    oneTimeAchievementMenuSort;
    totem;
    constructor(data) {
        this.points = data?.achievementPoints || 0;
        this.rewards = new PlayerAchievementsRewards(data?.achievementRewardsNew || {});
        this.tracking = data?.achievementTracking || [];
        this.achievements = data?.achievements || {};
        this.oneTime = data?.achievementsOneTime || [];
        this.oneTimeAchievementMenuSort = data?.onetime_achievement_menu_sort || 'a_to_z';
        this.totem = new PlayerAchievementsTotem(data?.achievementTotem || {});
    }
}
export default PlayerAchievements;
//# sourceMappingURL=PlayerAchievements.js.map