import type { SmashHerosHeroId } from '../../../Types/Player.js';
declare class SmashHerosHero {
    name: SmashHerosHeroId;
    level: number;
    xp: number;
    prestige: number;
    playedGames: number;
    kills: number;
    deaths: number;
    killDeathRatio: number;
    wins: number;
    losses: number;
    winLossRatio: number;
    constructor(data: Record<string, any>, hero: SmashHerosHeroId);
}
export default SmashHerosHero;
//# sourceMappingURL=SmashHerosHero.d.ts.map