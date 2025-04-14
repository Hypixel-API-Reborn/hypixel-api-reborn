import type { SacrificedPets } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberPetsCare {
  coinsSpent: number;
  petsSacrificed: SacrificedPets[];
  constructor(data: Record<string, any>) {
    this.coinsSpent = data?.coins_spent || 0;
    this.petsSacrificed = data?.pet_types_sacrificed || [];
  }

  toString(): number {
    return this.coinsSpent;
  }
}

export default SkyBlockMemberPetsCare;
