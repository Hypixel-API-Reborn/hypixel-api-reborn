class SkyBlockMemberBestiary {
  kills: Record<string, number>;
  deaths: Record<string, number>;
  lastClaimedMilestone: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills || {};
    this.deaths = data?.deaths || {};
    this.lastClaimedMilestone = data?.milestone?.last_claimed_milestone || 0;
  }
}

export default SkyBlockMemberBestiary;
