import BaseSkyWarsMode from "../../SkyWarsMode/BaseSkyWarsMode.js";
import SkyWarsSoloKitsAdvanced from "./SkyWarsSoloKitsAdvanced.js";
import SkyWarsSoloKitsBasic from "./SkyWarsSoloKitsBasic.js";
import SkyWarsSoloKitsLab from "./SkyWarsSoloKitsLab/SkyWarsSoloKitsLab.js";
import SkyWarsSoloKitsMini from "./SkyWarsSoloKitsMini.js";
import SkyWarsSoloKitsTourney from "./SkyWarsSoloKitsTourney/SkyWarsSoloKitsTourney.js";
class SkyWarsSoloKits {
    lab;
    basic;
    advanced;
    mini;
    tourney;
    enderChest;
    constructor(data) {
        this.lab = new SkyWarsSoloKitsLab(data);
        this.basic = new SkyWarsSoloKitsBasic(data);
        this.advanced = new SkyWarsSoloKitsAdvanced(data);
        this.mini = new SkyWarsSoloKitsMini(data);
        this.tourney = new SkyWarsSoloKitsTourney(data);
        this.enderChest = new BaseSkyWarsMode(data, 'kit_enderchest_solo_enderchest');
    }
}
export default SkyWarsSoloKits;
//# sourceMappingURL=SkyWarsSoloKits.js.map