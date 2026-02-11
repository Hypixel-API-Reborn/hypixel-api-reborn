import SkyBlockPotionEffect from '../../Potion/SkyBlockPotionEffect.js';
import TicksToMilliseconds from '../../../../Utils/TicksToMilliseconds.js';
class SkyBlockMemberPlayerDataActiveEffect extends SkyBlockPotionEffect {
    expireAt;
    expireTimestamp;
    constructor(data) {
        super(data);
        this.durationTicks = data?.ticks_remaining || 0;
        this.duration = TicksToMilliseconds(this.durationTicks);
        this.expireAt = new Date(new Date().getTime() + this.duration);
        this.expireTimestamp = this.expireAt.getTime();
    }
}
export default SkyBlockMemberPlayerDataActiveEffect;
//# sourceMappingURL=SkyBlockMemberPlayerDataActiveEffect.js.map