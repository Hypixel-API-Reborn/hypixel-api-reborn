import SkyBlockMemberPet from './SkyBlockMemberPet.js';
import SkyBlockMemberPetsAutoPets from './SkyBlockMemberPetsAutoPets.js';
import SkyBlockMemberPetsCare from './SkyBlockMemberPetsCare.js';
declare class SkyBlockMemberPets {
    petCare: SkyBlockMemberPetsCare;
    autoPetRules: SkyBlockMemberPetsAutoPets;
    pets: SkyBlockMemberPet[];
    oresMined: number;
    seaCreaturesKilled: number;
    totalExpGained: number;
    constructor(data: Record<string, any>);
    getPetScore(): number;
}
export default SkyBlockMemberPets;
//# sourceMappingURL=SkyBlockMemberPets.d.ts.map