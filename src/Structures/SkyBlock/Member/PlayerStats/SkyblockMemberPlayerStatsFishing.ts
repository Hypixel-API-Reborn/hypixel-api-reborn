class SkyblockMemberPlayerStatsFishing {
  seaCreaturesKills: number;
  normal: number;
  treasure: number;
  largeTreasure: number;
  trophyFish: number;
  total: number;
  constructor(data: Record<string, any>) {
    this.seaCreaturesKills = data?.seaCreatureKills || 0;
    this.normal = data?.normal || 0;
    this.treasure = data?.treasure || 0;
    this.largeTreasure = data?.large_treasure || 0;
    this.trophyFish = data?.trophy_fish || 0;
    this.total = this.normal + this.treasure + this.largeTreasure + this.trophyFish;
  }

  toString(): number {
    return this.total;
  }
}

export default SkyblockMemberPlayerStatsFishing;
