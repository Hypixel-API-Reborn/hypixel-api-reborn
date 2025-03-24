import SkyblockProfileCommunityUpgradesUpgrade from './SkyblockProfileCommunityUpgradesUpgrade.js';

class SkyblockProfileCommunityUpgradesUpgrading extends SkyblockProfileCommunityUpgradesUpgrade {
  tier: number;
  startedBy: number;
  constructor(data: Record<string, any>) {
    super(data);
    this.tier = data.new_tier;
    this.startedBy = data.who_started;
  }
}

export default SkyblockProfileCommunityUpgradesUpgrading;
