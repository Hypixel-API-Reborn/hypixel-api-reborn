import Divide from '../../../Utils/Divide.js';
class SpeedUHCMode {
    kills;
    deaths;
    KDR;
    wins;
    losses;
    WLR;
    playedGames;
    winStreak;
    killStreak;
    assists;
    constructor(data, mode) {
        this.kills = data?.[`kills_${mode}`] || 0;
        this.deaths = data?.[`deaths_${mode}`] || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.[`wins_${mode}`] || 0;
        this.losses = data?.[`losses_${mode}`] || 0;
        this.WLR = Divide(this.wins, this.losses);
        this.playedGames = data?.[`games_${mode}`] || 0;
        this.winStreak = data?.[`win_streak_${mode}`] || 0;
        this.killStreak = data?.[`killstreak_${mode}`] || 0;
        this.assists = data?.[`assists_${mode}`] || 0;
    }
}
export default SpeedUHCMode;
//# sourceMappingURL=SpeedUHCMode.js.map