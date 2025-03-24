class SkyblockMemberCrimsonIsleTrophyFishFish {
  bronze: number;
  silver: number;
  gold: number;
  diamond: number;
  total: number;
  constructor(data: Record<string, any>, fishName: string) {
    this.bronze = data?.[`${fishName}_bronze`];
    this.silver = data?.[`${fishName}_silver`];
    this.gold = data?.[`${fishName}_gold`];
    this.diamond = data?.[`${fishName}_diamond`];
    this.total = this.bronze + this.silver + this.gold + this.diamond;
  }

  toString(): number {
    return this.total;
  }
}

export default SkyblockMemberCrimsonIsleTrophyFishFish;
