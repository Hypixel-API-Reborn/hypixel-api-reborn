import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsSoloKitsMini {
  athlete: BaseSkyWarsMode;
  scout: BaseSkyWarsMode;
  champion: BaseSkyWarsMode;
  magician: BaseSkyWarsMode;
  bowman: BaseSkyWarsMode;
  healer: BaseSkyWarsMode;
  pyromancer: BaseSkyWarsMode;
  armorer: BaseSkyWarsMode;
  blacksmith: BaseSkyWarsMode;
  hound: BaseSkyWarsMode;
  paladin: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.athlete = new BaseSkyWarsMode(data, 'kit_mini_solo_athlete');
    this.scout = new BaseSkyWarsMode(data, 'kit_mini_solo_scout');
    this.champion = new BaseSkyWarsMode(data, 'kit_mini_solo_champion');
    this.magician = new BaseSkyWarsMode(data, 'kit_mini_solo_magician');
    this.bowman = new BaseSkyWarsMode(data, 'kit_mini_solo_bowman');
    this.healer = new BaseSkyWarsMode(data, 'kit_mini_solo_healer');
    this.pyromancer = new BaseSkyWarsMode(data, 'kit_mini_solo_pyromancer');
    this.armorer = new BaseSkyWarsMode(data, 'kit_mini_solo_armorer');
    this.blacksmith = new BaseSkyWarsMode(data, 'kit_mini_solo_blacksmith');
    this.hound = new BaseSkyWarsMode(data, 'kit_mini_solo_hound');
    this.paladin = new BaseSkyWarsMode(data, 'kit_mini_solo_paladin');
  }
}

export default SkyWarsSoloKitsMini;
