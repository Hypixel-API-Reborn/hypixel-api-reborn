import BaseAchievement from './BaseAchievement.js';

class OneTimeAchivement extends BaseAchievement {
  points: number;
  gamePercentUnlocked: number;
  globalPercentUnlocked: number;
  constructor(achivementName: string, data: Record<string, any>) {
    super(achivementName, data);
    this.points = data.points;
    this.gamePercentUnlocked = data.gamePercentUnlocked || 0;
    this.globalPercentUnlocked = data.globalPercentUnlocked || 0;
  }
}

export default OneTimeAchivement;
