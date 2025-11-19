import SkyBlockMember from '../Member/SkyBlockMember.js';
import SkyBlockProfileBanking from './Banking/SkyBlockProfileBanking.js';
import SkyBlockProfileCommunityUpgrades from './CommunityUpgrades/SkyBlockProfileCommunityUpgrades.js';
import type RequestData from '../../../Private/RequestData.ts';
import type SkyBlockGarden from '../Garden/SkyBlockGarden.js';
import type SkyBlockMuseum from '../Museum/SkyBlockMuseum.js';
import type { SkyBlockProfileName, SkyBlockProfileType } from '../../../Types/SkyBlock.js';
import type { UUID } from '../../../Types/Global.js';

class SkyBlockProfile {
  profileId: string;
  communityUpgrades: SkyBlockProfileCommunityUpgrades;
  createdTimestamp: number | null;
  createdAt: Date | null;
  members: SkyBlockMember[];
  me: SkyBlockMember | null;
  gameMode: SkyBlockProfileType | null;
  banking: SkyBlockProfileBanking;
  profileName: SkyBlockProfileName | 'UNKNOWN';
  selected: boolean;
  garden: SkyBlockGarden | null;
  museum: SkyBlockMuseum | null;
  constructor(
    data: Record<string, any>,
    extra: { uuid: UUID | null; garden?: SkyBlockGarden; museum?: SkyBlockMuseum }
  ) {
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

  toString(): SkyBlockProfileName | 'UNKNOWN' {
    return this.profileName;
  }

  isRaw(): this is RequestData {
    return false;
  }
}

export default SkyBlockProfile;
