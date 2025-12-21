import BaseSkyWarsMode from '../../../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsSoloKitsLabBasic {
  default: BaseSkyWarsMode;
  scout: BaseSkyWarsMode;
  ecologist: BaseSkyWarsMode;
  speleologist: BaseSkyWarsMode;
  armorsmith: BaseSkyWarsMode;
  energix: BaseSkyWarsMode;
  baseballPlayer: BaseSkyWarsMode;
  disco: BaseSkyWarsMode;
  pharaoh: BaseSkyWarsMode;
  frog: BaseSkyWarsMode;
  grenade: BaseSkyWarsMode;
  fisherman: BaseSkyWarsMode;
  rookie: BaseSkyWarsMode;
  troll: BaseSkyWarsMode;
  snowman: BaseSkyWarsMode;
  princess: BaseSkyWarsMode;
  batguy: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.default = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_default');
    this.scout = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_scout');
    this.ecologist = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_ecologist');
    this.speleologist = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_speleologist');
    this.armorsmith = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_armorsmith');
    this.energix = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_energix');
    this.baseballPlayer = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_baseball-player');
    this.disco = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_disco');
    this.pharaoh = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_pharaoh');
    this.frog = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_frog');
    this.grenade = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_grenade');
    this.fisherman = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_fisherman');
    this.rookie = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_rookie');
    this.troll = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_troll');
    this.snowman = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_snowman');
    this.princess = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_princess');
    this.batguy = new BaseSkyWarsMode(data, 'lab_kit_basic_solo_batguy');
  }
}

export default SkyWarsSoloKitsLabBasic;
