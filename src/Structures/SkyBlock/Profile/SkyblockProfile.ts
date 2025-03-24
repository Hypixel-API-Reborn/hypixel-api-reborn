import SkyblockMember from '../Member/SkyblockMember.js';
import SkyblockProfileBanking from './Banking/SkyblockProfileBanking.js';
import SkyblockProfileCommunityUpgrades from './CommunityUpgrades/SkyblockProfileCommunityUpgrades.js';
import type SkyblockGarden from '../Garden/SkyblockGarden.js';
import type { SkyblockProfileName, SkyblockProfileType } from '../../../Types/Skyblock.js';
import type { UUID } from '../../../Types/Global.js';

class SkyblockProfile {
  profileId: string;
  communityUpgrades: SkyblockProfileCommunityUpgrades;
  createdTimestamp: number | null;
  createdAt: Date | null;
  members: SkyblockMember[];
  me: SkyblockMember | undefined;
  gameMode: SkyblockProfileType | null;
  banking: SkyblockProfileBanking;
  profileName: SkyblockProfileName | 'UNKNOWN';
  selected: boolean;
  garden: SkyblockGarden | null;
  constructor(data: Record<string, any>, extra: { uuid: UUID; garden: SkyblockGarden | null }) {
    this.profileId = data?.profile_id || 'UNKNOWN';
    this.communityUpgrades = new SkyblockProfileCommunityUpgrades(data.communityUpgrades || {});
    this.createdTimestamp = data.created_at ? data.created_at : null;
    this.createdAt = this.createdTimestamp ? new Date(this.createdTimestamp) : null;
    this.members = Object.keys(data.members).map((uuid) => new SkyblockMember(uuid, data.members[uuid]));
    this.me = this.members.find((x) => x.uuid === extra.uuid);
    this.gameMode = data?.game_mode || null;
    this.banking = new SkyblockProfileBanking(data?.banking || {});
    this.profileName = data?.cute_name || 'UNKNOWN';
    this.selected = data?.selected || false;
    this.garden = extra.garden;
  }

  toString(): string {
    return this.profileName;
  }
}

export default SkyblockProfile;
