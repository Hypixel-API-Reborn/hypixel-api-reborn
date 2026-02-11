import GameAchievements from './GameAchievements.js';
import type RequestData from '../../../Private/RequestData.js';
declare class Achievements {
    lastUpdatedTimestamp: number;
    lastUpdatedAt: Date;
    achievementsPerGame: Record<string, GameAchievements>;
    constructor(data: Record<string, any>);
    isRaw(): this is RequestData;
}
export default Achievements;
//# sourceMappingURL=Achievements.d.ts.map