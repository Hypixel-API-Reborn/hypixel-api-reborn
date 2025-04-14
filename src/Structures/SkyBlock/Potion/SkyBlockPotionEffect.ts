import TicksToMilliseconds from '../../../Utils/TicksToMilliseconds.js';
import type { SkyBlockPotionEffectName } from '../../../Types/SkyBlock.js';

class SkyBlockPotionEffect {
  effect: SkyBlockPotionEffectName | 'UNKNOWN';
  level: number;
  modifiers: { key: string; amp: number }[];
  durationTicks: number;
  duration: number;
  infinite: boolean;
  constructor(data: Record<string, any>) {
    this.effect = data?.effect || 'UNKNOWN';
    this.level = data?.level || 0;
    this.modifiers = data?.modifiers || [];
    this.durationTicks = data?.duration_ticks;
    this.duration = TicksToMilliseconds(this.durationTicks);
    this.infinite = data?.infinite || false;
  }

  toString(): SkyBlockPotionEffectName | 'UNKNOWN' {
    return this.effect;
  }
}

export default SkyBlockPotionEffect;
