import BaseSkyWarsMode from "../../SkyWarsMode/BaseSkyWarsMode.js";
class SkyWarsTeamsKitsAttacking {
    scout;
    knight;
    snowman;
    hunter;
    enderman;
    energix;
    slime;
    salmon;
    sloth;
    pigRider;
    grenade;
    engineer;
    magician;
    default;
    jester;
    fisherman;
    archeologist;
    defaultTeams;
    fallenAngel;
    constructor(data) {
        this.scout = new BaseSkyWarsMode(data, 'kit_attacking_team_scout');
        this.knight = new BaseSkyWarsMode(data, 'kit_attacking_team_knight');
        this.snowman = new BaseSkyWarsMode(data, 'kit_attacking_team_snowman');
        this.hunter = new BaseSkyWarsMode(data, 'kit_attacking_team_hunter');
        this.enderman = new BaseSkyWarsMode(data, 'kit_attacking_team_enderman');
        this.energix = new BaseSkyWarsMode(data, 'kit_attacking_team_energix');
        this.slime = new BaseSkyWarsMode(data, 'kit_attacking_team_slime');
        this.salmon = new BaseSkyWarsMode(data, 'kit_attacking_team_salmon');
        this.sloth = new BaseSkyWarsMode(data, 'kit_attacking_team_sloth');
        this.pigRider = new BaseSkyWarsMode(data, 'kit_attacking_team_pig-rider');
        this.grenade = new BaseSkyWarsMode(data, 'kit_attacking_team_grenade');
        this.engineer = new BaseSkyWarsMode(data, 'kit_attacking_team_engineer');
        this.magician = new BaseSkyWarsMode(data, 'kit_attacking_team_magician');
        this.default = new BaseSkyWarsMode(data, 'kit_attacking_team_default');
        this.jester = new BaseSkyWarsMode(data, 'kit_attacking_team_jester');
        this.fisherman = new BaseSkyWarsMode(data, 'kit_attacking_team_fisherman');
        this.archeologist = new BaseSkyWarsMode(data, 'kit_attacking_team_archeologist');
        this.defaultTeams = new BaseSkyWarsMode(data, 'kit_attacking_teams_default');
        this.fallenAngel = new BaseSkyWarsMode(data, 'kit_attacking_team_fallen-angel');
    }
}
export default SkyWarsTeamsKitsAttacking;
//# sourceMappingURL=SkyWarsTeamsKitsAttacking.js.map