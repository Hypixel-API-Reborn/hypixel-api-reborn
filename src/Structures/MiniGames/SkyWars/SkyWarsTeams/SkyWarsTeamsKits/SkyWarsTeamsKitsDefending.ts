import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsTeamsKitsDefending {
  armorer: BaseSkyWarsMode;
  baseballPlayer: BaseSkyWarsMode;
  guardian: BaseSkyWarsMode;
  batguy: BaseSkyWarsMode;
  frog: BaseSkyWarsMode;
  disco: BaseSkyWarsMode;
  farmer: BaseSkyWarsMode;
  cactus: BaseSkyWarsMode;
  golem: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
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
