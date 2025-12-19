import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsRankedKits {
  default: SkyWarsMode;
  scout: SkyWarsMode;
  armorer: SkyWarsMode;
  bowman: SkyWarsMode;
  champion: SkyWarsMode;
  pyromancer: SkyWarsMode;
  hound: SkyWarsMode;
  athlete: SkyWarsMode;
  magician: SkyWarsMode;
  healer: SkyWarsMode;
  paladin: SkyWarsMode;
  blacksmith: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.default = new SkyWarsMode(data, 'kit_ranked_ranked_default');
    this.scout = new SkyWarsMode(data, 'kit_ranked_ranked_scout');
    this.armorer = new SkyWarsMode(data, 'kit_ranked_ranked_armorer');
    this.bowman = new SkyWarsMode(data, 'kit_ranked_ranked_bowman');
    this.champion = new SkyWarsMode(data, 'kit_ranked_ranked_champion');
    this.pyromancer = new SkyWarsMode(data, 'kit_ranked_ranked_pyromancer');
    this.hound = new SkyWarsMode(data, 'kit_ranked_ranked_hound');
    this.athlete = new SkyWarsMode(data, 'kit_ranked_ranked_athlete');
    this.magician = new SkyWarsMode(data, 'kit_ranked_ranked_magician');
    this.healer = new SkyWarsMode(data, 'kit_ranked_ranked_healer');
    this.paladin = new SkyWarsMode(data, 'kit_ranked_ranked_paladin');
    this.blacksmith = new SkyWarsMode(data, 'kit_ranked_ranked_blacksmith');
  }
}

export default SkyWarsRankedKits;
