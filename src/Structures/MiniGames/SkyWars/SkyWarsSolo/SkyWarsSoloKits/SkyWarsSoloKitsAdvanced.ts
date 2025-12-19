import SkyWarsMode from '../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsSoloKitsAdvanced {
  farmer: SkyWarsMode;
  enchanter: SkyWarsMode;
  hunter: SkyWarsMode;
  knight: SkyWarsMode;
  armorer: SkyWarsMode;
  cannoneer: SkyWarsMode;
  pyro: SkyWarsMode;
  salmon: SkyWarsMode;
  zookeeper: SkyWarsMode;
  enderman: SkyWarsMode;
  slime: SkyWarsMode;
  pigRider: SkyWarsMode;
  sloth: SkyWarsMode;
  jester: SkyWarsMode;
  guardian: SkyWarsMode;
  engineer: SkyWarsMode;
  magician: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.farmer = new SkyWarsMode(data, 'kit_advanced_solo_farmer');
    this.enchanter = new SkyWarsMode(data, 'kit_advanced_solo_enchanter');
    this.hunter = new SkyWarsMode(data, 'kit_advanced_solo_hunter');
    this.knight = new SkyWarsMode(data, 'kit_advanced_solo_knight');
    this.armorer = new SkyWarsMode(data, 'kit_advanced_solo_armorer');
    this.cannoneer = new SkyWarsMode(data, 'kit_advanced_solo_cannoneer');
    this.pyro = new SkyWarsMode(data, 'kit_advanced_solo_pyro');
    this.salmon = new SkyWarsMode(data, 'kit_advanced_solo_salmon');
    this.zookeeper = new SkyWarsMode(data, 'kit_advanced_solo_zookeeper');
    this.enderman = new SkyWarsMode(data, 'kit_advanced_solo_enderman');
    this.slime = new SkyWarsMode(data, 'kit_advanced_solo_slime');
    this.pigRider = new SkyWarsMode(data, 'kit_advanced_solo_pig-rider');
    this.sloth = new SkyWarsMode(data, 'kit_advanced_solo_sloth');
    this.jester = new SkyWarsMode(data, 'kit_advanced_solo_jester');
    this.guardian = new SkyWarsMode(data, 'kit_advanced_solo_guardian');
    this.engineer = new SkyWarsMode(data, 'kit_advanced_solo_engineer');
    this.magician = new SkyWarsMode(data, 'kit_advanced_solo_magician');
  }
}

export default SkyWarsSoloKitsAdvanced;
