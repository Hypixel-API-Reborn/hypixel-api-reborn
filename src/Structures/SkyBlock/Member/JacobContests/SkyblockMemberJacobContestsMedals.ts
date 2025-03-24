class SkyblockMemberJacobContestsMedals {
  bronze: number;
  silver: number;
  gold: number;
  constructor(data: Record<string, any>) {
    this.bronze = data?.bronze || 0;
    this.silver = data?.silver || 0;
    this.gold = data?.gold || 0;
  }
}

export default SkyblockMemberJacobContestsMedals;
