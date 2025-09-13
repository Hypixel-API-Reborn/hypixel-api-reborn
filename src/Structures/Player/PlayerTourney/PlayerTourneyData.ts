class PlayerTourneyData {
  tourneyName: string;
  playtime: number;
  tributes: number;
  firstWinTimestamp: number | null;
  firstWinAt: Date | null;
  claimedReward: number;
  constructor(data: Record<string, any>, tourneyName: string) {
    this.tourneyName = tourneyName;
    this.playtime = data?.playtime || 0;
    this.tributes = data?.tributes_earned || 0;
    this.firstWinTimestamp = data?.first_win || null;
    this.firstWinAt = this.firstWinTimestamp ? new Date(this.firstWinTimestamp) : null;
    this.claimedReward = data?.claimed_ranking_reward || 0;
  }
}

export default PlayerTourneyData;
