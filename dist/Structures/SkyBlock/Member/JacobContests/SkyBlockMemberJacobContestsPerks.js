class SkyBlockMemberJacobContestsPerks {
    doubleDrops;
    farmingLevelCap;
    personalBests;
    constructor(data) {
        this.doubleDrops = data?.double_drops || 0;
        this.farmingLevelCap = data?.farming_level_cap || 0;
        this.personalBests = data?.personal_bests || false;
    }
}
export default SkyBlockMemberJacobContestsPerks;
//# sourceMappingURL=SkyBlockMemberJacobContestsPerks.js.map