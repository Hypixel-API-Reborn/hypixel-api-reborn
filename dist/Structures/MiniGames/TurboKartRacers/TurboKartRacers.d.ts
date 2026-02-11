import TurboKartRacersMap from './TurboKartRacersMap.js';
import type { TurboKartRacersHorn } from '../../../Types/Player.js';
declare class TurboKartRacers {
    coins: number;
    wins: number;
    completedLaps: number;
    bronzeTrophies: number;
    silverTrophies: number;
    goldTrophies: number;
    boxPickups: number;
    horn: TurboKartRacersHorn;
    retro: TurboKartRacersMap;
    hypixelgp: TurboKartRacersMap;
    olympus: TurboKartRacersMap;
    junglerush: TurboKartRacersMap;
    canyon: TurboKartRacersMap;
    bananaHitsReceived: number;
    bananaHitsSent: number;
    blueTorpedoHit: number;
    grandPrix: boolean;
    grandPrixTokens: number;
    constructor(data: Record<string, any>);
}
export default TurboKartRacers;
//# sourceMappingURL=TurboKartRacers.d.ts.map