import DuelsGamemode from './DuelsGamemode.js';
declare class DuelsSkyWars {
    title: string;
    winStreak: number;
    bestWinStreak: number;
    solo: DuelsGamemode;
    doubles: DuelsGamemode;
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
    constructor(data: Record<string, any>);
}
export default DuelsSkyWars;
//# sourceMappingURL=DuelsSkyWars.d.ts.map