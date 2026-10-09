import SkyBlockProfileCommunityUpgradesUpgraded from './SkyBlockProfileCommunityUpgradesUpgraded.ts';
import SkyBlockProfileCommunityUpgradesUpgrading from './SkyBlockProfileCommunityUpgradesUpgrading.ts';

class SkyBlockProfileCommunityUpgrades {
  currentlyUpgrading: SkyBlockProfileCommunityUpgradesUpgrading | null;
  upgrades: SkyBlockProfileCommunityUpgradesUpgraded[];
  constructor(data: Record<string, any>) {
    this.currentlyUpgrading = data?.currently_upgrading
      ? new SkyBlockProfileCommunityUpgradesUpgrading(data.currently_upgrading)
      : null;
    this.upgrades = [];
    (data?.upgrade_states ?? []).forEach((upgrade: Record<string, any>) => {
      this.upgrades.push(new SkyBlockProfileCommunityUpgradesUpgraded(upgrade));
    });
  }

  toString(): SkyBlockProfileCommunityUpgradesUpgrading | null {
    return this.currentlyUpgrading;
  }
}

export default SkyBlockProfileCommunityUpgrades;
