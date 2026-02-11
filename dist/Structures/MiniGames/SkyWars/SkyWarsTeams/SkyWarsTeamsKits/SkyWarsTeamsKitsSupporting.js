import BaseSkyWarsMode from "../../SkyWarsMode/BaseSkyWarsMode.js";
class SkyWarsTeamsKitsSupporting {
    healer;
    ecologist;
    armorsmith;
    rookie;
    enchanter;
    pyro;
    pharaoh;
    warlock;
    zookeeper;
    princess;
    troll;
    constructor(data) {
        this.healer = new BaseSkyWarsMode(data, 'kit_supporting_team_healer');
        this.ecologist = new BaseSkyWarsMode(data, 'kit_supporting_team_ecologist');
        this.armorsmith = new BaseSkyWarsMode(data, 'kit_supporting_team_armorsmith');
        this.rookie = new BaseSkyWarsMode(data, 'kit_supporting_team_rookie');
        this.enchanter = new BaseSkyWarsMode(data, 'kit_supporting_team_enchanter');
        this.pyro = new BaseSkyWarsMode(data, 'kit_supporting_team_pyro');
        this.pharaoh = new BaseSkyWarsMode(data, 'kit_supporting_team_pharaoh');
        this.warlock = new BaseSkyWarsMode(data, 'kit_supporting_team_warlock');
        this.zookeeper = new BaseSkyWarsMode(data, 'kit_supporting_team_zookeeper');
        this.princess = new BaseSkyWarsMode(data, 'kit_supporting_team_princess');
        this.troll = new BaseSkyWarsMode(data, 'kit_supporting_team_troll');
    }
}
export default SkyWarsTeamsKitsSupporting;
//# sourceMappingURL=SkyWarsTeamsKitsSupporting.js.map