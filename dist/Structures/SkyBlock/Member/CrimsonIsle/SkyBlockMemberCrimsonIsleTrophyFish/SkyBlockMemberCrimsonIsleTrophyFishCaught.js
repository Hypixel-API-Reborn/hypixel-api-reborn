import SkyBlockMemberCrimsonIsleTrophyFishFish from './SkyBlockMemberCrimsonIsleTrophyFishFish.js';
class SkyBlockMemberCrimsonIsleTrophyFishCaught {
    total;
    bronze;
    silver;
    gold;
    diamond;
    constructor(data) {
        this.total = this.getTrophyFishPerRank(data, 'Total');
        this.bronze = this.getTrophyFishPerRank(data, 'Bronze');
        this.silver = this.getTrophyFishPerRank(data, 'Silver');
        this.gold = this.getTrophyFishPerRank(data, 'Gold');
        this.diamond = this.getTrophyFishPerRank(data, 'Diamond');
    }
    toString() {
        return this.total;
    }
    getTrophyFishPerRank(data, rank) {
        let num = 0;
        Object.keys(data)
            .filter((fish) => !['toString', 'rank', 'caught'].includes(fish))
            .forEach((fishName) => {
            const fish = data[fishName];
            num += fish[rank.toLowerCase()];
        });
        return num;
    }
}
export default SkyBlockMemberCrimsonIsleTrophyFishCaught;
//# sourceMappingURL=SkyBlockMemberCrimsonIsleTrophyFishCaught.js.map