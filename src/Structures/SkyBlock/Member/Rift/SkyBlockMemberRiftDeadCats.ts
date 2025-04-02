import SkyBlockMemberPet from '../Pets/SkyBlockMemberPet.js';

class SkyBlockMemberRiftDeadCats {
  talkedToJacquelle: boolean;
  pickedUpDetector: boolean;
  foundCats: string[];
  unlockedPet: boolean;
  montezuma: SkyBlockMemberPet;
  constructor(data: Record<string, any>) {
    this.talkedToJacquelle = data?.talked_to_jacquelle || false;
    this.pickedUpDetector = data?.picked_up_detector || false;
    this.foundCats = data?.found_cats || [];
    this.unlockedPet = data?.unlocked_pet || false;
    this.montezuma = new SkyBlockMemberPet(data?.montezuma || {});
  }
}

export default SkyBlockMemberRiftDeadCats;
