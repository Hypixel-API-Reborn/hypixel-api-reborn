class SkyBlockMemberDungeonsTreasuresChest {
    runId;
    chestId;
    chestType;
    rewards;
    rolledRNGMeter;
    quality;
    shinyEligible;
    paid;
    rerolls;
    constructor(data) {
        this.runId = data?.run_id || 'UNKNOWN';
        this.chestId = data?.chest_id || 'UNKNOWN';
        this.chestType = data?.treasure_type || 0;
        this.rewards = data?.rewards?.rewards || [];
        this.rolledRNGMeter = data?.rewards?.rolled_rng_meter_randomly || false;
        this.quality = data?.quality || 0;
        this.shinyEligible = data?.shiny_eligible || false;
        this.paid = data?.paid || false;
        this.rerolls = (data?.rerolls || 0) !== 0;
    }
    toString() {
        return this.runId;
    }
}
export default SkyBlockMemberDungeonsTreasuresChest;
//# sourceMappingURL=SkyBlockMemberDungeonsTreasuresChest.js.map