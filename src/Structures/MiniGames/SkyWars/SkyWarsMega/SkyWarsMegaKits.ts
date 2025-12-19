import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsMegaKits {
  default: SkyWarsMode;
  hunter: SkyWarsMode;
  scout: SkyWarsMode;
  baseballPlayer: SkyWarsMode;
  armorer: SkyWarsMode;
  knight: SkyWarsMode;
  cannoneer: SkyWarsMode;
  hellhound: SkyWarsMode;
  witch: SkyWarsMode;
  fisherman: SkyWarsMode;
  armorsmith: SkyWarsMode;
  pyromaniac: SkyWarsMode;
  paladin: SkyWarsMode;
  healer: SkyWarsMode;
  skeletor: SkyWarsMode;
  enderman: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.default = new SkyWarsMode(data, 'kit_mega_mega_default');
    this.hunter = new SkyWarsMode(data, 'kit_mega_mega_hunter');
    this.scout = new SkyWarsMode(data, 'kit_mega_mega_scout');
    this.baseballPlayer = new SkyWarsMode(data, 'kit_mega_mega_baseball-player');
    this.armorer = new SkyWarsMode(data, 'kit_mega_mega_armorer');
    this.knight = new SkyWarsMode(data, 'kit_mega_mega_knight');
    this.cannoneer = new SkyWarsMode(data, 'kit_mega_mega_cannoneer');
    this.hellhound = new SkyWarsMode(data, 'kit_mega_mega_hellhound');
    this.witch = new SkyWarsMode(data, 'kit_mega_mega_witch');
    this.fisherman = new SkyWarsMode(data, 'kit_mega_mega_fisherman');
    this.armorsmith = new SkyWarsMode(data, 'kit_mega_mega_armorsmith');
    this.pyromaniac = new SkyWarsMode(data, 'kit_mega_mega_pyromaniac');
    this.paladin = new SkyWarsMode(data, 'kit_mega_mega_paladin');
    this.healer = new SkyWarsMode(data, 'kit_mega_mega_healer');
    this.skeletor = new SkyWarsMode(data, 'kit_mega_mega_skeletor');
    this.enderman = new SkyWarsMode(data, 'kit_mega_mega_enderman');
  }
}

export default SkyWarsMegaKits;
