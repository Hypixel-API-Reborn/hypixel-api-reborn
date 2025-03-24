import SkyblockMemberPet from '../Pets/SkyblockMemberPet.js';

class SkyblockMemberRiftDeadCats {
  talkedToJacquelle: boolean;
  pickedUpDetector: boolean;
  foundCats: string[];
  unlockedPet: boolean;
  montezuma: SkyblockMemberPet;
  constructor(data: Record<string, any>) {
    this.talkedToJacquelle = data?.talked_to_jacquelle || false;
    this.pickedUpDetector = data?.picked_up_detector || false;
    this.foundCats = data?.found_cats || [];
    this.unlockedPet = data?.unlocked_pet || false;
    this.montezuma = new SkyblockMemberPet(data?.montezuma || {});
  }
}

export default SkyblockMemberRiftDeadCats;
