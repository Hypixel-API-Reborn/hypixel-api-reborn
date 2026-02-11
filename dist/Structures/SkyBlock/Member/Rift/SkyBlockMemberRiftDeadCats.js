import SkyBlockMemberPet from '../Pets/SkyBlockMemberPet.js';
class SkyBlockMemberRiftDeadCats {
    talkedToJacquelle;
    pickedUpDetector;
    foundCats;
    unlockedPet;
    montezuma;
    constructor(data) {
        this.talkedToJacquelle = data?.talked_to_jacquelle || false;
        this.pickedUpDetector = data?.picked_up_detector || false;
        this.foundCats = data?.found_cats || [];
        this.unlockedPet = data?.unlocked_pet || false;
        this.montezuma = new SkyBlockMemberPet(data?.montezuma || {});
    }
}
export default SkyBlockMemberRiftDeadCats;
//# sourceMappingURL=SkyBlockMemberRiftDeadCats.js.map