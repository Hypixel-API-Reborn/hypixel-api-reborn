import { getPetLevel } from '../../../../Utils/SkyblockUtils.js';
import type { LevelData, Rarity, SkyblockPetId } from '../../../../Types/Skyblock.js';
import type { UUID } from '../../../../Types/Global.js';

class SkyblockMemberPet {
  uuid: UUID;
  uniqueId: string;
  type: SkyblockPetId | 'UNKNOWN';
  active: boolean;
  tier: Rarity | 'UNKNOWN';
  heldItem: string | null;
  candyUsed: number;
  skin: string | null;
  level: LevelData;
  constructor(data: Record<string, any>) {
    this.uuid = data?.uuid || 'UNKNOWN';
    this.uniqueId = data?.uniqueId || 'UNKNOWN';
    this.type = data?.type || 'UNKNOWN';
    this.active = data?.active || false;
    this.tier = data?.tier || 'UNKNOWN';
    this.heldItem = data?.heldItem || null;
    this.candyUsed = data?.candyUsed || 0;
    this.skin = data?.skin || null;
    this.level = getPetLevel(data?.exp || 0, this.type, this.tier);
  }

  toString(): number {
    return this.level.level;
  }
}

export default SkyblockMemberPet;
