import SkyBlockMemberPlayerStatsEndIslandDragonFight from './SkyBlockMemberPlayerStatsEndIslandDragonFight.js';
class SkyBlockMemberPlayerStatsEndIsland {
    dragonFight;
    summoningEyesCollected;
    specialZealotLootCollected;
    constructor(data) {
        this.dragonFight = new SkyBlockMemberPlayerStatsEndIslandDragonFight(data?.dragon_fight || {});
        this.summoningEyesCollected = data?.summoning_eyes_collected || 0;
        this.specialZealotLootCollected = data?.special_zealot_loot_collected || 0;
    }
}
export default SkyBlockMemberPlayerStatsEndIsland;
//# sourceMappingURL=SkyBlockMemberPlayerStatsEndIsland.js.map