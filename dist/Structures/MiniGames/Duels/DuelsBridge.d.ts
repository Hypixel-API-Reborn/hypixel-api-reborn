import DuelsGamemode from './DuelsGamemode.js';
declare class DuelsBridge {
    title: string;
    winStreak: number;
    bestWinStreak: number;
    solo: DuelsGamemode;
    doubles: DuelsGamemode;
    threes: DuelsGamemode;
    fours: DuelsGamemode;
    '2v2v2v2': DuelsGamemode;
    '3v3v3v3': DuelsGamemode;
    ctf: DuelsGamemode;
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
export default DuelsBridge;
//# sourceMappingURL=DuelsBridge.d.ts.map