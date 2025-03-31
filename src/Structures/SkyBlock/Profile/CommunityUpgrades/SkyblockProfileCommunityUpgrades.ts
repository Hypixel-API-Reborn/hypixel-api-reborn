import SkyblockProfileCommunityUpgradesUpgraded from './SkyblockProfileCommunityUpgradesUpgraded.js';
import SkyblockProfileCommunityUpgradesUpgrading from './SkyblockProfileCommunityUpgradesUpgrading.js';

class SkyblockProfileCommunityUpgrades {
  currentlyUpgrading: SkyblockProfileCommunityUpgradesUpgrading | null;
  upgrades: SkyblockProfileCommunityUpgradesUpgraded[];
  constructor(data: Record<string, any>) {
    this.currentlyUpgrading = data.currently_upgrading
      ? new SkyblockProfileCommunityUpgradesUpgrading(data.currently_upgrading)
      : null;
    this.upgrades = [];
    (data.upgrade_states || []).forEach((upgrade: Record<string, any>) => {
      this.upgrades.push(new SkyblockProfileCommunityUpgradesUpgraded(upgrade));
    });
  }

  toString(): SkyblockProfileCommunityUpgradesUpgrading | null {
    return this.currentlyUpgrading;
  }
}

export default SkyblockProfileCommunityUpgrades;
