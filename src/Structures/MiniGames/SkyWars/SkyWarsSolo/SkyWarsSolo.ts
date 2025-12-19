import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsModePerk from '../SkyWarsMode/SkyWarsModePerk.ts';
import SkyWarsSoloKits from './SkyWarsSoloKits/SkyWarsSoloKits.js';

class SkyWarsSolo extends SkyWarsMode {
  normal: SkyWarsMode;
  insane: SkyWarsMode;
  lab: SkyWarsMode;
  kits: SkyWarsSoloKits;
  enderMastery: SkyWarsModePerk;
  arrowRecovery: SkyWarsModePerk;
  miningExpertise: SkyWarsModePerk;
  blazingArrows: SkyWarsModePerk;
  instantSmelting: SkyWarsModePerk;
  resistanceBoost: SkyWarsModePerk;
  speedBoost: SkyWarsModePerk;
  bulldozer: SkyWarsModePerk;
  marksmanship: SkyWarsModePerk;
  juggernaut: SkyWarsModePerk;
  knowledge: SkyWarsModePerk;
  fat: SkyWarsModePerk;
  nourishment: SkyWarsModePerk;
  annoy: SkyWarsModePerk;
  revenge: SkyWarsModePerk;
  luckyCharm: SkyWarsModePerk;
  bridger: SkyWarsModePerk;
  environmentalExpert: SkyWarsModePerk;
  necromancer: SkyWarsModePerk;
  blackMagic: SkyWarsModePerk;
  robbery: SkyWarsModePerk;
  frost: SkyWarsModePerk;
  barbarian: SkyWarsModePerk;
  savior: SkyWarsModePerk;
  constructor(data: Record<string, any>) {
    super(data, 'solo');
    this.normal = new SkyWarsMode(data, 'solo_normal');
    this.insane = new SkyWarsMode(data, 'solo_insane');
    this.lab = new SkyWarsMode(data, 'lab_solo');
    this.kits = new SkyWarsSoloKits(data);
    this.enderMastery = new SkyWarsModePerk(data, 'ender_mastery', 'solo');
    this.arrowRecovery = new SkyWarsModePerk(data, 'arrow_recovery', 'solo');
    this.miningExpertise = new SkyWarsModePerk(data, 'mining_expertise', 'solo');
    this.blazingArrows = new SkyWarsModePerk(data, 'blazing_arrows', 'solo');
    this.instantSmelting = new SkyWarsModePerk(data, 'instant_smelting', 'solo');
    this.resistanceBoost = new SkyWarsModePerk(data, 'resistance_boost', 'solo');
    this.speedBoost = new SkyWarsModePerk(data, 'speed_boost', 'solo');
    this.bulldozer = new SkyWarsModePerk(data, 'bulldozer', 'solo');
    this.marksmanship = new SkyWarsModePerk(data, 'marksmanship', 'solo');
    this.juggernaut = new SkyWarsModePerk(data, 'juggernaut', 'solo');
    this.knowledge = new SkyWarsModePerk(data, 'knowledge', 'solo');
    this.fat = new SkyWarsModePerk(data, 'fat', 'solo');
    this.nourishment = new SkyWarsModePerk(data, 'nourishment', 'solo');
    this.annoy = new SkyWarsModePerk(data, 'annoy', 'solo');
    this.revenge = new SkyWarsModePerk(data, 'revenge', 'solo');
    this.luckyCharm = new SkyWarsModePerk(data, 'lucky_charm', 'solo');
    this.bridger = new SkyWarsModePerk(data, 'bridger', 'solo');
    this.environmentalExpert = new SkyWarsModePerk(data, 'environmental_expert', 'solo');
    this.necromancer = new SkyWarsModePerk(data, 'necromancer', 'solo');
    this.blackMagic = new SkyWarsModePerk(data, 'black_magic', 'solo');
    this.robbery = new SkyWarsModePerk(data, 'robbery', 'solo');
    this.frost = new SkyWarsModePerk(data, 'frost', 'solo');
    this.barbarian = new SkyWarsModePerk(data, 'barbarian', 'solo');
    this.savior = new SkyWarsModePerk(data, 'savior', 'solo');
  }
}

export default SkyWarsSolo;
