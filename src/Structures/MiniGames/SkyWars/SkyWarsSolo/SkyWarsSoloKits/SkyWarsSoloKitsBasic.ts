import SkyWarsMode from '../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsSoloKitsBasic {
  default: SkyWarsMode;
  armorsmith: SkyWarsMode;
  ecologist: SkyWarsMode;
  fisherman: SkyWarsMode;
  speleologist: SkyWarsMode;
  troll: SkyWarsMode;
  snowman: SkyWarsMode;
  rookie: SkyWarsMode;
  scout: SkyWarsMode;
  energix: SkyWarsMode;
  grenade: SkyWarsMode;
  pharaoh: SkyWarsMode;
  disco: SkyWarsMode;
  frog: SkyWarsMode;
  baseballPlayer: SkyWarsMode;
  princess: SkyWarsMode;
  batguy: SkyWarsMode;
  healer: SkyWarsMode;
  cactus: SkyWarsMode;
  warlock: SkyWarsMode;
  archeologist: SkyWarsMode;
  fallenAngel: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.default = new SkyWarsMode(data, 'kit_basic_solo_default');
    this.armorsmith = new SkyWarsMode(data, 'kit_basic_solo_armorsmith');
    this.ecologist = new SkyWarsMode(data, 'kit_basic_solo_ecologist');
    this.fisherman = new SkyWarsMode(data, 'kit_basic_solo_fisherman');
    this.speleologist = new SkyWarsMode(data, 'kit_basic_solo_speleologist');
    this.troll = new SkyWarsMode(data, 'kit_basic_solo_troll');
    this.snowman = new SkyWarsMode(data, 'kit_basic_solo_snowman');
    this.rookie = new SkyWarsMode(data, 'kit_basic_solo_rookie');
    this.scout = new SkyWarsMode(data, 'kit_basic_solo_scout');
    this.energix = new SkyWarsMode(data, 'kit_basic_solo_energix');
    this.grenade = new SkyWarsMode(data, 'kit_basic_solo_grenade');
    this.pharaoh = new SkyWarsMode(data, 'kit_basic_solo_pharaoh');
    this.disco = new SkyWarsMode(data, 'kit_basic_solo_disco');
    this.frog = new SkyWarsMode(data, 'kit_basic_solo_frog');
    this.baseballPlayer = new SkyWarsMode(data, 'kit_basic_solo_baseball-player');
    this.princess = new SkyWarsMode(data, 'kit_basic_solo_princess');
    this.batguy = new SkyWarsMode(data, 'kit_basic_solo_batguy');
    this.healer = new SkyWarsMode(data, 'kit_basic_solo_healer');
    this.cactus = new SkyWarsMode(data, 'kit_basic_solo_cactus');
    this.warlock = new SkyWarsMode(data, 'kit_basic_solo_warlock');
    this.archeologist = new SkyWarsMode(data, 'kit_basic_solo_archeologist');
    this.fallenAngel = new SkyWarsMode(data, 'kit_basic_solo_fallen-angel');
  }
}

export default SkyWarsSoloKitsBasic;
