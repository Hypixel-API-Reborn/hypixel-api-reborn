import QuakecraftMode from './QuakecraftMode.js';
import type { ColorCode } from '../../../Types/Color.js';
import type { QuakecraftBarrels, QuakecraftCase, QuakecraftKillSounds, QuakecraftMuzzle, QuakecraftSights, QuakecraftTriggers } from '../../../Types/Player.js';
declare class Quakecraft {
    coins: number;
    solo: QuakecraftMode;
    teams: QuakecraftMode;
    wins: number;
    kills: number;
    deaths: number;
    KDR: number;
    killStreaks: number;
    distanceTraveled: number;
    shotsFired: number;
    headShots: number;
    instantRespawn: boolean;
    killPrefixColor: ColorCode;
    showPrefix: boolean;
    killSound: QuakecraftKillSounds | 'None';
    barrel: QuakecraftBarrels | 'None';
    case: QuakecraftCase | 'None';
    muzzle: QuakecraftMuzzle | 'None';
    sight: QuakecraftSights | 'None';
    trigger: QuakecraftTriggers | 'None';
    constructor(data: Record<string, any>);
}
export default Quakecraft;
//# sourceMappingURL=Quakecraft.d.ts.map