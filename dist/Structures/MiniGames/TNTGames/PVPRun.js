import Divide from '../../../Utils/Divide.js';
class PVPRun {
    wins;
    bestTime;
    kills;
    deaths;
    KDR;
    regeneration;
    notoriety;
    fortitude;
    doubleJumps;
    prefixColor;
    constructor(data) {
        this.wins = data?.wins_pvprun || 0;
        this.bestTime = data?.record_pvprun || 0;
        this.kills = data?.kills_pvprun || 0;
        this.deaths = data?.deaths_pvprun || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.regeneration = data?.new_pvprun_regeneration || 0;
        this.notoriety = data?.new_pvprun_notoriety || 0;
        this.fortitude = data?.new_pvprun_fortitude || 0;
        this.doubleJumps = data?.new_pvprun_double_jumps || 0;
        this.prefixColor = data?.prefix_pvprun || '';
    }
}
export default PVPRun;
//# sourceMappingURL=PVPRun.js.map