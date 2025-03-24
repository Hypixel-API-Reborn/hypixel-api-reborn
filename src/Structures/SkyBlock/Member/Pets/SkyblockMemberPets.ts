import SkyblockMemberPet from './SkyblockMemberPet.js';
import SkyblockMemberPetsAutoPets from './SkyblockMemberPetsAutoPets.js';
import SkyblockMemberPetsCare from './SkyblockMemberPetsCare.js';

class SkyblockMemberPets {
  petCare: SkyblockMemberPetsCare;
  autoPetRules: SkyblockMemberPetsAutoPets;
  pets: SkyblockMemberPet[];
  oresMined: number;
  seaCreaturesKilled: number;
  totalExpGained: number;
  constructor(data: Record<string, any>) {
    this.petCare = new SkyblockMemberPetsCare(data?.pet_care || {});
    this.autoPetRules = new SkyblockMemberPetsAutoPets(data?.autopet || {});
    this.pets = (data?.pets || []).map((pet: Record<string, any>) => new SkyblockMemberPet(pet));
    this.oresMined = data?.milestone?.ores_mined;
    this.seaCreaturesKilled = data?.milestone?.sea_creatures_killed;
    this.totalExpGained = data?.total_exp_gained;
  }

  // CREDIT: https://github.com/SkyCryptWebsite/SkyCryptv2/blob/2d4d0317b1f7a9f27e59d25afd4df24c0e49b0da/src/lib/server/stats/pets.ts#L346-L400 (modified)
  getPetScore(): number {
    const RARITIES = [
      'common',
      'uncommon',
      'rare',
      'epic',
      'legendary',
      'mythic',
      'divine',
      'supreme',
      'special',
      'very_special',
      'admin'
    ];
    const highestRarity = {} as Record<string, number>;
    const highestLevel = {} as Record<string, number>;
    for (const pet of this.pets) {
      if ('UNKNOWN' === pet.type) continue;
      if ('UNKNOWN' === pet.tier) continue;

      // ? NOTE: FRACTURED_MONTEZUMA_SOUL is a rift pet so it's not accounted in the calculation
      if ('FRACTURED_MONTEZUMA_SOUL' === pet.type) {
        continue;
      }

      const rarityIndex = RARITIES.indexOf(pet.tier.toLowerCase()) + 1;
      if (rarityIndex > (highestRarity[pet.type] ?? 0)) highestRarity[pet.type] = rarityIndex;

      if (pet.level.level > (highestLevel[pet.type] ?? 0)) {
        if (pet.level.level < pet.level.maxLevel) continue;
        highestLevel[pet.type] = 1;
      }
    }

    const total =
      Object.values(highestRarity).reduce((a, b) => a + b, 0) + Object.values(highestLevel).reduce((a, b) => a + b, 0);
    return total;
  }
}

export default SkyblockMemberPets;
