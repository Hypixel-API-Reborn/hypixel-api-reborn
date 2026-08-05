import type { BlitzSurvivalGamesPrivateGamesExtraStar, DuelsPrivateGameSettingsArrowCooldown, DuelsPrivateGameSettingsArrowCount, DuelsPrivateGameSettingsBoxingMaxHits, DuelsPrivateGameSettingsChangeWeapon, DuelsPrivateGameSettingsGiveHaste, DuelsPrivateGameSettingsGiveRegen, DuelsPrivateGameSettingsGiveSlowness, DuelsPrivateGameSettingsGodApple, DuelsPrivateGameSettingsMoreCaptures, DuelsPrivateGameSettingsMoreGoals, DuelsPrivateGameSettingsNightTime, DuelsPrivateGameSettingsRoundTime, PrivateGameSettingsHealthBuff, PrivateGameSettingsSpeed } from '../../../Types/Player.js';
declare class DuelsPrivateGames {
    arrowCooldown: DuelsPrivateGameSettingsArrowCooldown;
    arrowCount: DuelsPrivateGameSettingsArrowCount;
    blockProtection: boolean;
    boxingMaxHits: DuelsPrivateGameSettingsBoxingMaxHits;
    boxingMercy: boolean;
    changeWeapon: DuelsPrivateGameSettingsChangeWeapon;
    enableMaxKitsAndKillEffects: boolean;
    enableNightTime: boolean;
    enableOp: boolean;
    extraBlitzStars: BlitzSurvivalGamesPrivateGamesExtraStar;
    giveHaste: DuelsPrivateGameSettingsGiveHaste;
    giveRegen: DuelsPrivateGameSettingsGiveRegen;
    giveSlowness: DuelsPrivateGameSettingsGiveSlowness;
    godApple: DuelsPrivateGameSettingsGodApple;
    healthBuff: PrivateGameSettingsHealthBuff;
    knockbackTen: boolean;
    lowGravity: boolean;
    moreCaptures: DuelsPrivateGameSettingsMoreCaptures;
    moreGoals: DuelsPrivateGameSettingsMoreGoals;
    nightTime: DuelsPrivateGameSettingsNightTime;
    noKit: boolean;
    noKits: boolean;
    oneHitOneKill: boolean;
    oneHitOneKillBlitz: boolean;
    onlyTnt: boolean;
    rawDamage: boolean;
    removeBows: boolean;
    removeRods: boolean;
    roundTime: DuelsPrivateGameSettingsRoundTime;
    speed: PrivateGameSettingsSpeed;
    worldBorder: boolean;
    constructor(data: Record<string, any>);
}
export default DuelsPrivateGames;
//# sourceMappingURL=DuelsPrivateGames.d.ts.map