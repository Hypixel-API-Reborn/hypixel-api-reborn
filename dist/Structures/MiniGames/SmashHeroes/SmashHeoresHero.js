import Divide from '../../../Utils/Divide.js';
class SmashHeoresHero {
    name;
    level;
    xp;
    prestige;
    playedGames;
    kills;
    deaths;
    KDR;
    wins;
    losses;
    WLR;
    constructor(data, hero) {
        this.name = hero;
        this.level = data?.[`lastLevel_${hero}`] || 0;
        this.xp = data?.[`xp_${hero}`] || 0;
        this.prestige = data?.[`pg_${hero}`] || 0;
        this.playedGames = data?.class_stats?.[hero]?.games || 0;
        this.kills = data?.class_stats?.[hero]?.kills || 0;
        this.deaths = data?.class_stats?.[hero]?.deaths || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.class_stats?.[hero]?.wins || 0;
        this.losses = data?.class_stats?.[hero]?.losses || 0;
        this.WLR = Divide(this.wins, this.losses);
    }
}
export default SmashHeoresHero;
//# sourceMappingURL=SmashHeoresHero.js.map