import SkyblockGarden from './SkyblockGarden.js';
import SkyblockMember from './SkyblockMember.js';

class SkyblockProfile {
  profileId: string;
  profileName: string;
  gameMode: string | null;
  banking: object;
  garden: SkyblockGarden | null;
  communityUpgrades: object;
  selected: boolean;
  members: SkyblockMember[];
  me: SkyblockMember | undefined;
  constructor(data: Record<string, any>) {
    this.profileId = data.profileId || '';
    this.profileName = data.profileName || '';
    this.gameMode = data.gameMode || null;
    this.banking = data.banking || {};
    this.garden = data.garden || null;
    this.communityUpgrades = data.communityUpgrades || {};
    this.selected = data.selected || false;
    this.members = Object.keys(data.members).map(
      (uuid) =>
        new SkyblockMember({
          uuid: uuid,
          profileId: this.profileId,
          garden: data.garden,
          museum: data.museum,
          profileName: this.profileName,
          gameMode: this.gameMode,
          m: data.members[uuid],
          banking: this.banking,
          communityUpgrades: this.communityUpgrades,
          selected: this.selected
        })
    );
    this.me = this.members.find((x) => x.uuid === data.uuid);
  }

  toString(): string {
    return this.profileName;
  }
}

export default SkyblockProfile;
