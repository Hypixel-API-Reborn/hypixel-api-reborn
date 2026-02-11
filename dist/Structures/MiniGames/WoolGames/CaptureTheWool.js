import Divide from '../../../Utils/Divide.js';
class CaptureTheWool {
    kills;
    assists;
    deaths;
    KDRatio;
    killsWithWool;
    deathsWithWool;
    KDRatioWithWool;
    woolCaptured;
    woolStolen;
    woolCaptureStolenRatio;
    constructor(data) {
        this.kills = data?.stats?.kills || 0;
        this.assists = data?.stats?.assists || 0;
        this.deaths = data?.stats?.deaths || 0;
        this.KDRatio = Divide(this.kills, this.deaths);
        this.killsWithWool = data?.stats?.kills_with_wool || 0;
        this.deathsWithWool = data?.stats?.deaths_with_wool || 0;
        this.KDRatioWithWool = Divide(this.killsWithWool, this.deathsWithWool);
        this.woolCaptured = data?.stats?.wools_captured || 0;
        this.woolStolen = data?.stats?.wools_stolen || 0;
        this.woolCaptureStolenRatio = Divide(this.woolCaptured, this.woolStolen);
    }
}
export default CaptureTheWool;
//# sourceMappingURL=CaptureTheWool.js.map