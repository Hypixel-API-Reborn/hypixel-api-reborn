import type { UHCModes } from '../../../Types/Player.js';
declare class UHCGamemode {
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    headsEaten: number;
    ultimatesCrafted: number;
    extraUltimatesCrafted: number;
    constructor(data: Record<string, any>, mode?: UHCModes);
}
export default UHCGamemode;
//# sourceMappingURL=UHCGamemode.d.ts.map