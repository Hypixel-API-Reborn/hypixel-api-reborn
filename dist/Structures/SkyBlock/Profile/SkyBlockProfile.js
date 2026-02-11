import SkyBlockMember from '../Member/SkyBlockMember.js';
import SkyBlockProfileBanking from './Banking/SkyBlockProfileBanking.js';
import SkyBlockProfileCommunityUpgrades from './CommunityUpgrades/SkyBlockProfileCommunityUpgrades.js';
class SkyBlockProfile {
    profileId;
    communityUpgrades;
    createdTimestamp;
    createdAt;
    members;
    me;
    gameMode;
    banking;
    profileName;
    selected;
    garden;
    museum;
    constructor(data, extra) {
        this.profileId = data?.profile_id || 'UNKNOWN';
        this.communityUpgrades = new SkyBlockProfileCommunityUpgrades(data.communityUpgrades || {});
        this.createdTimestamp = data.created_at ? data.created_at : null;
        this.createdAt = this.createdTimestamp ? new Date(this.createdTimestamp) : null;
        const members = data?.members || {};
        this.members = Object.keys(members).map((uuid) => new SkyBlockMember(uuid, members?.[uuid] || {}));
        this.me = extra.uuid !== null ? this.members.find((x) => x.uuid === extra.uuid) || null : null;
        this.gameMode = data?.game_mode || null;
        this.banking = new SkyBlockProfileBanking(data?.banking || {});
        this.profileName = data?.cute_name || 'UNKNOWN';
        this.selected = data?.selected || false;
        this.garden = extra.garden || null;
        this.museum = extra.museum || null;
    }
    toString() {
        return this.profileName;
    }
    isRaw() {
        return false;
    }
}
export default SkyBlockProfile;
//# sourceMappingURL=SkyBlockProfile.js.map