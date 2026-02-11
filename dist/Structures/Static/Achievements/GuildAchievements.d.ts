import OneTimeAchievement from './OneTimeAchievement.js';
import TieredAchievement from './TieredAchievement.js';
import type RequestData from '../../../Private/RequestData.js';
declare class GuildAchievements {
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    oneTimeAchievements: OneTimeAchievement[];
    tieredAchievements: TieredAchievement[];
    constructor(data: Record<string, any>);
    isRaw(): this is RequestData;
}
export default GuildAchievements;
//# sourceMappingURL=GuildAchievements.d.ts.map