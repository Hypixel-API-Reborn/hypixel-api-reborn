import type { WoolWarsClassNames } from '../../../Types/Player.js';
declare class WoolWarsClass {
    wins: number;
    kills: number;
    assists: number;
    deaths: number;
    KDRatio: number;
    gamesPlayed: number;
    woolsPlaced: number;
    blocksBroken: number;
    placeBreakRatio: number;
    powerUps: number;
    constructor(data: Record<string, any>, classInput: WoolWarsClassNames);
}
export default WoolWarsClass;
//# sourceMappingURL=WoolWarsClass.d.ts.map