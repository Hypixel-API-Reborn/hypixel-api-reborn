class GameCountsSkyBlockModes {
    instanced;
    foraging2;
    garden;
    dungeonHub;
    fishing1;
    farming1;
    mining2;
    darkAuction;
    kuudra;
    crimsonIsle;
    mining3;
    crystalHollows;
    dynamic;
    combat3;
    combat1;
    foraging1;
    hub;
    dungeon;
    mining1;
    rift;
    mineshaft;
    constructor(data) {
        this.instanced = data?.instanced || 0;
        this.foraging2 = data?.foraging_2 || 0;
        this.garden = data?.garden || 0;
        this.dungeonHub = data?.dungeon_hub || 0;
        this.fishing1 = data?.fishing_1 || 0;
        this.farming1 = data?.farming_1 || 0;
        this.mining2 = data?.mining_2 || 0;
        this.darkAuction = data?.dark_auction || 0;
        this.kuudra = data?.kuudra || 0;
        this.crimsonIsle = data?.crimson_isle || 0;
        this.mining3 = data?.mining_3 || 0;
        this.crystalHollows = data?.crystal_hollows || 0;
        this.dynamic = data?.dynamic || 0;
        this.combat3 = data?.combat_3 || 0;
        this.combat1 = data?.combat_1 || 0;
        this.foraging1 = data?.foraging_1 || 0;
        this.hub = data?.hub || 0;
        this.dungeon = data?.dungeon || 0;
        this.mining1 = data?.mining_1 || 0;
        this.rift = data?.rift || 0;
        this.mineshaft = data?.mineshaft || 0;
    }
}
export default GameCountsSkyBlockModes;
//# sourceMappingURL=GameCountsSkyBlockModes.js.map