class SkyBlockMemberPlayerStatsFishing {
    seaCreaturesKills;
    normal;
    treasure;
    largeTreasure;
    trophyFish;
    total;
    constructor(data) {
        this.seaCreaturesKills = data?.seaCreatureKills || 0;
        this.normal = data?.normal || 0;
        this.treasure = data?.treasure || 0;
        this.largeTreasure = data?.large_treasure || 0;
        this.trophyFish = data?.trophy_fish || 0;
        this.total = this.normal + this.treasure + this.largeTreasure + this.trophyFish;
    }
    toString() {
        return this.total;
    }
}
export default SkyBlockMemberPlayerStatsFishing;
//# sourceMappingURL=SkyBlockMemberPlayerStatsFishing.js.map