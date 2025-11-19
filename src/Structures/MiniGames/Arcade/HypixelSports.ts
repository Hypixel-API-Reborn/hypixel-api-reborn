class HypixelSports {
  wins: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_hypixel_sports || 0;
  }
}

export default HypixelSports;
