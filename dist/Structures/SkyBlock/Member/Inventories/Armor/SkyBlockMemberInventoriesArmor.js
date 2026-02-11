import SkyBlockMemberInventoriesArmorDecoded from './SkyBlockMemberInventoriesArmorDecoded.js';
import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.js';
import { decode } from '../../../../../Utils/SkyBlockUtils.js';
class SkyBlockMemberInventoriesArmor extends SkyBlockMemberInventoriesBaseInventory {
    async decodeData() {
        if (undefined === this.base64 || this.base64 === null)
            return null;
        const decoded = await decode(this.base64);
        return new SkyBlockMemberInventoriesArmorDecoded(decoded);
    }
}
export default SkyBlockMemberInventoriesArmor;
//# sourceMappingURL=SkyBlockMemberInventoriesArmor.js.map