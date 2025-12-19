import SkyWarsMode from '../../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsSoloKitsTourneyAdvanced {
  armorer: SkyWarsMode;
  enderman: SkyWarsMode;
  knight: SkyWarsMode;
  enchanter: SkyWarsMode;
  farmer: SkyWarsMode;
  cannoneer: SkyWarsMode;
  jester: SkyWarsMode;
  hunter: SkyWarsMode;
  magician: SkyWarsMode;
  zookeeper: SkyWarsMode;
  slime: SkyWarsMode;
  engineer: SkyWarsMode;
  pigRider: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.armorer = new SkyWarsMode(data, 'tourney_kit_advanced_solo_armorer');
    this.enderman = new SkyWarsMode(data, 'tourney_kit_advanced_solo_enderman');
    this.knight = new SkyWarsMode(data, 'tourney_kit_advanced_solo_knight');
    this.enchanter = new SkyWarsMode(data, 'tourney_kit_advanced_solo_enchanter');
    this.farmer = new SkyWarsMode(data, 'tourney_kit_advanced_solo_farmer');
    this.cannoneer = new SkyWarsMode(data, 'tourney_kit_advanced_solo_cannoneer');
    this.jester = new SkyWarsMode(data, 'tourney_kit_advanced_solo_jester');
    this.hunter = new SkyWarsMode(data, 'tourney_kit_advanced_solo_hunter');
    this.magician = new SkyWarsMode(data, 'tourney_kit_advanced_solo_magician');
    this.zookeeper = new SkyWarsMode(data, 'tourney_kit_advanced_solo_zookeeper');
    this.slime = new SkyWarsMode(data, 'tourney_kit_advanced_solo_slime');
    this.engineer = new SkyWarsMode(data, 'tourney_kit_advanced_solo_engineer');
    this.pigRider = new SkyWarsMode(data, 'tourney_kit_advanced_solo_pig-rider');
  }
}

export default SkyWarsSoloKitsTourneyAdvanced;
