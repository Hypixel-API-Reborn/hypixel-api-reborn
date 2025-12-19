import SkyWarsMode from '../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsTeamsKitsSupporting {
  healer: SkyWarsMode;
  ecologist: SkyWarsMode;
  armorsmith: SkyWarsMode;
  rookie: SkyWarsMode;
  enchanter: SkyWarsMode;
  pyro: SkyWarsMode;
  pharaoh: SkyWarsMode;
  warlock: SkyWarsMode;
  zookeeper: SkyWarsMode;
  princess: SkyWarsMode;
  troll: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.healer = new SkyWarsMode(data, 'kit_supporting_team_healer');
    this.ecologist = new SkyWarsMode(data, 'kit_supporting_team_ecologist');
    this.armorsmith = new SkyWarsMode(data, 'kit_supporting_team_armorsmith');
    this.rookie = new SkyWarsMode(data, 'kit_supporting_team_rookie');
    this.enchanter = new SkyWarsMode(data, 'kit_supporting_team_enchanter');
    this.pyro = new SkyWarsMode(data, 'kit_supporting_team_pyro');
    this.pharaoh = new SkyWarsMode(data, 'kit_supporting_team_pharaoh');
    this.warlock = new SkyWarsMode(data, 'kit_supporting_team_warlock');
    this.zookeeper = new SkyWarsMode(data, 'kit_supporting_team_zookeeper');
    this.princess = new SkyWarsMode(data, 'kit_supporting_team_princess');
    this.troll = new SkyWarsMode(data, 'kit_supporting_team_troll');
  }
}

export default SkyWarsTeamsKitsSupporting;
