import SkyBlockMemberInventoriesBackpackDecoded from './SkyBlockMemberInventoriesBackpackDecoded.js';
import { decode } from '../../../../../Utils/SkyBlockUtils.js';
class SkyBlockMemberInventoriesBackpack {
    backpackItemBase64;
    backpackContentsBase64;
    constructor(data, slot) {
        this.backpackItemBase64 = data?.backpackIcons?.[slot]?.data || 'UNKNOWN';
        this.backpackContentsBase64 = data?.backpackContents?.[slot]?.data || 'UNKNOWN';
    }
    async decodeData() {
        if (undefined === this.backpackItemBase64 || this.backpackItemBase64 === null)
            return null;
        if (undefined === this.backpackContentsBase64 || this.backpackContentsBase64 === null)
            return null;
        const backpackIconDecoded = await decode(this.backpackItemBase64);
        const backpackItemsDecoded = await decode(this.backpackContentsBase64);
        return new SkyBlockMemberInventoriesBackpackDecoded({ backpackIconDecoded, backpackItemsDecoded });
    }
}
export default SkyBlockMemberInventoriesBackpack;
//# sourceMappingURL=SkyBlockMemberInventoriesBackpack.js.map