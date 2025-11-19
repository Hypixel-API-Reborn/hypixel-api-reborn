class BlockingDead {
  headShots: number;
  kills: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.headShots = data?.headshots_dayone || 0;
    this.kills = data?.kills_dayone || 0;
    this.wins = data?.wins_dayone || 0;
  }
}

export default BlockingDead;
