import type { PlayerAchievementsTotemColors, PlayerAchievementsTotemParts } from '../../../Types/Player.js';
declare class PlayerAchievementsTotem {
    canCustomize: boolean;
    allowedMaxHeight: number;
    unlockedParts: PlayerAchievementsTotemParts[];
    selectedParts: Record<string, PlayerAchievementsTotemParts>;
    unlockedColors: PlayerAchievementsTotemColors[];
    selectedColors: Record<string, PlayerAchievementsTotemColors>;
    constructor(data: Record<string, any>);
}
export default PlayerAchievementsTotem;
//# sourceMappingURL=PlayerAchievementsTotem.d.ts.map