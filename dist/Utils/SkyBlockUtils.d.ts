import type SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type { LevelData, PetLevelData, Rarity, SkillLevelData, SkyBlockPetId, SkyBlockSlayer, SkyBlockXPTables, SkyHelperNetWorthProfile } from '../Types/SkyBlock.js';
export declare function decode(base64: any, isBuffer?: boolean): Promise<any[]>;
export declare function getPetLevel(petExp: number, type: SkyBlockPetId | 'UNKNOWN', rarity: Rarity | 'UNKNOWN'): PetLevelData;
export declare function getSlayerLevel(slayer: SkyBlockSlayer, xp: number): LevelData;
export type Extra = {
    type: SkyBlockXPTables;
    cap?: number;
};
export declare function getLevelByXp(xp: number, extra?: Extra): SkillLevelData;
export declare function PrepareSkyBlockProfileForSkyHelperNetworth(profile: SkyBlockProfile & {
    me: NonNullable<SkyBlockProfile['me']>;
}): SkyHelperNetWorthProfile;
//# sourceMappingURL=SkyBlockUtils.d.ts.map