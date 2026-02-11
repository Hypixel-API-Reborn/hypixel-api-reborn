import BaseSkyWarsMode from "../../../SkyWarsMode/BaseSkyWarsMode.js";
import SkyWarsSoloKitsTourneyAdvanced from "./SkyWarsSoloKitsTourneyAdvanced.js";
import SkyWarsSoloKitsTourneyBasic from "./SkyWarsSoloKitsTourneyBasic.js";
class SkyWarsSoloKitsTourney {
    basic;
    advanced;
    enderChest;
    constructor(data) {
        this.basic = new SkyWarsSoloKitsTourneyBasic(data);
        this.advanced = new SkyWarsSoloKitsTourneyAdvanced(data);
        this.enderChest = new BaseSkyWarsMode(data, 'tourney_kit_enderchest_solo_enderchest');
    }
}
export default SkyWarsSoloKitsTourney;
//# sourceMappingURL=SkyWarsSoloKitsTourney.js.map