import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsSoloKitsBasic {
  default: BaseSkyWarsMode;
  armorsmith: BaseSkyWarsMode;
  ecologist: BaseSkyWarsMode;
  fisherman: BaseSkyWarsMode;
  speleologist: BaseSkyWarsMode;
  troll: BaseSkyWarsMode;
  snowman: BaseSkyWarsMode;
  rookie: BaseSkyWarsMode;
  scout: BaseSkyWarsMode;
  energix: BaseSkyWarsMode;
  grenade: BaseSkyWarsMode;
  pharaoh: BaseSkyWarsMode;
  disco: BaseSkyWarsMode;
  frog: BaseSkyWarsMode;
  baseballPlayer: BaseSkyWarsMode;
  princess: BaseSkyWarsMode;
  batguy: BaseSkyWarsMode;
  healer: BaseSkyWarsMode;
  cactus: BaseSkyWarsMode;
  warlock: BaseSkyWarsMode;
  archeologist: BaseSkyWarsMode;
  fallenAngel: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.default = new BaseSkyWarsMode(data, 'kit_basic_solo_default');
    this.armorsmith = new BaseSkyWarsMode(data, 'kit_basic_solo_armorsmith');
    this.ecologist = new BaseSkyWarsMode(data, 'kit_basic_solo_ecologist');
    this.fisherman = new BaseSkyWarsMode(data, 'kit_basic_solo_fisherman');
    this.speleologist = new BaseSkyWarsMode(data, 'kit_basic_solo_speleologist');
    this.troll = new BaseSkyWarsMode(data, 'kit_basic_solo_troll');
    this.snowman = new BaseSkyWarsMode(data, 'kit_basic_solo_snowman');
    this.rookie = new BaseSkyWarsMode(data, 'kit_basic_solo_rookie');
    this.scout = new BaseSkyWarsMode(data, 'kit_basic_solo_scout');
    this.energix = new BaseSkyWarsMode(data, 'kit_basic_solo_energix');
    this.grenade = new BaseSkyWarsMode(data, 'kit_basic_solo_grenade');
    this.pharaoh = new BaseSkyWarsMode(data, 'kit_basic_solo_pharaoh');
    this.disco = new BaseSkyWarsMode(data, 'kit_basic_solo_disco');
    this.frog = new BaseSkyWarsMode(data, 'kit_basic_solo_frog');
    this.baseballPlayer = new BaseSkyWarsMode(data, 'kit_basic_solo_baseball-player');
    this.princess = new BaseSkyWarsMode(data, 'kit_basic_solo_princess');
    this.batguy = new BaseSkyWarsMode(data, 'kit_basic_solo_batguy');
    this.healer = new BaseSkyWarsMode(data, 'kit_basic_solo_healer');
    this.cactus = new BaseSkyWarsMode(data, 'kit_basic_solo_cactus');
    this.warlock = new BaseSkyWarsMode(data, 'kit_basic_solo_warlock');
    this.archeologist = new BaseSkyWarsMode(data, 'kit_basic_solo_archeologist');
    this.fallenAngel = new BaseSkyWarsMode(data, 'kit_basic_solo_fallen-angel');
  }
}

export default SkyWarsSoloKitsBasic;
