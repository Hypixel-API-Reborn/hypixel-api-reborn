import SkyBlockProfileCommunityUpgradesUpgrade from './SkyBlockProfileCommunityUpgradesUpgrade.js';

class SkyBlockProfileCommunityUpgradesUpgrading extends SkyBlockProfileCommunityUpgradesUpgrade {
  tier: number;
  startedBy: string;
  constructor(data: Record<string, any>) {
    super(data);
    this.tier = data?.new_tier ?? 0;
    this.startedBy = data?.who_started ?? '';
  }
}

export default SkyBlockProfileCommunityUpgradesUpgrading;
