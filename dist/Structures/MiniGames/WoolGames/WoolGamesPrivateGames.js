class WoolGamesPrivateGames {
    blockPlace;
    respawnEnable;
    rainbowWool;
    lowGravity;
    noBlockBreak;
    gameEventSpeed;
    oneHitOneKill;
    jumpBoost;
    healthBuff;
    noPowerups;
    noClass;
    sheepSpawnRate;
    magicWoolSpawnRate;
    mapDestructibility;
    noKits;
    speed;
    constructor(data) {
        this.blockPlace = data?.block_place || true;
        this.respawnEnable = data?.respawn_enable || false;
        this.rainbowWool = data?.rainbow_wool || false;
        this.lowGravity = data?.low_gravity || false;
        this.noBlockBreak = data?.no_block_break || false;
        this.gameEventSpeed = data?.game_speed || '1x - Normal';
        this.oneHitOneKill = data?.one_hit_one_kill || false;
        this.jumpBoost = data?.jump_boost || 'Disabled';
        this.healthBuff = data?.health_buff || 'Normal Health';
        this.noPowerups = data?.no_powerups || false;
        this.noClass = data?.no_class || false;
        this.sheepSpawnRate = data?.sheep_spawn_rate || '1x';
        this.magicWoolSpawnRate = data?.magic_wool_spawn_rate || '1x';
        this.mapDestructibility = data?.map_destructibility || 'Default';
        this.noKits = data?.no_kits || false;
        this.speed = data?.speed || 'No Speed';
    }
}
export default WoolGamesPrivateGames;
//# sourceMappingURL=WoolGamesPrivateGames.js.map