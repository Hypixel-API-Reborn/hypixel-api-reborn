import BaseSkyWarsMode from '../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsMegaKits {
  default: BaseSkyWarsMode;
  hunter: BaseSkyWarsMode;
  scout: BaseSkyWarsMode;
  baseballPlayer: BaseSkyWarsMode;
  armorer: BaseSkyWarsMode;
  knight: BaseSkyWarsMode;
  cannoneer: BaseSkyWarsMode;
  hellhound: BaseSkyWarsMode;
  witch: BaseSkyWarsMode;
  fisherman: BaseSkyWarsMode;
  armorsmith: BaseSkyWarsMode;
  pyromaniac: BaseSkyWarsMode;
  paladin: BaseSkyWarsMode;
  healer: BaseSkyWarsMode;
  skeletor: BaseSkyWarsMode;
  enderman: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.default = new BaseSkyWarsMode(data, 'kit_mega_mega_default');
    this.hunter = new BaseSkyWarsMode(data, 'kit_mega_mega_hunter');
    this.scout = new BaseSkyWarsMode(data, 'kit_mega_mega_scout');
    this.baseballPlayer = new BaseSkyWarsMode(data, 'kit_mega_mega_baseball-player');
    this.armorer = new BaseSkyWarsMode(data, 'kit_mega_mega_armorer');
    this.knight = new BaseSkyWarsMode(data, 'kit_mega_mega_knight');
    this.cannoneer = new BaseSkyWarsMode(data, 'kit_mega_mega_cannoneer');
    this.hellhound = new BaseSkyWarsMode(data, 'kit_mega_mega_hellhound');
    this.witch = new BaseSkyWarsMode(data, 'kit_mega_mega_witch');
    this.fisherman = new BaseSkyWarsMode(data, 'kit_mega_mega_fisherman');
    this.armorsmith = new BaseSkyWarsMode(data, 'kit_mega_mega_armorsmith');
    this.pyromaniac = new BaseSkyWarsMode(data, 'kit_mega_mega_pyromaniac');
    this.paladin = new BaseSkyWarsMode(data, 'kit_mega_mega_paladin');
    this.healer = new BaseSkyWarsMode(data, 'kit_mega_mega_healer');
    this.skeletor = new BaseSkyWarsMode(data, 'kit_mega_mega_skeletor');
    this.enderman = new BaseSkyWarsMode(data, 'kit_mega_mega_enderman');
  }
}

export default SkyWarsMegaKits;
