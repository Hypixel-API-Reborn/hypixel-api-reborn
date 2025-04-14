import SkyBlockMemberQuestsHarp from './SkyBlockMemberQuestsHarp.js';
import SkyBlockMemberQuestsTrapper from './SkyBlockMemberQuestsTrapper.js';

class SkyBlockMemberQuests {
  harp: SkyBlockMemberQuestsHarp;
  trapper: SkyBlockMemberQuestsTrapper;
  constructor(data: Record<string, any>) {
    this.harp = new SkyBlockMemberQuestsHarp(data?.harp_quest || {});
    this.trapper = new SkyBlockMemberQuestsTrapper(data?.trapper_quest || {});
  }
}

export default SkyBlockMemberQuests;
