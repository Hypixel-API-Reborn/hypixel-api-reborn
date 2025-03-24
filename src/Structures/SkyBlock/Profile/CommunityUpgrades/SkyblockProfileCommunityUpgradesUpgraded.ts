import SkyblockProfileCommunityUpgradesUpgrade from './SkyblockProfileCommunityUpgradesUpgrade.js';

class SkyblockProfileCommunityUpgradesUpgraded extends SkyblockProfileCommunityUpgradesUpgrade {
  tier: number;
  startedBy: number;
  claimedTimestamp: number;
  claimedAt: Date;
  claimedBy: number;
  fasttracked: boolean;
  constructor(data: Record<string, any>) {
    super(data);
    this.tier = data.tier;
    this.startedBy = data.started_by;
    this.claimedTimestamp = data.claimed_ms;
    this.claimedAt = new Date(this.claimedTimestamp);
    this.claimedBy = data.claimed_by;
    this.fasttracked = data.fasttracked || false;
  }
}

export default SkyblockProfileCommunityUpgradesUpgraded;
