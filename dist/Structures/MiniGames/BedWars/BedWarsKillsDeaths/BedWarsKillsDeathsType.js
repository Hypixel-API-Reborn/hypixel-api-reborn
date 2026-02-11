import BaseKillsDeathsType from "../../Shared/BaseKillDeathsType.js";
import Divide from "../../../../Utils/Divide.js";
import { ParseModeBefore } from "../../../../Utils/ParseMode.js";
class BedWarsKillsDeathsType extends BaseKillsDeathsType {
    constructor(data, type, mode, finals = false) {
        type = ParseModeBefore(type);
        mode = ParseModeBefore(mode);
        super(data);
        this.kills = data?.[`${mode}${type}${finals ? 'final_' : ''}kills_bedwars`] || 0;
        this.deaths = data?.[`${mode}${type}${finals ? 'final_' : ''}deaths_bedwars`] || 0;
        this.ratio = Divide(this.kills, this.deaths);
    }
}
export default BedWarsKillsDeathsType;
//# sourceMappingURL=BedWarsKillsDeathsType.js.map