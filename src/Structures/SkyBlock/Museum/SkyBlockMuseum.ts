import SkyBlockMuseumMember from './SkyBlockMuseumMember.js';
import type { UUID } from '../../../Types/Global.js';

class SkyBlockMuseum {
  members: Record<UUID, SkyBlockMuseumMember>;
  constructor(data: Record<string, any>) {
    const members = data?.members || {};
    this.members = Object.keys(members).reduce((obj: Record<UUID, SkyBlockMuseumMember>, key: UUID) => {
      obj[key] = new SkyBlockMuseumMember(members?.[key] || {});
      return obj;
    }, {});
  }
}

export default SkyBlockMuseum;
