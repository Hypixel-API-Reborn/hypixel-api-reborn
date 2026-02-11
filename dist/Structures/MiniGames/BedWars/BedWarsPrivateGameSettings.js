class BedWarsPrivateGameSettings {
    bedInstaBreak;
    disableBlockProtection;
    eventTime;
    healthBuff;
    lowGravity;
    maxTeamUpgrades;
    noDiamonds;
    noEmeralds;
    oneHitOneKill;
    respawnTime;
    speed;
    constructor(data) {
        this.bedInstaBreak = data?.bed_instabreak || false;
        this.disableBlockProtection = data?.disable_block_protection || false;
        this.eventTime = data?.event_time || '1x - Normal';
        this.healthBuff = data?.health_buff || 'Normal Health';
        this.lowGravity = data?.low_gravity || false;
        this.maxTeamUpgrades = data?.max_team_upgrades || false;
        this.noDiamonds = data?.no_diamonds || false;
        this.noEmeralds = data?.no_emeralds || false;
        this.oneHitOneKill = data?.one_hit_one_kill || false;
        this.respawnTime = data?.respawn_time || '5 Seconds';
        this.speed = data?.speed || 'No Speed';
    }
}
export default BedWarsPrivateGameSettings;
//# sourceMappingURL=BedWarsPrivateGameSettings.js.map