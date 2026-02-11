class SimonSays {
    roundWins;
    rounds;
    topScore;
    wins;
    constructor(data) {
        this.roundWins = data?.round_wins_simon_says || 0;
        this.rounds = data?.rounds_simon_says || 0;
        this.topScore = data?.top_score_simon_says || 0;
        this.wins = data?.wins_simon_says || 0;
    }
}
export default SimonSays;
//# sourceMappingURL=SimonSays.js.map