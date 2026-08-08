import type SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type { LevelData, PetLevelData, Rarity, SkillLevelData, SkyBlockPetId, SkyBlockSlayer, SkyBlockXPTable, SkyblockProfileWithMe } from '../Types/SkyBlock.js';
export declare function decode(base64: any, isBuffer?: boolean): Promise<any[]>;
export declare function getPetLevel(petExp: number, type: SkyBlockPetId | 'UNKNOWN', rarity: Rarity | 'UNKNOWN'): PetLevelData;
export declare function getSlayerLevel(slayer: SkyBlockSlayer, xp: number): LevelData;
export declare function getXpTable(type: SkyBlockXPTable): Record<number, number>;
export type Extra = {
    type: SkyBlockXPTable;
    cap?: number;
};
export declare function getLevelByXp(xp: number, extra?: Extra): SkillLevelData;
export declare function SkyBlockProfileHasMe(profile: SkyBlockProfile): profile is SkyblockProfileWithMe;
//# sourceMappingURL=skyBlockUtils.d.ts.map