import type { SmashHeoresHeros } from '../../../Types/Player.js';
declare class SmashHeoresHero {
    name: SmashHeoresHeros;
    level: number;
    xp: number;
    prestige: number;
    playedGames: number;
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    losses: number;
    WLR: number;
    constructor(data: Record<string, any>, hero: SmashHeoresHeros);
}
export default SmashHeoresHero;
//# sourceMappingURL=SmashHeoresHero.d.ts.map