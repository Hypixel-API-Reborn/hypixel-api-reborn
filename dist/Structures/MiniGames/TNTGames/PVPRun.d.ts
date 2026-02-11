import type { ColorString } from '../../../Types/Color.js';
declare class PVPRun {
    wins: number;
    bestTime: number;
    kills: number;
    deaths: number;
    KDR: number;
    regeneration: number;
    notoriety: number;
    fortitude: number;
    doubleJumps: number;
    prefixColor: ColorString | 'Rainbow';
    constructor(data: Record<string, any>);
}
export default PVPRun;
//# sourceMappingURL=PVPRun.d.ts.map