import BaseSkyWarsMode from "../SkyWarsMode/BaseSkyWarsMode.js";
class SkyWarsRankedKits {
    default;
    scout;
    armorer;
    bowman;
    champion;
    pyromancer;
    hound;
    athlete;
    magician;
    healer;
    paladin;
    blacksmith;
    constructor(data) {
        this.default = new BaseSkyWarsMode(data, 'kit_ranked_ranked_default');
        this.scout = new BaseSkyWarsMode(data, 'kit_ranked_ranked_scout');
        this.armorer = new BaseSkyWarsMode(data, 'kit_ranked_ranked_armorer');
        this.bowman = new BaseSkyWarsMode(data, 'kit_ranked_ranked_bowman');
        this.champion = new BaseSkyWarsMode(data, 'kit_ranked_ranked_champion');
        this.pyromancer = new BaseSkyWarsMode(data, 'kit_ranked_ranked_pyromancer');
        this.hound = new BaseSkyWarsMode(data, 'kit_ranked_ranked_hound');
        this.athlete = new BaseSkyWarsMode(data, 'kit_ranked_ranked_athlete');
        this.magician = new BaseSkyWarsMode(data, 'kit_ranked_ranked_magician');
        this.healer = new BaseSkyWarsMode(data, 'kit_ranked_ranked_healer');
        this.paladin = new BaseSkyWarsMode(data, 'kit_ranked_ranked_paladin');
        this.blacksmith = new BaseSkyWarsMode(data, 'kit_ranked_ranked_blacksmith');
    }
}
export default SkyWarsRankedKits;
//# sourceMappingURL=SkyWarsRankedKits.js.map