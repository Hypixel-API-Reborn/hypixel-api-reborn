import SkyWarsKillsDeathsType from "./SkyWarsKillsDeathsType.js";
import { ParseModeAfter } from "../../../Utils/ParseMode.js";
class SkyWarsKillsDeaths {
    total;
    melee;
    void;
    bow;
    mob;
    fall;
    constructor(data, mode) {
        mode = ParseModeAfter(mode);
        this.total = new SkyWarsKillsDeathsType(data, '', mode);
        this.melee = new SkyWarsKillsDeathsType(data, 'melee', mode);
        this.void = new SkyWarsKillsDeathsType(data, 'void', mode);
        this.bow = new SkyWarsKillsDeathsType(data, 'bow', mode);
        this.mob = new SkyWarsKillsDeathsType(data, 'mob', mode);
        this.fall = new SkyWarsKillsDeathsType(data, 'fall', mode);
    }
}
export default SkyWarsKillsDeaths;
//# sourceMappingURL=SkyWarsKillsDeaths.js.map