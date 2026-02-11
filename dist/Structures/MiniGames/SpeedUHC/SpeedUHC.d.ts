import SpeedUHCMode from './SpeedUHCMode.js';
declare class SpeedUHC {
    coins: number;
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    losses: number;
    WLR: number;
    playedGames: number;
    winStreak: number;
    killStreak: number;
    blocksBroken: number;
    blocksPlaced: number;
    quits: number;
    itemsEnchanted: number;
    assists: number;
    solo: SpeedUHCMode;
    soloNormal: SpeedUHCMode;
    soloInsane: SpeedUHCMode;
    team: SpeedUHCMode;
    teamNormal: SpeedUHCMode;
    teamInsane: SpeedUHCMode;
    constructor(data: Record<string, any>);
}
export default SpeedUHC;
//# sourceMappingURL=SpeedUHC.d.ts.map