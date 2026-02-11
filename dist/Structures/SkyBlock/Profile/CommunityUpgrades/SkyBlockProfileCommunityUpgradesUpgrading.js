import SkyBlockProfileCommunityUpgradesUpgrade from './SkyBlockProfileCommunityUpgradesUpgrade.js';
class SkyBlockProfileCommunityUpgradesUpgrading extends SkyBlockProfileCommunityUpgradesUpgrade {
    tier;
    startedBy;
    constructor(data) {
        super(data);
        this.tier = data.new_tier || 0;
        this.startedBy = data.who_started || 0;
    }
}
export default SkyBlockProfileCommunityUpgradesUpgrading;
//# sourceMappingURL=SkyBlockProfileCommunityUpgradesUpgrading.js.map