import SkyWarsMode from '../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsSoloKitsMini {
  athlete: SkyWarsMode;
  scout: SkyWarsMode;
  champion: SkyWarsMode;
  magician: SkyWarsMode;
  bowman: SkyWarsMode;
  healer: SkyWarsMode;
  pyromancer: SkyWarsMode;
  armorer: SkyWarsMode;
  blacksmith: SkyWarsMode;
  hound: SkyWarsMode;
  paladin: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.athlete = new SkyWarsMode(data, 'kit_mini_solo_athlete');
    this.scout = new SkyWarsMode(data, 'kit_mini_solo_scout');
    this.champion = new SkyWarsMode(data, 'kit_mini_solo_champion');
    this.magician = new SkyWarsMode(data, 'kit_mini_solo_magician');
    this.bowman = new SkyWarsMode(data, 'kit_mini_solo_bowman');
    this.healer = new SkyWarsMode(data, 'kit_mini_solo_healer');
    this.pyromancer = new SkyWarsMode(data, 'kit_mini_solo_pyromancer');
    this.armorer = new SkyWarsMode(data, 'kit_mini_solo_armorer');
    this.blacksmith = new SkyWarsMode(data, 'kit_mini_solo_blacksmith');
    this.hound = new SkyWarsMode(data, 'kit_mini_solo_hound');
    this.paladin = new SkyWarsMode(data, 'kit_mini_solo_paladin');
  }
}

export default SkyWarsSoloKitsMini;
