class SkyblockMemberPlayerStatsAuctionsStats {
  common: number;
  uncommon: number;
  rare: number;
  epic: number;
  legendary: number;
  special: number;
  mythic: number;
  total: number;
  constructor(data: Record<string, any>) {
    this.common = data?.COMMON || 0;
    this.uncommon = data?.UNCOMMON || 0;
    this.rare = data?.RARE || 0;
    this.epic = data?.EPIC || 0;
    this.legendary = data?.LEGENDARY || 0;
    this.special = data?.SPECIAL || 0;
    this.mythic = data?.MYTHIC || 0;
    this.total = this.common + this.uncommon + this.rare + this.epic + this.legendary + this.special + this.mythic;
  }

  toString(): number {
    return this.total;
  }
}

export default SkyblockMemberPlayerStatsAuctionsStats;
