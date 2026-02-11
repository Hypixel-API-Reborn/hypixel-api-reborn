import OneTimeAchievement from './OneTimeAchievement.js';
import TieredAchievement from './TieredAchievement.js';
declare class GameAchievements {
    game: string;
    points: number;
    legacyPoints: number;
    oneTimeAchievements: OneTimeAchievement[];
    tieredAchievements: TieredAchievement[];
    constructor(game: string, data: Record<string, any>);
}
export default GameAchievements;
//# sourceMappingURL=GameAchievements.d.ts.map