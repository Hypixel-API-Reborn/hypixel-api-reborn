import BaseSkyWarsMode from '../../../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsSoloKitsTourneyBasic {
  frog: BaseSkyWarsMode;
  disco: BaseSkyWarsMode;
  armorsmith: BaseSkyWarsMode;
  fisherman: BaseSkyWarsMode;
  pharaoh: BaseSkyWarsMode;
  ecologist: BaseSkyWarsMode;
  healer: BaseSkyWarsMode;
  energix: BaseSkyWarsMode;
  speleologist: BaseSkyWarsMode;
  cactus: BaseSkyWarsMode;
  rookie: BaseSkyWarsMode;
  baseballPlayer: BaseSkyWarsMode;
  default: BaseSkyWarsMode;
  scout: BaseSkyWarsMode;
  snowman: BaseSkyWarsMode;
  princess: BaseSkyWarsMode;
  grenade: BaseSkyWarsMode;
  troll: BaseSkyWarsMode;
  warlock: BaseSkyWarsMode;
  batguy: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.frog = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_frog');
    this.disco = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_disco');
    this.armorsmith = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_armorsmith');
    this.fisherman = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_fisherman');
    this.pharaoh = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_pharaoh');
    this.ecologist = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_ecologist');
    this.healer = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_healer');
    this.energix = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_energix');
    this.speleologist = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_speleologist');
    this.cactus = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_cactus');
    this.rookie = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_rookie');
    this.baseballPlayer = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_baseball-player');
    this.default = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_default');
    this.scout = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_scout');
    this.snowman = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_snowman');
    this.princess = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_princess');
    this.grenade = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_grenade');
    this.troll = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_troll');
    this.warlock = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_warlock');
    this.batguy = new BaseSkyWarsMode(data, 'tourney_kit_basic_solo_batguy');
  }
}

export default SkyWarsSoloKitsTourneyBasic;
