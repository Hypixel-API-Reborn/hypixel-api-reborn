import BaseSkyWarsMode from '../../../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsSoloKitsTourneyAdvanced {
  armorer: BaseSkyWarsMode;
  enderman: BaseSkyWarsMode;
  knight: BaseSkyWarsMode;
  enchanter: BaseSkyWarsMode;
  farmer: BaseSkyWarsMode;
  cannoneer: BaseSkyWarsMode;
  jester: BaseSkyWarsMode;
  hunter: BaseSkyWarsMode;
  magician: BaseSkyWarsMode;
  zookeeper: BaseSkyWarsMode;
  slime: BaseSkyWarsMode;
  engineer: BaseSkyWarsMode;
  pigRider: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.armorer = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_armorer');
    this.enderman = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_enderman');
    this.knight = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_knight');
    this.enchanter = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_enchanter');
    this.farmer = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_farmer');
    this.cannoneer = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_cannoneer');
    this.jester = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_jester');
    this.hunter = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_hunter');
    this.magician = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_magician');
    this.zookeeper = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_zookeeper');
    this.slime = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_slime');
    this.engineer = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_engineer');
    this.pigRider = new BaseSkyWarsMode(data, 'tourney_kit_advanced_solo_pig-rider');
  }
}

export default SkyWarsSoloKitsTourneyAdvanced;
