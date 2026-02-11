import type { ArcadeZombiesDifficulty, ArcadeZombiesMaps } from '../../../../Types/Player.js';
declare class ZombiesMapMode {
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
    constructor(data: Record<string, any>, map: ArcadeZombiesMaps, mode: ArcadeZombiesDifficulty);
}
export default ZombiesMapMode;
//# sourceMappingURL=ZombiesMapMode.d.ts.map