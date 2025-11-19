class SantaSays {
  roundWins: number;
  rounds: number;
  topScore: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.roundWins = data?.round_wins_santa_says || 0;
    this.rounds = data?.rounds_santa_says || 0;
    this.topScore = data?.top_score_santa_says || 0;
    this.wins = data?.wins_santa_says || 0;
  }
}

export default SantaSays;
