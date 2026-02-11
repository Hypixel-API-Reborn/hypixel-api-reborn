import PlayerAchievementsRewards from './PlayerAchievementsRewards.js';
import PlayerAchievementsTotem from './PlayerAchievementsTotem.js';
import type { PlayerAchievementsOneTimeSort } from '../../../Types/Player.js';
declare class PlayerAchievements {
    points: number;
    rewards: PlayerAchievementsRewards;
    tracking: string[];
    achievements: Record<string, number>;
    oneTime: string[];
    oneTimeAchievementMenuSort: PlayerAchievementsOneTimeSort;
    totem: PlayerAchievementsTotem;
    constructor(data: Record<string, any>);
}
export default PlayerAchievements;
//# sourceMappingURL=PlayerAchievements.d.ts.map