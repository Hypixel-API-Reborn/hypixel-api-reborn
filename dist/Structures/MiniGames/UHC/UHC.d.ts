import UHCGamemode from './UHCGamemode.js';
import type { UHCKits } from '../../../Types/Player.js';
declare class UHC {
    coins: number;
    score: number;
    kit: UHCKits | 'None';
    solo: UHCGamemode;
    team: UHCGamemode;
    redVsBlue: UHCGamemode;
    noDiamond: UHCGamemode;
    brawl: UHCGamemode;
    soloBrawl: UHCGamemode;
    duoBrawl: UHCGamemode;
    wins: number;
    kills: number;
    deaths: number;
    KDR: number;
    headsEaten: number;
    ultimatesCrafted: number;
    extraUltimatesCrafted: number;
    starLevel: number;
    constructor(data: Record<string, any>);
}
export default UHC;
//# sourceMappingURL=UHC.d.ts.map