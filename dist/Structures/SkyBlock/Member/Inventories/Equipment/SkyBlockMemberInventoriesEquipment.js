import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.js';
import SkyBlockMemberInventoriesEquipmentDecoded from './SkyBlockMemberInventoriesEquipmentDecoded.js';
import { decode } from '../../../../../Utils/SkyBlockUtils.js';
class SkyBlockMemberInventoriesEquipment extends SkyBlockMemberInventoriesBaseInventory {
    async decodeData() {
        if (undefined === this.base64 || this.base64 === null)
            return null;
        const decoded = await decode(this.base64);
        return new SkyBlockMemberInventoriesEquipmentDecoded(decoded);
    }
}
export default SkyBlockMemberInventoriesEquipment;
//# sourceMappingURL=SkyBlockMemberInventoriesEquipment.js.map