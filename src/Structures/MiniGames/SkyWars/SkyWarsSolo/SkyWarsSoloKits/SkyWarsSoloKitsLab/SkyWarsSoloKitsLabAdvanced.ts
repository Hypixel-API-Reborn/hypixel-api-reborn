import BaseSkyWarsMode from '../../../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsSoloKitsLabAdvanced {
  armorer: BaseSkyWarsMode;
  salmon: BaseSkyWarsMode;
  knight: BaseSkyWarsMode;
  pyro: BaseSkyWarsMode;
  zookeeper: BaseSkyWarsMode;
  slime: BaseSkyWarsMode;
  farmer: BaseSkyWarsMode;
  enchanter: BaseSkyWarsMode;
  jester: BaseSkyWarsMode;
  engineer: BaseSkyWarsMode;
  enderman: BaseSkyWarsMode;
  cannoneer: BaseSkyWarsMode;
  hunter: BaseSkyWarsMode;
  sloth: BaseSkyWarsMode;
  pigRider: BaseSkyWarsMode;
  magician: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.armorer = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_armorer');
    this.salmon = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_salmon');
    this.knight = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_knight');
    this.pyro = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_pyro');
    this.zookeeper = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_zookeeper');
    this.slime = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_slime');
    this.farmer = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_farmer');
    this.enchanter = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_enchanter');
    this.jester = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_jester');
    this.engineer = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_engineer');
    this.enderman = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_enderman');
    this.cannoneer = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_cannoneer');
    this.hunter = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_hunter');
    this.sloth = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_sloth');
    this.pigRider = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_pig-rider');
    this.magician = new BaseSkyWarsMode(data, 'lab_kit_advanced_solo_magician');
  }
}

export default SkyWarsSoloKitsLabAdvanced;
