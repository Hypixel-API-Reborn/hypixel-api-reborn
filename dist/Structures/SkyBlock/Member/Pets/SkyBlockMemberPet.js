import { getPetLevel } from '../../../../Utils/SkyBlockUtils.js';
class SkyBlockMemberPet {
    uuid;
    uniqueId;
    type;
    active;
    tier;
    heldItem;
    candyUsed;
    skin;
    level;
    constructor(data) {
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
    toString() {
        return this.type;
    }
}
export default SkyBlockMemberPet;
//# sourceMappingURL=SkyBlockMemberPet.js.map