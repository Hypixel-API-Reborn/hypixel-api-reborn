import Divide from '../../Utils/Divide.js';
class Paintball {
    coins;
    kills;
    deaths;
    KDR;
    wins;
    shotsFired;
    killStreaks;
    forceFieldTime;
    hat;
    adrenaline;
    endurance;
    fortune;
    godfather;
    superluck;
    transfusion;
    constructor(data) {
        this.coins = data?.coins || data?.tokens || 0;
        this.kills = data?.kills || 0;
        this.deaths = data?.deaths || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.wins || 0;
        this.shotsFired = data?.shots_fired || 0;
        this.killStreaks = data?.killstreaks || 0;
        this.forceFieldTime = data?.forcefieldTime || 0;
        this.hat = data?.hat || 'None';
        this.adrenaline = data?.adrenaline || 0;
        this.endurance = data?.endurance || 0;
        this.fortune = data?.fortune || 0;
        this.godfather = data?.godfather || 0;
        this.superluck = data?.superluck || 0;
        this.transfusion = data?.transfusion || 0;
    }
}
export default Paintball;
//# sourceMappingURL=Paintball.js.map