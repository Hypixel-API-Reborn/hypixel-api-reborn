import type { PrivateGameSettingsGameEventSpeed, PrivateGameSettingsHealthBuff, PrivateGameSettingsJumpBoost, PrivateGameSettingsSpeed, WoolGamesPrivateGameSettingsMapDestructibility, WoolGamesPrivateGameSettingsSpawnRate } from '../../../Types/Player.js';
declare class WoolGamesPrivateGames {
    blockPlace: boolean;
    respawnEnable: boolean;
    rainbowWool: boolean;
    lowGravity: boolean;
    noBlockBreak: boolean;
    gameEventSpeed: PrivateGameSettingsGameEventSpeed;
    oneHitOneKill: boolean;
    jumpBoost: PrivateGameSettingsJumpBoost;
    healthBuff: PrivateGameSettingsHealthBuff;
    noPowerups: boolean;
    noClass: boolean;
    sheepSpawnRate: WoolGamesPrivateGameSettingsSpawnRate;
    magicWoolSpawnRate: WoolGamesPrivateGameSettingsSpawnRate;
    mapDestructibility: WoolGamesPrivateGameSettingsMapDestructibility;
    noKits: boolean;
    speed: PrivateGameSettingsSpeed;
    constructor(data: Record<string, any>);
}
export default WoolGamesPrivateGames;
//# sourceMappingURL=WoolGamesPrivateGames.d.ts.map