import PlayerAchievementsRewards from './PlayerAchievementsRewards.js';
import PlayerAchievementsTotem from './PlayerAchievementsTotem.js';
import type { PlayerAchievementsOneTimeSort } from '../../../Types/Player.js';

class PlayerAchievements {
  points: number;
  rewards: PlayerAchievementsRewards;
  tracking: string[];
  achievements: Record<string, number>;
  oneTime: string[];
  oneTimeAchievementMenuSort: PlayerAchievementsOneTimeSort;
  totem: PlayerAchievementsTotem;
  constructor(data: Record<string, any>) {
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
