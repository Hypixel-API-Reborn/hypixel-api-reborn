import type { ColorString } from '../../../Types/Color.js';
declare class TNTTag {
    wins: number;
    kills: number;
    deaths: number;
    KDR: number;
    speed: number;
    blastProtection: number;
    speedItUp: number;
    slowItDown: number;
    prefix: ColorString | 'Rainbow';
    constructor(data: Record<string, any>);
}
export default TNTTag;
//# sourceMappingURL=TNTTag.d.ts.map