import TicksToMilliseconds from '../../../../Utils/TicksToMilliseconds.js';
import type { SkyBlockPotionEffect } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberPlayerDataActiveEffect {
  effect: SkyBlockPotionEffect | 'UNKNOWN';
  level: number;
  modifiers: { key: string; amp: number }[];
  ticksRemaining: number;
  expireAt: Date;
  expireTimestamp: number;
  infinite: boolean;
  constructor(data: Record<string, any>) {
    this.effect = data?.effect || 'UNKNOWN';
    this.level = data?.level || 0;
    this.modifiers = data?.modifiers || [];
    this.ticksRemaining = data?.ticks_remaining || 0;
    this.expireAt = new Date(new Date().getTime() + TicksToMilliseconds(this.ticksRemaining));
    this.expireTimestamp = this.expireAt.getTime();
    this.infinite = data?.infinite || false;
  }

  toString(): SkyBlockPotionEffect | 'UNKNOWN' {
    return this.effect;
  }
}

export default SkyBlockMemberPlayerDataActiveEffect;
