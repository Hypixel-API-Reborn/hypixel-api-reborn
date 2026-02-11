import SkyBlockProfileCommunityUpgradesUpgraded from './SkyBlockProfileCommunityUpgradesUpgraded.js';
import SkyBlockProfileCommunityUpgradesUpgrading from './SkyBlockProfileCommunityUpgradesUpgrading.js';
class SkyBlockProfileCommunityUpgrades {
    currentlyUpgrading;
    upgrades;
    constructor(data) {
        this.currentlyUpgrading = data.currently_upgrading
            ? new SkyBlockProfileCommunityUpgradesUpgrading(data.currently_upgrading)
            : null;
        this.upgrades = [];
        (data.upgrade_states || []).forEach((upgrade) => {
            this.upgrades.push(new SkyBlockProfileCommunityUpgradesUpgraded(upgrade));
        });
    }
    toString() {
        return this.currentlyUpgrading;
    }
}
export default SkyBlockProfileCommunityUpgrades;
//# sourceMappingURL=SkyBlockProfileCommunityUpgrades.js.map