import type { ArenaBrawlModes } from '../../../Types/Player.js';
declare class ArenaBrawlMode {
    damage: number;
    kills: number;
    deaths: number;
    KDR: number;
    healed: number;
    wins: number;
    losses: number;
    WLR: number;
    games: number;
    winStreak: number;
    constructor(data: Record<string, any>, mode: ArenaBrawlModes);
}
export default ArenaBrawlMode;
//# sourceMappingURL=ArenaBrawlMode.d.ts.map