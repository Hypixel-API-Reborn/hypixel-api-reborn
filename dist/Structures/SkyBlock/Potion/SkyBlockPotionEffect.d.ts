import type { SkyBlockPotionEffectName } from '../../../Types/SkyBlock.js';
declare class SkyBlockPotionEffect {
    effect: SkyBlockPotionEffectName | 'UNKNOWN';
    level: number;
    modifiers: {
        key: string;
        amp: number;
    }[];
    durationTicks: number;
    duration: number;
    infinite: boolean;
    constructor(data: Record<string, any>);
    toString(): SkyBlockPotionEffectName | 'UNKNOWN';
}
export default SkyBlockPotionEffect;
//# sourceMappingURL=SkyBlockPotionEffect.d.ts.map