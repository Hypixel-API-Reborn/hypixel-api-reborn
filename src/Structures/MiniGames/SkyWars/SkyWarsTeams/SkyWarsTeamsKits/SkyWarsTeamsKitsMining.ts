import SkyWarsMode from '../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsTeamsKitsMining {
  default: SkyWarsMode;
  cannoneer: SkyWarsMode;
  speleologist: SkyWarsMode;
  defaultTeams: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.default = new SkyWarsMode(data, 'kit_mining_team_default');
    this.cannoneer = new SkyWarsMode(data, 'kit_mining_team_cannoneer');
    this.speleologist = new SkyWarsMode(data, 'kit_mining_team_speleologist');
    this.defaultTeams = new SkyWarsMode(data, 'kit_mining_teams_default');
  }
}

export default SkyWarsTeamsKitsMining;
