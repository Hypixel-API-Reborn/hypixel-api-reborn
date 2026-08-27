import SkyBlockProfileCommunityUpgradesUpgrade from './SkyBlockProfileCommunityUpgradesUpgrade.js';

class SkyBlockProfileCommunityUpgradesUpgraded extends SkyBlockProfileCommunityUpgradesUpgrade {
  tier: number;
  startedBy: string;
  claimedTimestamp: number;
  claimedAt: Date;
  claimedBy: string;
  fasttracked: boolean;
  constructor(data: Record<string, any>) {
    super(data);
    this.tier = data?.tier ?? 0;
    this.startedBy = data?.started_by ?? '';
    this.claimedTimestamp = data?.claimed_ms ?? 0;
    this.claimedAt = new Date(this.claimedTimestamp);
    this.claimedBy = data?.claimed_by ?? '';
    this.fasttracked = data?.fasttracked ?? false;
  }
}

export default SkyBlockProfileCommunityUpgradesUpgraded;
