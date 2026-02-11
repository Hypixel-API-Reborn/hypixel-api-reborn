class SkyBlockMemberCrimsonIsleTrophyFishFish {
    bronze;
    silver;
    gold;
    diamond;
    total;
    constructor(data, fishName) {
        this.bronze = data?.[`${fishName}_bronze`] || 0;
        this.silver = data?.[`${fishName}_silver`] || 0;
        this.gold = data?.[`${fishName}_gold`] || 0;
        this.diamond = data?.[`${fishName}_diamond`] || 0;
        this.total = this.bronze + this.silver + this.gold + this.diamond;
    }
    toString() {
        return this.total;
    }
}
export default SkyBlockMemberCrimsonIsleTrophyFishFish;
//# sourceMappingURL=SkyBlockMemberCrimsonIsleTrophyFishFish.js.map