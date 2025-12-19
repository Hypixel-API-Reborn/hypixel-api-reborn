import SkyWarsMode from '../../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsSoloKitsLabBasic {
  default: SkyWarsMode;
  scout: SkyWarsMode;
  ecologist: SkyWarsMode;
  speleologist: SkyWarsMode;
  armorsmith: SkyWarsMode;
  energix: SkyWarsMode;
  baseballPlayer: SkyWarsMode;
  disco: SkyWarsMode;
  pharaoh: SkyWarsMode;
  frog: SkyWarsMode;
  grenade: SkyWarsMode;
  fisherman: SkyWarsMode;
  rookie: SkyWarsMode;
  troll: SkyWarsMode;
  snowman: SkyWarsMode;
  princess: SkyWarsMode;
  batguy: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.default = new SkyWarsMode(data, 'lab_kit_basic_solo_default');
    this.scout = new SkyWarsMode(data, 'lab_kit_basic_solo_scout');
    this.ecologist = new SkyWarsMode(data, 'lab_kit_basic_solo_ecologist');
    this.speleologist = new SkyWarsMode(data, 'lab_kit_basic_solo_speleologist');
    this.armorsmith = new SkyWarsMode(data, 'lab_kit_basic_solo_armorsmith');
    this.energix = new SkyWarsMode(data, 'lab_kit_basic_solo_energix');
    this.baseballPlayer = new SkyWarsMode(data, 'lab_kit_basic_solo_baseball-player');
    this.disco = new SkyWarsMode(data, 'lab_kit_basic_solo_disco');
    this.pharaoh = new SkyWarsMode(data, 'lab_kit_basic_solo_pharaoh');
    this.frog = new SkyWarsMode(data, 'lab_kit_basic_solo_frog');
    this.grenade = new SkyWarsMode(data, 'lab_kit_basic_solo_grenade');
    this.fisherman = new SkyWarsMode(data, 'lab_kit_basic_solo_fisherman');
    this.rookie = new SkyWarsMode(data, 'lab_kit_basic_solo_rookie');
    this.troll = new SkyWarsMode(data, 'lab_kit_basic_solo_troll');
    this.snowman = new SkyWarsMode(data, 'lab_kit_basic_solo_snowman');
    this.princess = new SkyWarsMode(data, 'lab_kit_basic_solo_princess');
    this.batguy = new SkyWarsMode(data, 'lab_kit_basic_solo_batguy');
  }
}

export default SkyWarsSoloKitsLabBasic;
