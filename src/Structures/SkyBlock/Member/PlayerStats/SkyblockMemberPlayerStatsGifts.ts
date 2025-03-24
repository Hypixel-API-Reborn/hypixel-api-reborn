class SkyblockMemberPlayerStatsGifts {
  received: number;
  given: number;
  constructor(data: Record<string, any>) {
    this.received = data?.total_received || 0;
    this.given = data?.total_given || 0;
  }
}

export default SkyblockMemberPlayerStatsGifts;
