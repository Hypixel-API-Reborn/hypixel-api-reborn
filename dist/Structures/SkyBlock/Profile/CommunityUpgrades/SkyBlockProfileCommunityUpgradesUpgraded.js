import SkyBlockProfileCommunityUpgradesUpgrade from './SkyBlockProfileCommunityUpgradesUpgrade.js';
class SkyBlockProfileCommunityUpgradesUpgraded extends SkyBlockProfileCommunityUpgradesUpgrade {
    tier;
    startedBy;
    claimedTimestamp;
    claimedAt;
    claimedBy;
    fasttracked;
    constructor(data) {
        super(data);
        this.tier = data.tier || 0;
        this.startedBy = data.started_by || 0;
        this.claimedTimestamp = data.claimed_ms || 0;
        this.claimedAt = new Date(this.claimedTimestamp);
        this.claimedBy = data.claimed_by || 0;
        this.fasttracked = data.fasttracked || false;
    }
}
export default SkyBlockProfileCommunityUpgradesUpgraded;
//# sourceMappingURL=SkyBlockProfileCommunityUpgradesUpgraded.js.map