class SkyblockMemberCrimsonIsleTrophyFishFish {
  bronze: number;
  silver: number;
  gold: number;
  diamond: number;
  total: number;
  constructor(data: Record<string, any>, fishName: string) {
    this.bronze = data?.[`${fishName}_bronze`] || 0;
    this.silver = data?.[`${fishName}_silver`] || 0;
    this.gold = data?.[`${fishName}_gold`] || 0;
    this.diamond = data?.[`${fishName}_diamond`] || 0;
    this.total = this.bronze + this.silver + this.gold + this.diamond;
  }

  toString(): number {
    return this.total;
  }
}

export default SkyblockMemberCrimsonIsleTrophyFishFish;
