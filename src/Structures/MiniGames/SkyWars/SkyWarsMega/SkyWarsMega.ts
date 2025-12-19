import SkyWarsMegaKits from './SkyWarsMegaKits.ts';
import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsModePerk from '../SkyWarsMode/SkyWarsModePerk.js';

class SkyWarsMega extends SkyWarsMode {
  doubles: SkyWarsMode;
  doublesNormal: SkyWarsMode;
  normal: SkyWarsMode;
  kits: SkyWarsMegaKits;
  rusher: SkyWarsModePerk;
  miningExpertise: SkyWarsModePerk;
  enderMastery: SkyWarsModePerk;
  blazingArrows: SkyWarsModePerk;
  arrowRecovery: SkyWarsModePerk;
  juggernaut: SkyWarsModePerk;
  tank: SkyWarsModePerk;
  nourishment: SkyWarsModePerk;
  notoriety: SkyWarsModePerk;
  instantSmelting: SkyWarsModePerk;
  marksmanship: SkyWarsModePerk;
  environmentalExpert: SkyWarsModePerk;
  bridger: SkyWarsModePerk;
  luckyCharm: SkyWarsModePerk;
  blackMagic: SkyWarsModePerk;
  necromancer: SkyWarsModePerk;
  telekinesis: SkyWarsModePerk;
  constructor(data: Record<string, any>) {
    super(data, 'mega');
    this.doubles = new SkyWarsMode(data, 'mega_doubles');
    this.doublesNormal = new SkyWarsMode(data, 'mega_doubles_normal');
    this.normal = new SkyWarsMode(data, 'mega_normal');
    this.kits = new SkyWarsMegaKits(data);
    this.rusher = new SkyWarsModePerk(data, 'rusher', 'mega');
    this.miningExpertise = new SkyWarsModePerk(data, 'mining_expertise', 'mega');
    this.enderMastery = new SkyWarsModePerk(data, 'ender_mastery', 'mega');
    this.blazingArrows = new SkyWarsModePerk(data, 'blazing_arrows', 'mega');
    this.arrowRecovery = new SkyWarsModePerk(data, 'arrow_recovery', 'mega');
    this.juggernaut = new SkyWarsModePerk(data, 'juggernaut', 'mega');
    this.tank = new SkyWarsModePerk(data, 'tank', 'mega');
    this.nourishment = new SkyWarsModePerk(data, 'nourishment', 'mega');
    this.notoriety = new SkyWarsModePerk(data, 'notoriety', 'mega');
    this.instantSmelting = new SkyWarsModePerk(data, 'instant_smelting', 'mega');
    this.marksmanship = new SkyWarsModePerk(data, 'marksmanship', 'mega');
    this.environmentalExpert = new SkyWarsModePerk(data, 'environmental_expert', 'mega');
    this.bridger = new SkyWarsModePerk(data, 'bridger', 'mega');
    this.luckyCharm = new SkyWarsModePerk(data, 'lucky_charm', 'mega');
    this.blackMagic = new SkyWarsModePerk(data, 'black_magic', 'mega');
    this.necromancer = new SkyWarsModePerk(data, 'necromancer', 'mega');
    this.telekinesis = new SkyWarsModePerk(data, 'telekinesis', 'mega');
  }
}

export default SkyWarsMega;
