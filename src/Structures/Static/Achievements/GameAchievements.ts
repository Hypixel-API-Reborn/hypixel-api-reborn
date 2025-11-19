import OneTimeAchievement from './OneTimeAchievement.js';
import TieredAchievement from './TieredAchievement.js';

class GameAchievements {
  game: string;
  points: number;
  legacyPoints: number;
  oneTimeAchievements: OneTimeAchievement[];
  tieredAchievements: TieredAchievement[];
  constructor(game: string, data: Record<string, any>) {
    this.game = game;
    this.points = data.total_points || 0;
    this.legacyPoints = data.total_legacy_points || 0;
    this.oneTimeAchievements = Object.keys(data.one_time || {}).map(
      (achievementKey) => new OneTimeAchievement(achievementKey, data.one_time[achievementKey])
    );
    this.tieredAchievements = Object.keys(data.tiered || {}).map(
      (achievementKey) => new TieredAchievement(achievementKey, data.tiered[achievementKey])
    );
  }
}

export default GameAchievements;
