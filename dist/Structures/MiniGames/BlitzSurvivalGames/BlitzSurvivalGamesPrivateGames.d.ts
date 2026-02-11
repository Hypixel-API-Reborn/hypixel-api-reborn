import type { BlitzSurvivalGamesPrivateGamesExtraStars, PrivateGameSettingsGameSpeed, PrivateGameSettingsHealthBuff } from '../../../Types/Player.ts';
declare class BlitzSurvivalGamesPrivateGames {
    healthBuff: PrivateGameSettingsHealthBuff | 'UNKNOWN';
    lowGravity: boolean;
    speed: PrivateGameSettingsGameSpeed | 'UNKNOWN';
    extraBlitzStars: BlitzSurvivalGamesPrivateGamesExtraStars;
    oneHitOneKill: boolean;
    nightTime: boolean;
    noKits: boolean;
    constructor(data: Record<string, any>);
}
export default BlitzSurvivalGamesPrivateGames;
//# sourceMappingURL=BlitzSurvivalGamesPrivateGames.d.ts.map