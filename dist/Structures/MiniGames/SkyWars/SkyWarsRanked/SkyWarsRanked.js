import BaseSkyWarsMode from "../SkyWarsMode/BaseSkyWarsMode.js";
import SkyWarsRankedKits from "./SkyWarsRankedKits.js";
class SkyWarsRanked extends BaseSkyWarsMode {
    normal;
    kits;
    constructor(data) {
        super(data, 'ranked');
        this.normal = new BaseSkyWarsMode(data, 'ranked_normal');
        this.kits = new SkyWarsRankedKits(data);
    }
}
export default SkyWarsRanked;
//# sourceMappingURL=SkyWarsRanked.js.map