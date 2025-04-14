import SkyBlockProfileCommunityUpgradesUpgrade from './SkyBlockProfileCommunityUpgradesUpgrade.js';

class SkyBlockProfileCommunityUpgradesUpgraded extends SkyBlockProfileCommunityUpgradesUpgrade {
  tier: number;
  startedBy: number;
  claimedTimestamp: number;
  claimedAt: Date;
  claimedBy: number;
  fasttracked: boolean;
  constructor(data: Record<string, any>) {
    super(data);
    this.tier = data.tier || 'UNKNOWN';
    this.startedBy = data.started_by || 0;
    this.claimedTimestamp = data.claimed_ms || 0;
    this.claimedAt = new Date(this.claimedTimestamp);
    this.claimedBy = data.claimed_by || 0;
    this.fasttracked = data.fasttracked || false;
  }
}

export default SkyBlockProfileCommunityUpgradesUpgraded;
