import Divide from '../../../Utils/Divide.js';
class VampireZRole {
    role;
    kills;
    deaths;
    KDR;
    wins;
    constructor(data, role) {
        this.role = role;
        this.kills = data?.[`${role}_kills`] || 0;
        this.deaths = data?.[`${role}_deaths`] || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.[`${role}_wins`] || 0;
    }
}
export default VampireZRole;
//# sourceMappingURL=VampireZRole.js.map