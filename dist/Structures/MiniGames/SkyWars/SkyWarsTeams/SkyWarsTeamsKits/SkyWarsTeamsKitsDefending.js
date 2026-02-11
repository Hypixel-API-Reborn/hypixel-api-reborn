import BaseSkyWarsMode from "../../SkyWarsMode/BaseSkyWarsMode.js";
class SkyWarsTeamsKitsDefending {
    armorer;
    baseballPlayer;
    guardian;
    batguy;
    frog;
    disco;
    farmer;
    cactus;
    golem;
    constructor(data) {
        this.armorer = new BaseSkyWarsMode(data, 'kit_defending_team_armorer');
        this.baseballPlayer = new BaseSkyWarsMode(data, 'kit_defending_team_baseball-player');
        this.guardian = new BaseSkyWarsMode(data, 'kit_defending_team_guardian');
        this.batguy = new BaseSkyWarsMode(data, 'kit_defending_team_batguy');
        this.frog = new BaseSkyWarsMode(data, 'kit_defending_team_frog');
        this.disco = new BaseSkyWarsMode(data, 'kit_defending_team_disco');
        this.farmer = new BaseSkyWarsMode(data, 'kit_defending_team_farmer');
        this.cactus = new BaseSkyWarsMode(data, 'kit_defending_team_cactus');
        this.golem = new BaseSkyWarsMode(data, 'kit_defending_team_golem');
    }
}
export default SkyWarsTeamsKitsDefending;
//# sourceMappingURL=SkyWarsTeamsKitsDefending.js.map