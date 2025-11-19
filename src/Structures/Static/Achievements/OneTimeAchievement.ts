import BaseAchievement from './BaseAchievement.js';

class OneTimeAchievement extends BaseAchievement {
  points: number;
  gamePercentUnlocked: number;
  globalPercentUnlocked: number;
  constructor(achievementName: string, data: Record<string, any>) {
    super(achievementName, data);
    this.points = data.points || 0;
    this.gamePercentUnlocked = data.gamePercentUnlocked || 0;
    this.globalPercentUnlocked = data.globalPercentUnlocked || 0;
  }
}

export default OneTimeAchievement;
