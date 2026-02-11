import BaseAchievement from './BaseAchievement.js';
import type { AchievementTier } from '../../../Types/Static.js';
declare class TieredAchievement extends BaseAchievement {
    tiers: AchievementTier[];
    constructor(achievementName: string, data: Record<string, any>);
}
export default TieredAchievement;
//# sourceMappingURL=TieredAchievement.d.ts.map