import Divide from '../../../Utils/Divide.js';
class SmashHeroesMode {
    kills;
    deaths;
    KDR;
    wins;
    losses;
    WLR;
    constructor(data, mode) {
        this.kills = data?.[`kills_${mode}`] || 0;
        this.deaths = data?.[`deaths_${mode}`] || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.[`wins_${mode}`] || 0;
        this.losses = data?.[`losses_${mode}`] || 0;
        this.WLR = Divide(this.wins, this.losses);
    }
}
export default SmashHeroesMode;
//# sourceMappingURL=SmashHeroesMode.js.map