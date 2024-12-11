class TourneyData {
  playtime: number;
  tributes: number;
  firstWin: number;
  claimedReward: number;
  constructor(data: Record<string, any>) {
    this.playtime = data.playtime || 0;
    this.tributes = data.tributes_earned || 0;
    this.firstWin = data.first_win || 0;
    this.claimedReward = data.claimed_ranking_reward || 0;
  }
}

export default TourneyData;
