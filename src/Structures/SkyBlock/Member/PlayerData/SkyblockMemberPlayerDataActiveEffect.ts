import TicksToMilliseconds from '../../../../Utils/TicksToMilliseconds.js';
import type { SkyblockPotionEffect } from '../../../../Types/Skyblock.js';

class SkyblockMemberPlayerDataActiveEffect {
  effect: SkyblockPotionEffect | 'UNKNOWN';
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
}

export default SkyblockMemberPlayerDataActiveEffect;
