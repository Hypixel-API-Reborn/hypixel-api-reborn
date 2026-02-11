import SkyBlockMemberCrimsonIsleTrophyFishCaught from './SkyBlockMemberCrimsonIsleTrophyFishCaught.js';
import SkyBlockMemberCrimsonIsleTrophyFishFish from './SkyBlockMemberCrimsonIsleTrophyFishFish.js';
class SkyBlockMemberCrimsonIsleTrophyFish {
    rank;
    gusher;
    blobfish;
    lavaHorse;
    goldenFish;
    volcanicStonefish;
    slugfish;
    vanille;
    obfuscatedFish1;
    obfuscatedFish2;
    obfuscatedFish3;
    sulphurSkitter;
    skeletonFish;
    manaRay;
    flyfish;
    steamingHotFlounder;
    soulFish;
    karateFish;
    moldfin;
    caught;
    constructor(data) {
        const rewards = data?.rewards || [1];
        this.rank = SkyBlockMemberCrimsonIsleTrophyFish.getTrophyFishRank(rewards[rewards.length - 1]);
        this.gusher = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'gusher');
        this.blobfish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'blobfish');
        this.lavaHorse = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'lava_horse');
        this.goldenFish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'golden_fish');
        this.volcanicStonefish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'volcanic_stonefish');
        this.slugfish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'slugfish');
        this.vanille = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'vanille');
        this.obfuscatedFish1 = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'obfuscated_fish_1');
        this.obfuscatedFish2 = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'obfuscated_fish_2');
        this.obfuscatedFish3 = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'obfuscated_fish_3');
        this.sulphurSkitter = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'sulphur_skitter');
        this.skeletonFish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'skeleton_fish');
        this.manaRay = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'mana_ray');
        this.flyfish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'flyfish');
        this.steamingHotFlounder = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'steaming_hot_flounder');
        this.soulFish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'soul_fish');
        this.karateFish = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'karate_fish');
        this.moldfin = new SkyBlockMemberCrimsonIsleTrophyFishFish(data, 'moldfin');
        this.caught = new SkyBlockMemberCrimsonIsleTrophyFishCaught(this);
    }
    toString() {
        return this.rank;
    }
    static getTrophyFishRank(level) {
        switch (level) {
            case 2:
                return 'Silver';
            case 3:
                return 'Gold';
            case 4:
                return 'Diamond';
            default:
                return 'Bronze';
        }
    }
}
export default SkyBlockMemberCrimsonIsleTrophyFish;
//# sourceMappingURL=SkyBlockMemberCrimsonIsleTrophyFish.js.map