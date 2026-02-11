import SkyBlockMemberInventoriesBaseInventory from '../SkyBlockMemberInventoriesBaseInventory.js';
import SkyBlockMemberInventoriesInventoryDecoded from './SkyBlockMemberInventoriesInventoryDecoded.js';
import { decode } from '../../../../../Utils/SkyBlockUtils.js';
class SkyBlockMemberInventoriesInventory extends SkyBlockMemberInventoriesBaseInventory {
    async decodeData() {
        if (undefined === this.base64 || this.base64 === null)
            return null;
        const decoded = await decode(this.base64);
        return new SkyBlockMemberInventoriesInventoryDecoded(decoded);
    }
}
export default SkyBlockMemberInventoriesInventory;
//# sourceMappingURL=SkyBlockMemberInventoriesInventory.js.map