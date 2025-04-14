class BlockingDead {
  wins: number;
  kills: number;
  headShots: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_dayone || 0;
    this.kills = data?.kills_dayone || 0;
    this.headShots = data?.headshots_dayone || 0;
  }
}

export default BlockingDead;
