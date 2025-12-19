import SkyWarsMode from '../../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsSoloKitsLabAdvanced {
  armorer: SkyWarsMode;
  salmon: SkyWarsMode;
  knight: SkyWarsMode;
  pyro: SkyWarsMode;
  zookeeper: SkyWarsMode;
  slime: SkyWarsMode;
  farmer: SkyWarsMode;
  enchanter: SkyWarsMode;
  jester: SkyWarsMode;
  engineer: SkyWarsMode;
  enderman: SkyWarsMode;
  cannoneer: SkyWarsMode;
  hunter: SkyWarsMode;
  sloth: SkyWarsMode;
  pigRider: SkyWarsMode;
  magician: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.armorer = new SkyWarsMode(data, 'lab_kit_advanced_solo_armorer');
    this.salmon = new SkyWarsMode(data, 'lab_kit_advanced_solo_salmon');
    this.knight = new SkyWarsMode(data, 'lab_kit_advanced_solo_knight');
    this.pyro = new SkyWarsMode(data, 'lab_kit_advanced_solo_pyro');
    this.zookeeper = new SkyWarsMode(data, 'lab_kit_advanced_solo_zookeeper');
    this.slime = new SkyWarsMode(data, 'lab_kit_advanced_solo_slime');
    this.farmer = new SkyWarsMode(data, 'lab_kit_advanced_solo_farmer');
    this.enchanter = new SkyWarsMode(data, 'lab_kit_advanced_solo_enchanter');
    this.jester = new SkyWarsMode(data, 'lab_kit_advanced_solo_jester');
    this.engineer = new SkyWarsMode(data, 'lab_kit_advanced_solo_engineer');
    this.enderman = new SkyWarsMode(data, 'lab_kit_advanced_solo_enderman');
    this.cannoneer = new SkyWarsMode(data, 'lab_kit_advanced_solo_cannoneer');
    this.hunter = new SkyWarsMode(data, 'lab_kit_advanced_solo_hunter');
    this.sloth = new SkyWarsMode(data, 'lab_kit_advanced_solo_sloth');
    this.pigRider = new SkyWarsMode(data, 'lab_kit_advanced_solo_pig-rider');
    this.magician = new SkyWarsMode(data, 'lab_kit_advanced_solo_magician');
  }
}

export default SkyWarsSoloKitsLabAdvanced;
