import BaseAchievement from './BaseAchievement.js';
import type { AchievementTier } from '../../../Types/Static.js';

class TieredAchievement extends BaseAchievement {
  tiers: AchievementTier[];
  constructor(achievementName: string, data: Record<string, any>) {
    super(achievementName, data);
    this.tiers = data.tiers || [];
  }
}

export default TieredAchievement;
