import SkyWarsMode from '../../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsSoloKitsTourneyBasic {
  frog: SkyWarsMode;
  disco: SkyWarsMode;
  armorsmith: SkyWarsMode;
  fisherman: SkyWarsMode;
  pharaoh: SkyWarsMode;
  ecologist: SkyWarsMode;
  healer: SkyWarsMode;
  energix: SkyWarsMode;
  speleologist: SkyWarsMode;
  cactus: SkyWarsMode;
  rookie: SkyWarsMode;
  baseballPlayer: SkyWarsMode;
  default: SkyWarsMode;
  scout: SkyWarsMode;
  snowman: SkyWarsMode;
  princess: SkyWarsMode;
  grenade: SkyWarsMode;
  troll: SkyWarsMode;
  warlock: SkyWarsMode;
  batguy: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.frog = new SkyWarsMode(data, 'tourney_kit_basic_solo_frog');
    this.disco = new SkyWarsMode(data, 'tourney_kit_basic_solo_disco');
    this.armorsmith = new SkyWarsMode(data, 'tourney_kit_basic_solo_armorsmith');
    this.fisherman = new SkyWarsMode(data, 'tourney_kit_basic_solo_fisherman');
    this.pharaoh = new SkyWarsMode(data, 'tourney_kit_basic_solo_pharaoh');
    this.ecologist = new SkyWarsMode(data, 'tourney_kit_basic_solo_ecologist');
    this.healer = new SkyWarsMode(data, 'tourney_kit_basic_solo_healer');
    this.energix = new SkyWarsMode(data, 'tourney_kit_basic_solo_energix');
    this.speleologist = new SkyWarsMode(data, 'tourney_kit_basic_solo_speleologist');
    this.cactus = new SkyWarsMode(data, 'tourney_kit_basic_solo_cactus');
    this.rookie = new SkyWarsMode(data, 'tourney_kit_basic_solo_rookie');
    this.baseballPlayer = new SkyWarsMode(data, 'tourney_kit_basic_solo_baseball-player');
    this.default = new SkyWarsMode(data, 'tourney_kit_basic_solo_default');
    this.scout = new SkyWarsMode(data, 'tourney_kit_basic_solo_scout');
    this.snowman = new SkyWarsMode(data, 'tourney_kit_basic_solo_snowman');
    this.princess = new SkyWarsMode(data, 'tourney_kit_basic_solo_princess');
    this.grenade = new SkyWarsMode(data, 'tourney_kit_basic_solo_grenade');
    this.troll = new SkyWarsMode(data, 'tourney_kit_basic_solo_troll');
    this.warlock = new SkyWarsMode(data, 'tourney_kit_basic_solo_warlock');
    this.batguy = new SkyWarsMode(data, 'tourney_kit_basic_solo_batguy');
  }
}

export default SkyWarsSoloKitsTourneyBasic;
