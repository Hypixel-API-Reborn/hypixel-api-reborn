import type { CopsAndCrimsGamemodes } from '../../../Types/Player.js';
declare class CopsAndCrimsGamemode {
    kills: number;
    criminalKills: number;
    copKills: number;
    assists: number;
    deaths: number;
    KDR: number;
    wins: number;
    gamesPlayed: number;
    losses: number;
    WLR: number;
    constructor(data: Record<string, any>, mode: CopsAndCrimsGamemodes);
}
export default CopsAndCrimsGamemode;
//# sourceMappingURL=CopsAndCrimsGamemode.d.ts.map