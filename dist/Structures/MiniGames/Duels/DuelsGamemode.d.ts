import type { DuelsModes } from '../../../Types/Player.js';
declare class DuelsGamemode {
    title: string;
    winStreak: number;
    bestWinStreak: number;
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    losses: number;
    WLR: number;
    playedGames: number;
    swings: number;
    hits: number;
    meleeAccuracy: number;
    bowShots: number;
    bowHits: number;
    bowAccuracy: number;
    blocksPlaced: number;
    healthRegenerated: number;
    goldenApplesEaten: number;
    constructor(data: Record<string, any>, mode: DuelsModes, title?: string);
}
export default DuelsGamemode;
//# sourceMappingURL=DuelsGamemode.d.ts.map