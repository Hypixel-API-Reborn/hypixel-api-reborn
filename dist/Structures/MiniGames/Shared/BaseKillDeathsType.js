import Divide from "../../../Utils/Divide.js";
class BaseKillsDeathsType {
    kills;
    deaths;
    ratio;
    constructor(data) {
        this.kills = data?.kills || 0;
        this.deaths = data?.deaths || 0;
        this.ratio = Divide(this.kills, this.deaths);
    }
}
export default BaseKillsDeathsType;
//# sourceMappingURL=BaseKillDeathsType.js.map