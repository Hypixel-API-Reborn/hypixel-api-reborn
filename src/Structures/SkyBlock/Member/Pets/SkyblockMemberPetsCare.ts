import type { SacrificedPets } from '../../../../Types/Skyblock.js';

class SkyblockMemberPetsCare {
  coinsSpent: number;
  petsSacrificed: SacrificedPets[];
  constructor(data: Record<string, any>) {
    this.coinsSpent = data?.coins_spent || 0;
    this.petsSacrificed = data?.pet_types_sacrificed || [];
  }
}

export default SkyblockMemberPetsCare;
