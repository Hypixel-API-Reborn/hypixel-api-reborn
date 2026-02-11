class SkyWarsPrivateGames {
    maxKitsAndPerks;
    legacyItems;
    speed;
    dragons;
    noKits;
    nightTime;
    healthBuff;
    teleportMayhem;
    chestSwords;
    chestArmour;
    oneHitOneKill;
    lowGravity;
    chestBows;
    constructor(data) {
        this.maxKitsAndPerks = data?.enable_max_kits_and_perks || false;
        this.legacyItems = data?.enable_legacy_items || false;
        this.speed = data?.speed || 'UNKNOWN';
        this.dragons = data?.dragons || 'UNKNOWN';
        this.noKits = data?.no_kits || false;
        this.nightTime = data?.enable_night_time || false;
        this.healthBuff = data?.health_buff || 'UNKNOWN';
        this.teleportMayhem = data?.enable_teleport_mayhem || false;
        this.chestSwords = data?.chest_swords || 'UNKNOWN';
        this.chestArmour = data?.chest_armour || 'UNKNOWN';
        this.oneHitOneKill = data?.one_hit_one_kill || false;
        this.lowGravity = data?.low_gravity || false;
        this.chestBows = data?.chest_bows || 'UNKNOWN';
    }
}
export default SkyWarsPrivateGames;
//# sourceMappingURL=SkyWarsPrivateGames.js.map