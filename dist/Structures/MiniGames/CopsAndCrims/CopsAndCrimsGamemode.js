import Divide from '../../../Utils/Divide.js';
class CopsAndCrimsGamemode {
    kills;
    criminalKills;
    copKills;
    assists;
    deaths;
    KDR;
    wins;
    gamesPlayed;
    losses;
    WLR;
    constructor(data, mode) {
        this.kills = data?.[`kills_${mode}`] || 0;
        this.criminalKills = data?.[`criminal_kills_${mode}`] || 0;
        this.copKills = data?.[`cop_kills_${mode}`] || 0;
        this.assists = data?.[`assists_${mode}`] || 0;
        this.deaths = data?.[`deaths_${mode}`] || 0;
        this.KDR = Divide(this.kills, this.deaths);
        this.wins = data?.[`game_wins_${mode}`] || 0;
        this.gamesPlayed = data?.[`game_plays_${mode}`] || 0;
        this.losses = this.gamesPlayed - this.wins;
        this.WLR = Divide(this.wins, this.losses);
    }
}
export default CopsAndCrimsGamemode;
//# sourceMappingURL=CopsAndCrimsGamemode.js.map