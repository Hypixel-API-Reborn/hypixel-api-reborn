import SkyBlockMember from '../Member/SkyBlockMember.ts';
import SkyBlockProfileBanking from './Banking/SkyBlockProfileBanking.ts';
import SkyBlockProfileCommunityUpgrades from './CommunityUpgrades/SkyBlockProfileCommunityUpgrades.ts';
import type RequestData from '../../../Private/RequestData.ts';
import type SkyBlockGarden from '../Garden/SkyBlockGarden.ts';
import type SkyBlockMuseum from '../Museum/SkyBlockMuseum.ts';
import type { SkyBlockProfileName, SkyBlockProfileType, UUID } from '../../../Types/index.ts';

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
  garden: RequestData<SkyBlockGarden> | null;
  museum: RequestData<SkyBlockMuseum> | null;
  constructor(
    data: Record<string, any>,
    extra: { uuid: UUID | null; garden?: RequestData<SkyBlockGarden>; museum?: RequestData<SkyBlockMuseum> }
  ) {
    this.profileId = data?.profile_id ?? 'UNKNOWN';
    this.communityUpgrades = new SkyBlockProfileCommunityUpgrades(data?.community_upgrades ?? {});
    this.createdTimestamp = data?.created_at ? data.created_at : null;
    this.createdAt = this.createdTimestamp ? new Date(this.createdTimestamp) : null;
    const members = data?.members ?? {};
    this.members = Object.keys(members).map((uuid) => new SkyBlockMember(uuid, members?.[uuid] ?? {}));
    this.me = extra.uuid !== null ? (this.members.find((x) => x.uuid === extra.uuid) ?? null) : null;
    this.gameMode = data?.game_mode ?? null;
    this.banking = new SkyBlockProfileBanking(data?.banking ?? {});
    this.profileName = data?.cute_name ?? 'UNKNOWN';
    this.selected = data?.selected ?? false;
    this.garden = extra.garden ?? null;
    this.museum = extra.museum ?? null;
  }

  toString(): SkyBlockProfileName | 'UNKNOWN' {
    return this.profileName;
  }
}

export default SkyBlockProfile;
