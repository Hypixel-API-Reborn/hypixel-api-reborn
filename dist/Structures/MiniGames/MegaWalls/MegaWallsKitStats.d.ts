import MegaWallsModeStats from './MegaWallsModeStats.js';
import type { MegaWallsKits } from '../../../Types/Player.js';
declare class MegaWallsKitStats {
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
    faceOff: MegaWallsModeStats;
    casualBrawl: MegaWallsModeStats;
    constructor(data: Record<string, any>, kit: MegaWallsKits);
}
export default MegaWallsKitStats;
//# sourceMappingURL=MegaWallsKitStats.d.ts.map