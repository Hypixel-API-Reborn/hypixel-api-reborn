import type { RiftGalleryTrophy } from '../../../../Types/Skyblock.js';

class SkyblockMemberRiftGallerySecuredTrophy {
  type: RiftGalleryTrophy | 'UNKNOWN';
  timestamp: number;
  timestampAt: Date;
  visits: number;
  constructor(data: Record<string, any>) {
    this.type = data?.type || 0;
    this.timestamp = data?.timestamp || 0;
    this.timestampAt = new Date(this.timestamp);
    this.visits = data?.visits || 0;
  }
}

export default SkyblockMemberRiftGallerySecuredTrophy;
