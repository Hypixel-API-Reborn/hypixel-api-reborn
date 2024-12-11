class HypixelSays {
  wins: number;
  rounds: number;
  roundWins: number;
  topScore: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_simon_says || 0;
    this.rounds = data?.rounds_simon_says || 0;
    this.roundWins = data?.round_wins_simon_says || 0;
    this.topScore = data?.top_score_simon_says || 0;
  }
}

export default HypixelSays;
