import BaseSkyWarsMode from "../../../SkyWarsMode/BaseSkyWarsMode.js";
import SkyWarsSoloKitsLabAdvanced from "./SkyWarsSoloKitsLabAdvanced.js";
import SkyWarsSoloKitsLabBasic from './SkyWarsSoloKitsLabBasic.js';
class SkyWarsSoloKitsLab {
    basic;
    advanced;
    enderChest;
    constructor(data) {
        this.basic = new SkyWarsSoloKitsLabBasic(data);
        this.advanced = new SkyWarsSoloKitsLabAdvanced(data);
        this.enderChest = new BaseSkyWarsMode(data, 'lab_kit_enderchest_solo_enderchest');
    }
}
export default SkyWarsSoloKitsLab;
//# sourceMappingURL=SkyWarsSoloKitsLab.js.map