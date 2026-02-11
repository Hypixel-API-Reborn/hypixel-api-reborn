import type { BedWarsPrivateGameSettingsEventTime, BedWarsPrivateGameSettingsRespawnTime, PrivateGameSettingsGameSpeed, PrivateGameSettingsHealthBuff } from '../../../Types/Player.js';
declare class BedWarsPrivateGameSettings {
    bedInstaBreak: boolean;
    disableBlockProtection: boolean;
    eventTime: BedWarsPrivateGameSettingsEventTime;
    healthBuff: PrivateGameSettingsHealthBuff;
    lowGravity: boolean;
    maxTeamUpgrades: boolean;
    noDiamonds: boolean;
    noEmeralds: boolean;
    oneHitOneKill: boolean;
    respawnTime: BedWarsPrivateGameSettingsRespawnTime;
    speed: PrivateGameSettingsGameSpeed;
    constructor(data: Record<string, any>);
}
export default BedWarsPrivateGameSettings;
//# sourceMappingURL=BedWarsPrivateGameSettings.d.ts.map