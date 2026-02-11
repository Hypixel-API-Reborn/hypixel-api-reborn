import type { ColorString } from '../../../Types/Color.js';
declare class TNTRun {
    wins: number;
    bestTime: number;
    deaths: number;
    slownessPotions: number;
    speedPotions: number;
    doubleJumps: number;
    prefix: ColorString | 'Rainbow';
    constructor(data: Record<string, any>);
}
export default TNTRun;
//# sourceMappingURL=TNTRun.d.ts.map