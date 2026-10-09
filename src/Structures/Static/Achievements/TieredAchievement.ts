import BaseAchievement from './BaseAchievement.ts';
import type { AchievementTier } from '../../../Types/index.ts';

class TieredAchievement extends BaseAchievement {
  tiers: AchievementTier[];
  constructor(achievementName: string, data: Record<string, any>) {
    super(achievementName, data);
    this.tiers = data.tiers ?? [];
  }
}

export default TieredAchievement;
