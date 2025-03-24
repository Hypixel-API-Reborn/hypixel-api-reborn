import type { RiftGalleryTrophy } from '../../../../Types/Skyblock.js';

class SkyblockMemberRiftGallery {
  eliseStep: number;
  securedTrophies: { type: RiftGalleryTrophy | 'UNKNOWN'; timestamp: number; timestampAt: Date; visits: number }[];
  sentTrophyDialogues: RiftGalleryTrophy[];
  constructor(data: Record<string, any>) {
    this.eliseStep = data?.elise_step || 0;
    this.securedTrophies = (data?.sent_trophy_dialogues || []).map(
      (trophy: { type: RiftGalleryTrophy | 'UNKNOWN'; timestamp: number; visits: number }) => {
        return { ...trophy, timestampAt: new Date(trophy.timestamp) };
      }
    );
    this.sentTrophyDialogues = data?.sent_trophy_dialogues || [];
  }
}

export default SkyblockMemberRiftGallery;
