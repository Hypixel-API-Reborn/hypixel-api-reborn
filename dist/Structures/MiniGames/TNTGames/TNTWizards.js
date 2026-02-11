import Divide from '../../../Utils/Divide.js';
class TNTWizards {
    wins;
    kills;
    assists;
    deaths;
    KDR;
    points;
    kineticHealing;
    airTime;
    prefix;
    constructor(data) {
        this.wins = data?.wins_capture || 0;
        this.kills = data?.kills_capture || 0;
        this.assists = data?.assists_capture || 0;
        this.deaths = data?.deaths_capture || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.points = data?.points_capture || 0;
        this.kineticHealing = data?.kinetic_healing_capture || 0;
        this.airTime = data?.air_time_capture || 0;
        this.prefix = data?.prefix_capture || '';
    }
}
export default TNTWizards;
//# sourceMappingURL=TNTWizards.js.map