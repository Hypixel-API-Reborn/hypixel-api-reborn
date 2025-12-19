import SkyWarsMode from '../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsTeamsKitsDefending {
  armorer: SkyWarsMode;
  baseballPlayer: SkyWarsMode;
  guardian: SkyWarsMode;
  batguy: SkyWarsMode;
  frog: SkyWarsMode;
  disco: SkyWarsMode;
  farmer: SkyWarsMode;
  cactus: SkyWarsMode;
  golem: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.armorer = new SkyWarsMode(data, 'kit_defending_team_armorer');
    this.baseballPlayer = new SkyWarsMode(data, 'kit_defending_team_baseball-player');
    this.guardian = new SkyWarsMode(data, 'kit_defending_team_guardian');
    this.batguy = new SkyWarsMode(data, 'kit_defending_team_batguy');
    this.frog = new SkyWarsMode(data, 'kit_defending_team_frog');
    this.disco = new SkyWarsMode(data, 'kit_defending_team_disco');
    this.farmer = new SkyWarsMode(data, 'kit_defending_team_farmer');
    this.cactus = new SkyWarsMode(data, 'kit_defending_team_cactus');
    this.golem = new SkyWarsMode(data, 'kit_defending_team_golem');
  }
}

export default SkyWarsTeamsKitsDefending;
