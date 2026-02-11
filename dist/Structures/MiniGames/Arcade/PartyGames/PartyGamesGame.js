class PartyGamesGame {
    bestScore;
    bestTime;
    kills;
    roundWins;
    totalScore;
    constructor(data, game) {
        this.bestScore = data?.[`${game}_best_score_party`] || 0;
        this.bestTime = data?.[`${game}_best_time_party`] || 0;
        this.kills = data?.[`${game}_kills_party`] || 0;
        this.roundWins = data?.[`${game}_round_wins_party`] || 0;
        this.totalScore = data?.[`${game}_total_score_party`] || 0;
    }
}
export default PartyGamesGame;
//# sourceMappingURL=PartyGamesGame.js.map