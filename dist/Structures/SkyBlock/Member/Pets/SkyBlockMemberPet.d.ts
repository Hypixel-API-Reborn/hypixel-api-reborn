import type { LevelData, Rarity, SkyBlockPetId } from '../../../../Types/SkyBlock.js';
import type { UUID } from '../../../../Types/Global.js';
declare class SkyBlockMemberPet {
    uuid: UUID;
    uniqueId: string;
    type: SkyBlockPetId | 'UNKNOWN';
    active: boolean;
    tier: Rarity | 'UNKNOWN';
    heldItem: string | null;
    candyUsed: number;
    skin: string | null;
    level: LevelData;
    constructor(data: Record<string, any>);
    toString(): SkyBlockPetId | 'UNKNOWN';
}
export default SkyBlockMemberPet;
//# sourceMappingURL=SkyBlockMemberPet.d.ts.map