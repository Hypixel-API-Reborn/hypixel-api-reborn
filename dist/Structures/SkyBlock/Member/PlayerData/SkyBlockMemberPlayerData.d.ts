import SkyBlockMemberPlayerDataActiveEffect from './SkyBlockMemberPlayerDataActiveEffect.js';
import SkyBlockMemberPlayerDataMinions from './SkyBlockMemberPlayerDataMinions.js';
import SkyBlockMemberPlayerDataSkills from './SkyBlockMemberPlayerDataSkills.js';
import type { SkyBlockArea, SkyBlockPotionEffectName } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberPlayerData {
    activeEffects: SkyBlockMemberPlayerDataActiveEffect[];
    pausedEffects: SkyBlockPotionEffectName[];
    disabledPotionEffects: SkyBlockPotionEffectName[];
    reaperPeppersEaten: number;
    deaths: number;
    lastDeath: number;
    visitedZones: string[];
    visitedModes: SkyBlockArea[];
    achievementSpawnedIslandTypes: string[];
    unlockedCollTiers: string[];
    perks: Record<string, number>;
    minions: SkyBlockMemberPlayerDataMinions;
    fastestTargetPractice: number;
    fishingTreasureCaught: number;
    skills: SkyBlockMemberPlayerDataSkills;
    constructor(data: Record<string, any>, skillCaps: {
        farmingCap: number;
        tamingCap: number;
    });
}
export default SkyBlockMemberPlayerData;
//# sourceMappingURL=SkyBlockMemberPlayerData.d.ts.map