import ZombiesMapMode from './ZombiesMapMode.js';
import type { ArcadeZombiesMaps } from '../../../../Types/Player.js';
declare class ZombiesMap {
    bestRound: number;
    deaths: number;
    doorsOpened: number;
    fastestTime10: number;
    fastestTime20: number;
    fastestTime30: number;
    playersRevived: number;
    timesKnockedDown: number;
    totalRoundsSurvived: number;
    windowsRepaired: number;
    wins: number;
    zombieKills: number;
    normal?: ZombiesMapMode;
    hard?: ZombiesMapMode;
    rip?: ZombiesMapMode;
    constructor(data: Record<string, any>, map: ArcadeZombiesMaps, hasModes?: boolean);
}
export default ZombiesMap;
//# sourceMappingURL=ZombiesMap.d.ts.map