import WoolWarsClass from './WoolWarsClass.js';
import type { WoolWarsClassNames } from '../../../Types/Player.js';
declare class WoolWars {
    selectedClass: WoolWarsClassNames | 'None';
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
    assault: WoolWarsClass;
    tank: WoolWarsClass;
    golem: WoolWarsClass;
    swordsman: WoolWarsClass;
    engineer: WoolWarsClass;
    archer: WoolWarsClass;
    constructor(data: Record<string, any>);
}
export default WoolWars;
//# sourceMappingURL=WoolWars.d.ts.map