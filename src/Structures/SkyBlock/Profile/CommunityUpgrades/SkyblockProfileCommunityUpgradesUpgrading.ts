import SkyblockProfileCommunityUpgradesUpgrade from './SkyblockProfileCommunityUpgradesUpgrade.js';

class SkyblockProfileCommunityUpgradesUpgrading extends SkyblockProfileCommunityUpgradesUpgrade {
  tier: number;
  startedBy: number;
  constructor(data: Record<string, any>) {
    super(data);
    this.tier = data.new_tier || 0;
    this.startedBy = data.who_started || 0;
  }
}

export default SkyblockProfileCommunityUpgradesUpgrading;
