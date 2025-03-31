class SkyblockMemberPlayerStatsGifts {
  received: number;
  given: number;
  total: number;
  constructor(data: Record<string, any>) {
    this.received = data?.total_received || 0;
    this.given = data?.total_given || 0;
    this.total = this.received + this.given;
  }

  toString(): number {
    return this.total;
  }
}

export default SkyblockMemberPlayerStatsGifts;
