import SkyWarsKitsMythic from "./SkyWarsKitsMythic.js";
class SkyWarsKitsMythics {
    chronobreaker;
    netherLord;
    endLord;
    monsterTrainer;
    cryomancer;
    thundermeister;
    fishmonger;
    constructor(data) {
        this.chronobreaker = new SkyWarsKitsMythic(data, 'kit_mythical_chronobreaker');
        this.netherLord = new SkyWarsKitsMythic(data, 'kit_mythical_nether-lord');
        this.endLord = new SkyWarsKitsMythic(data, 'kit_mythical_end-lord');
        this.monsterTrainer = new SkyWarsKitsMythic(data, 'kit_mythical_monster-trainer');
        this.cryomancer = new SkyWarsKitsMythic(data, 'kit_mythical_cryomancer');
        this.thundermeister = new SkyWarsKitsMythic(data, 'kit_mythical_thundermeister');
        this.fishmonger = new SkyWarsKitsMythic(data, 'kit_mythical_fishmonger');
    }
}
export default SkyWarsKitsMythics;
//# sourceMappingURL=SkyWarsKitsMythics.js.map