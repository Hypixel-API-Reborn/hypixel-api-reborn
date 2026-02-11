import BaseKillsDeathsType from "../Shared/BaseKillDeathsType.js";
import Divide from "../../../Utils/Divide.js";
import { ParseModeAfter, ParseModeBefore } from "../../../Utils/ParseMode.js";
class SkyWarsKillsDeathsType extends BaseKillsDeathsType {
    constructor(data, type, mode) {
        type = ParseModeBefore(type);
        mode = ParseModeAfter(mode);
        super(data);
        this.kills = data?.[`${type}kills${mode}`] || 0;
        this.deaths = data?.[`${type}deaths${mode}`] || 0;
        this.ratio = Divide(this.kills, this.deaths);
    }
}
export default SkyWarsKillsDeathsType;
//# sourceMappingURL=SkyWarsKillsDeathsType.js.map