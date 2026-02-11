import TicksToMilliseconds from '../../../Utils/TicksToMilliseconds.js';
class SkyBlockPotionEffect {
    effect;
    level;
    modifiers;
    durationTicks;
    duration;
    infinite;
    constructor(data) {
        this.effect = data?.effect || 'UNKNOWN';
        this.level = data?.level || 0;
        this.modifiers = data?.modifiers || [];
        this.durationTicks = data?.duration_ticks || 0;
        this.duration = TicksToMilliseconds(this.durationTicks);
        this.infinite = data?.infinite || false;
    }
    toString() {
        return this.effect;
    }
}
export default SkyBlockPotionEffect;
//# sourceMappingURL=SkyBlockPotionEffect.js.map