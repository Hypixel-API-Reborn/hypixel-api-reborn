import SkyBlockPotionEffect from '../../Potion/SkyblockPotionEffect.js';
import TicksToMilliseconds from '../../../../Utils/TicksToMilliseconds.js';

class SkyBlockMemberPlayerDataActiveEffect extends SkyBlockPotionEffect {
  expireAt: Date;
  expireTimestamp: number;
  constructor(data: Record<string, any>) {
    super(data);
    this.durationTicks = data?.ticks_remaining || 0;
    this.duration = TicksToMilliseconds(this.durationTicks);
    this.expireAt = new Date(new Date().getTime() + this.duration);
    this.expireTimestamp = this.expireAt.getTime();
  }
}

export default SkyBlockMemberPlayerDataActiveEffect;
