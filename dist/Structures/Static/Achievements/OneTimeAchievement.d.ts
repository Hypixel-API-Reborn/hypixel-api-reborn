import BaseAchievement from './BaseAchievement.js';
declare class OneTimeAchievement extends BaseAchievement {
    points: number;
    gamePercentUnlocked: number;
    globalPercentUnlocked: number;
    constructor(achievementName: string, data: Record<string, any>);
}
export default OneTimeAchievement;
//# sourceMappingURL=OneTimeAchievement.d.ts.map