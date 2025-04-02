import SkyBlockMemberRiftGallerySecuredTrophy from './SkyBlockMemberRiftGallerySecuredTrophy.js';
import type { RiftGalleryTrophy } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberRiftGallery {
  eliseStep: number;
  securedTrophies: SkyBlockMemberRiftGallerySecuredTrophy[];
  sentTrophyDialogues: RiftGalleryTrophy[];
  constructor(data: Record<string, any>) {
    this.eliseStep = data?.elise_step || 0;
    this.securedTrophies = (data?.sent_trophy_dialogues || []).map((trophy: Record<string, any>) => {
      new SkyBlockMemberRiftGallerySecuredTrophy(trophy);
    });
    this.sentTrophyDialogues = data?.sent_trophy_dialogues || [];
  }
}

export default SkyBlockMemberRiftGallery;
