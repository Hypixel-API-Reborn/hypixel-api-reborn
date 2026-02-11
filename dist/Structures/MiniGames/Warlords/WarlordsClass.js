import Divide from '../../../Utils/Divide.js';
class WarlordsClass {
    wins;
    losses;
    WLR;
    gamesPlayed;
    damage;
    heal;
    damagePrevented;
    constructor(data, className) {
        this.wins = data?.[`wins_${className}`] || 0;
        this.losses = data?.[`losses_${className}`] || 0;
        this.WLR = Divide(this.wins, this.losses);
        this.gamesPlayed = data?.[`${className}_plays`] || 0;
        this.damage = data?.[`damage_${className}`] || 0;
        this.heal = data?.[`heal_${className}`] || 0;
        this.damagePrevented = data?.[`damage_prevented_${className}`] || 0;
    }
}
export default WarlordsClass;
//# sourceMappingURL=WarlordsClass.js.map