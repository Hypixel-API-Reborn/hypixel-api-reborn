import SkyblockMuseumMember from './SkyblockMuseumMember.js';
import type { UUID } from '../../../Types/Global.js';

class SkyblockMuseum {
  members: Record<UUID, SkyblockMuseumMember>;
  constructor(data: Record<string, any>) {
    const members = data?.members || {};
    this.members = Object.keys(members).reduce((obj: Record<UUID, SkyblockMuseumMember>, key: UUID) => {
      obj[key] = new SkyblockMuseumMember(members?.[key] || {});
      return obj;
    }, {});
  }
}

export default SkyblockMuseum;
