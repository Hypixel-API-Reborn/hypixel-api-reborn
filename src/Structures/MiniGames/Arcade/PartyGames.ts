class PartyGames {
  wins: number;
  roundWins: number;
  stars: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_party || 0;
    this.roundWins = data?.round_wins_party || 0;
    this.stars = data?.total_stars_party || 0;
  }
}

export default PartyGames;
