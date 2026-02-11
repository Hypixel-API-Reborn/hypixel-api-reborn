import Divide from '../../Utils/Divide.js';
class Walls {
    coins;
    kills;
    deaths;
    KDR;
    wins;
    losses;
    WLR;
    assists;
    constructor(data) {
        this.coins = data?.coins || data?.tokens || 0;
        this.kills = data?.kills || 0;
        this.deaths = data?.deaths || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.wins || 0;
        this.losses = data?.losses || 0;
        this.WLR = Divide(this.wins, this.losses);
        this.assists = data?.assists || 0;
    }
}
export default Walls;
//# sourceMappingURL=Walls.js.map