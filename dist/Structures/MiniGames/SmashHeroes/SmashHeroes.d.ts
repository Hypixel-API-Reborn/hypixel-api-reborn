import SmashHeoresHero from './SmashHeoresHero.js';
import SmashHeroesMode from './SmashHeroesMode.js';
import type { SmashHeoresHeros } from '../../../Types/Player.js';
declare class SmashHeroes {
    coins: number;
    level: number;
    winStreak: number;
    playedGames: number;
    kills: number;
    deaths: number;
    KDR: number;
    wins: number;
    losses: number;
    WLR: number;
    smashed: number;
    '1v1v1v1': SmashHeroesMode;
    '2v2': SmashHeroesMode;
    '2v2v2': SmashHeroesMode;
    activeHero: SmashHeoresHeros | 'None';
    theBulk: SmashHeoresHero;
    cakeMonster: SmashHeoresHero;
    generalCluck: SmashHeoresHero;
    botmun: SmashHeoresHero;
    marauder: SmashHeoresHero;
    pug: SmashHeoresHero;
    tinman: SmashHeoresHero;
    spoderman: SmashHeoresHero;
    frosty: SmashHeoresHero;
    sergeantShield: SmashHeoresHero;
    skullfire: SmashHeoresHero;
    goku: SmashHeoresHero;
    sanic: SmashHeoresHero;
    duskCrawler: SmashHeoresHero;
    shoopDaWhoop: SmashHeoresHero;
    greenHood: SmashHeoresHero;
    constructor(data: Record<string, any>);
}
export default SmashHeroes;
//# sourceMappingURL=SmashHeroes.d.ts.map