import BaseSkyWarsMode from "../../SkyWarsMode/BaseSkyWarsMode.js";
class SkyWarsTeamsKitsMining {
    default;
    cannoneer;
    speleologist;
    defaultTeams;
    constructor(data) {
        this.default = new BaseSkyWarsMode(data, 'kit_mining_team_default');
        this.cannoneer = new BaseSkyWarsMode(data, 'kit_mining_team_cannoneer');
        this.speleologist = new BaseSkyWarsMode(data, 'kit_mining_team_speleologist');
        this.defaultTeams = new BaseSkyWarsMode(data, 'kit_mining_teams_default');
    }
}
export default SkyWarsTeamsKitsMining;
//# sourceMappingURL=SkyWarsTeamsKitsMining.js.map