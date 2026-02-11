import type { SpeedUHCModes } from '../../../Types/Player.js';
declare class SpeedUHCMode {
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    losses: number;
    WLR: number;
    playedGames: number;
    winStreak: number;
    killStreak: number;
    assists: number;
    constructor(data: Record<string, any>, mode: SpeedUHCModes);
}
export default SpeedUHCMode;
//# sourceMappingURL=SpeedUHCMode.d.ts.map