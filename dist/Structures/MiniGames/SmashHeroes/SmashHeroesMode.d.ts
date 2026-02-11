import type { SmashHeoresModes } from '../../../Types/Player.js';
declare class SmashHeroesMode {
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    losses: number;
    WLR: number;
    constructor(data: Record<string, any>, mode: SmashHeoresModes);
}
export default SmashHeroesMode;
//# sourceMappingURL=SmashHeroesMode.d.ts.map