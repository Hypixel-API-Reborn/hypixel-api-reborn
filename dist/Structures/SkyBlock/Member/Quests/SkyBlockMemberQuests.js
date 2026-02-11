import SkyBlockMemberQuestsHarp from './SkyBlockMemberQuestsHarp.js';
import SkyBlockMemberQuestsTrapper from './SkyBlockMemberQuestsTrapper.js';
class SkyBlockMemberQuests {
    harp;
    trapper;
    constructor(data) {
        this.harp = new SkyBlockMemberQuestsHarp(data?.harp_quest || {});
        this.trapper = new SkyBlockMemberQuestsTrapper(data?.trapper_quest || {});
    }
}
export default SkyBlockMemberQuests;
//# sourceMappingURL=SkyBlockMemberQuests.js.map