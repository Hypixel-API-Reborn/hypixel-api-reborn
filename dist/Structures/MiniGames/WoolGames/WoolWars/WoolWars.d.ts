import WoolWarsClass from './WoolWarsClass.js';
import WoolWarsSettings from './WoolWarsSettings.js';
import type { WoolGamesWoolWarsClassName } from '../../../../Types/Player.js';
declare class WoolWars {
    selectedClass: WoolGamesWoolWarsClassName | 'None';
    kills: number;
    assists: number;
    deaths: number;
    killDeathRatio: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    winLossRatio: number;
    woolPlaced: number;
    blocksBroken: number;
    placeBreakRatio: number;
    powerupsGotten: number;
    settings: WoolWarsSettings;
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