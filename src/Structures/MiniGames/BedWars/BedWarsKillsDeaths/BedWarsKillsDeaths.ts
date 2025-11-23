import BedWarsKillsDeathsType from './BedWarsKillsDeathsType.js';
import type { BedWarsModeId } from '../../../../Types/Player.js';

class BedWarsKillsDeaths {
  total: BedWarsKillsDeathsType;
  custom: BedWarsKillsDeathsType;
  drowning: BedWarsKillsDeathsType;
  entityAttack: BedWarsKillsDeathsType;
  entityExplosion: BedWarsKillsDeathsType;
  fall: BedWarsKillsDeathsType;
  fire: BedWarsKillsDeathsType;
  fireTick: BedWarsKillsDeathsType;
  magic: BedWarsKillsDeathsType;
  projectile: BedWarsKillsDeathsType;
  suffocation: BedWarsKillsDeathsType;
  void: BedWarsKillsDeathsType;
  fallingBlock: BedWarsKillsDeathsType;
  lava: BedWarsKillsDeathsType;
  contact: BedWarsKillsDeathsType;
  thorns: BedWarsKillsDeathsType;
  wither: BedWarsKillsDeathsType;
  blockExplosion: BedWarsKillsDeathsType;
  constructor(data: Record<string, any>, mode?: BedWarsModeId, finals?: boolean) {
    this.total = new BedWarsKillsDeathsType(data, '', mode, finals);
    this.custom = new BedWarsKillsDeathsType(data, 'custom', mode, finals);
    this.drowning = new BedWarsKillsDeathsType(data, 'drowning', mode, finals);
    this.entityAttack = new BedWarsKillsDeathsType(data, 'entity_attack', mode, finals);
    this.entityExplosion = new BedWarsKillsDeathsType(data, 'entity_explosion', mode, finals);
    this.fall = new BedWarsKillsDeathsType(data, 'fall', mode, finals);
    this.fire = new BedWarsKillsDeathsType(data, 'fire', mode, finals);
    this.fireTick = new BedWarsKillsDeathsType(data, 'fire_tick', mode, finals);
    this.magic = new BedWarsKillsDeathsType(data, 'magic', mode, finals);
    this.projectile = new BedWarsKillsDeathsType(data, 'projectile', mode, finals);
    this.suffocation = new BedWarsKillsDeathsType(data, 'suffocation', mode, finals);
    this.void = new BedWarsKillsDeathsType(data, 'void', mode, finals);
    this.fallingBlock = new BedWarsKillsDeathsType(data, 'falling_block', mode, finals);
    this.lava = new BedWarsKillsDeathsType(data, 'lava', mode, finals);
    this.contact = new BedWarsKillsDeathsType(data, 'contact', mode, finals);
    this.thorns = new BedWarsKillsDeathsType(data, 'thorns', mode, finals);
    this.wither = new BedWarsKillsDeathsType(data, 'wither', mode, finals);
    this.blockExplosion = new BedWarsKillsDeathsType(data, 'block_explosion', mode, finals);
  }
}

export default BedWarsKillsDeaths;
