import PlayerAchievementsRewards from './PlayerAchievementsRewards.js';

class PlayerAchievements {
  points: number;
  rewards: PlayerAchievementsRewards;
  tracking: string[];
  achivements: Record<string, number>;
  oneTime: string[];
  totem: Record<string, any>;
  constructor(data: Record<string, any>) {
    this.points = data?.achievementPoints || 0;
    this.rewards = new PlayerAchievementsRewards(data?.achievementRewardsNew || {});
    this.tracking = data?.achievementTracking || [];
    this.achivements = data?.achievements || {};
    this.oneTime = data.achievementsOneTime || [];
    this.totem = data?.achievementTotem || {};
  }
}

export default PlayerAchievements;
