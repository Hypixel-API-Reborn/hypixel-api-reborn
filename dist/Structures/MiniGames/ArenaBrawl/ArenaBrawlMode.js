import Divide from '../../../Utils/Divide.js';
class ArenaBrawlMode {
    damage;
    kills;
    deaths;
    KDR;
    healed;
    wins;
    losses;
    WLR;
    games;
    winStreak;
    constructor(data, mode) {
        this.damage = data?.[`damage_${mode}`] || 0;
        this.kills = data?.[`kills_${mode}`] || 0;
        this.deaths = data?.[`deaths_${mode}`] || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.healed = data?.[`healed_${mode}`] || 0;
        this.wins = data?.[`wins_${mode}`] || 0;
        this.losses = data?.[`losses_${mode}`] || 0;
        this.WLR = Divide(this.wins, this.losses);
        this.games = data?.[`games_${mode}`] || 0;
        this.winStreak = data?.[`win_streaks_${mode}`] || 0;
    }
}
export default ArenaBrawlMode;
//# sourceMappingURL=ArenaBrawlMode.js.map