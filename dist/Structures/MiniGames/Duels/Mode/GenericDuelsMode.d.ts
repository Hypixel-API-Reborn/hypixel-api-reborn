import type { DuelsModeId } from '../../../../Types/Player.ts';
declare class GenericDuelsMode {
    kills: number;
    deaths: number;
    killDeathRatio: number;
    wins: number;
    losses: number;
    winLossRatio: number;
    meleeSwings: number;
    meleeHits: number;
    meleeAccuracy: number;
    roundsPlayed: number;
    damageDealt: number;
    bowShots: number;
    bowHits: number;
    bowAccuracy: number;
    healthRegenerated: number;
    coinsGained: number;
    coins: number;
    blocksPlaced: number;
    blocksBroken: number;
    goldenApplesEaten: number;
    healPotsUsed: number;
    amountHealed: number;
    winstreak: number;
    winstreakBest: number;
    constructor(data: Record<string, any>, mode?: DuelsModeId);
}
export default GenericDuelsMode;
//# sourceMappingURL=GenericDuelsMode.d.ts.map