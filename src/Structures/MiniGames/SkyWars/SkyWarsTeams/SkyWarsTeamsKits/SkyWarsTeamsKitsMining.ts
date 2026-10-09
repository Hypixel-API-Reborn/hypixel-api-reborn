import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsTeamsKitsMining {
  default: BaseSkyWarsMode;
  cannoneer: BaseSkyWarsMode;
  speleologist: BaseSkyWarsMode;
  defaultTeams: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.default = new BaseSkyWarsMode(data, 'kit_mining_team_default');
    this.cannoneer = new BaseSkyWarsMode(data, 'kit_mining_team_cannoneer');
    this.speleologist = new BaseSkyWarsMode(data, 'kit_mining_team_speleologist');
    this.defaultTeams = new BaseSkyWarsMode(data, 'kit_mining_teams_default');
  }
}

export default SkyWarsTeamsKitsMining;
