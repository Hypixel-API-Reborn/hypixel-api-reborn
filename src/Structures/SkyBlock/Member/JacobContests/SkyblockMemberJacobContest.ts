class SkyblockMemberJacobContest {
  collected: number | null;
  claimedRewards: boolean | null;
  claimedPosition: number | null;
  claimedParticipants: number | null;
  constructor(data: Record<string, any>) {
    this.collected = data?.collected || null;
    this.claimedRewards = data?.claimed_rewards || null;
    this.claimedPosition = data?.claimed_position || null;
    this.claimedParticipants = data?.claimed_participants || null;
  }
}

export default SkyblockMemberJacobContest;
