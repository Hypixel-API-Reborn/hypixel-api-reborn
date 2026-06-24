import SkyBlockInventoryItem from "./SkyBlockInventoryItem.js";
import { decode } from "../../../Utils/SkyBlockUtils.js";
class RawSkyBlockInventoryItem {
    base64;
    constructor(data) {
        this.base64 = data?.data || null;
    }
    async decodeData() {
        if (undefined === this.base64 || this.base64 === null)
            return null;
        const decoded = await decode(this.base64);
        return decoded[0]?.id ? new SkyBlockInventoryItem(decoded[0]) : null;
    }
}
export default RawSkyBlockInventoryItem;
//# sourceMappingURL=RawSkyBlockInventoryItem.js.map