import MurderMysteryGamemode from './MurderMysteryGamemode.js';
import type { MurderMysteryMapName } from '../../../Types/Player.js';
declare class MurderMysteryMap {
    alphaWins: number;
    bowKills: number;
    tokensPickedUp: number;
    deaths: number;
    detectiveWins: number;
    games: number;
    kills: number;
    lastOneAlive: number;
    longestTimeAsSurvivorSeconds: number;
    murdererWins: number;
    quickestDetectiveWinTimeSeconds: number;
    quickestMurdererWinTimeSeconds: number;
    quickestShowdownWinTimeSeconds: number;
    showdownPotg: number;
    suicides: number;
    survivorWins: number;
    totalTimeSurvivedSeconds: number;
    wasHero: number;
    wins: number;
    assassins: MurderMysteryGamemode;
    classic: MurderMysteryGamemode;
    doubleUp: MurderMysteryGamemode;
    hardcode: MurderMysteryGamemode;
    infection: MurderMysteryGamemode;
    showdown: MurderMysteryGamemode;
    constructor(data: Record<string, any>, map: MurderMysteryMapName);
}
export default MurderMysteryMap;
//# sourceMappingURL=MurderMysteryMap.d.ts.map