class SkyBlockMemberCrimsonIsleMatriarch {
  pearlsCollected: number;
  lastAttempt: number;
  recentRefreshes: number[];
  constructor(data: Record<string, any>) {
    this.pearlsCollected = data?.pearls_collected || 0;
    this.lastAttempt = data?.last_attempt || 0;
    this.recentRefreshes = data?.recent_refreshes || [];
  }

  toString(): number {
    return this.pearlsCollected;
  }
}

export default SkyBlockMemberCrimsonIsleMatriarch;
