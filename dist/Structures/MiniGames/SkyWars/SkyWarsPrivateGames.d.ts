import type { PrivateGameSettingsGameSpeed, PrivateGameSettingsHealthBuff } from '../../../Types/Player.ts';
declare class SkyWarsPrivateGames {
    maxKitsAndPerks: boolean;
    legacyItems: boolean;
    speed: PrivateGameSettingsGameSpeed | 'UNKNOWN';
    dragons: string | 'UNKNOWN';
    noKits: boolean;
    nightTime: boolean;
    healthBuff: PrivateGameSettingsHealthBuff | 'UNKNOWN';
    teleportMayhem: boolean;
    chestSwords: string | 'UNKNOWN';
    chestArmour: string | 'UNKNOWN';
    oneHitOneKill: boolean;
    lowGravity: boolean;
    chestBows: string | 'UNKNOWN';
    constructor(data: Record<string, any>);
}
export default SkyWarsPrivateGames;
//# sourceMappingURL=SkyWarsPrivateGames.d.ts.map