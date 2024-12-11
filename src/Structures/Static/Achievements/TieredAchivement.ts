import BaseAchievement from './BaseAchievement.js';
import type { AchivementTier } from '../../../Types/Static.js';

class TieredAchivement extends BaseAchievement {
  tiers: AchivementTier[];
  constructor(achivementName: string, data: Record<string, any>) {
    super(achivementName, data);
    this.tiers = data.tiers;
  }
}

export default TieredAchivement;
