import SkyblockMemberRiftGallerySecuredTrophy from './SkyblockMemberRiftGallerySecuredTrophy.js';
import type { RiftGalleryTrophy } from '../../../../Types/Skyblock.js';

class SkyblockMemberRiftGallery {
  eliseStep: number;
  securedTrophies: SkyblockMemberRiftGallerySecuredTrophy[];
  sentTrophyDialogues: RiftGalleryTrophy[];
  constructor(data: Record<string, any>) {
    this.eliseStep = data?.elise_step || 0;
    this.securedTrophies = (data?.sent_trophy_dialogues || []).map((trophy: Record<string, any>) => {
      new SkyblockMemberRiftGallerySecuredTrophy(trophy);
    });
    this.sentTrophyDialogues = data?.sent_trophy_dialogues || [];
  }
}

export default SkyblockMemberRiftGallery;
