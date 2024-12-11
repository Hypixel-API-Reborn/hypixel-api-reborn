class BlockingDead {
  wins: number;
  kills: number;
  headshots: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_dayone || 0;
    this.kills = data?.kills_dayone || 0;
    this.headshots = data?.headshots_dayone || 0;
  }
}

export default BlockingDead;
