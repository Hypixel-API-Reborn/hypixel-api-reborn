import type { BlitzSurvivalGamesKitId } from '../../../Types/Player.ts';
declare class BlitzSurvivalGamesData {
    wins: number;
    winsTeams: number;
    gamesPlayed: number;
    losses: number;
    WLRatio: number;
    arrowsHit: number;
    arrowsFired: number;
    bowAccuracy: number;
    blocksTraveledBoat: number;
    blocksTraveledHorse: number;
    blocksTraveledMinecart: number;
    blocksTraveledPig: number;
    bottlesThrown: number;
    chestsOpened: number;
    damage: number;
    damageTaken: number;
    eggsCollected: number;
    eggsThrown: number;
    explosiveKills: number;
    fallDamage: number;
    fallKills: number;
    itemsEnchanted: number;
    kills: number;
    deaths: number;
    KDRatio: number;
    mobsSpawned: number;
    potionsDrunk: number;
    potionsThrown: number;
    railsPlaced: number;
    snowballsThrown: number;
    tauntKills: number;
    timePlayed: number;
    tntPlaced: number;
    constructor(data: Record<string, any>, kitName?: BlitzSurvivalGamesKitId);
}
export default BlitzSurvivalGamesData;
//# sourceMappingURL=BlitzSurvivalGamesData.d.ts.map