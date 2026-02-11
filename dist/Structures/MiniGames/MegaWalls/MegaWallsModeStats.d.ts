import type { MegaWallsKits, MegaWallsModes } from '../../../Types/Player.js';
declare class MegaWallsModeStats {
    kills: number;
    assists: number;
    deaths: number;
    KDR: number;
    wins: number;
    losses: number;
    WLR: number;
    finalKills: number;
    finalAssists: number;
    finalDeaths: number;
    FKDR: number;
    playedGames: number;
    witherDamage: number;
    defenderKills: number;
    walked: number;
    blocksPlaced: number;
    blocksBroken: number;
    meleeKills: number;
    damageDealt: number;
    constructor(data: Record<string, any>, mode: MegaWallsModes, kit?: MegaWallsKits);
}
export default MegaWallsModeStats;
//# sourceMappingURL=MegaWallsModeStats.d.ts.map