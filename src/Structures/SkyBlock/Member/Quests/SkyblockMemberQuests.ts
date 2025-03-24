import SkyblockMemberQuestsHarp from './SkyblockMemberQuestsHarp.js';
import SkyblockMemberQuestsTrapper from './SkyblockMemeberQuestsTrapper.js';

class SkyblockMemberQuests {
  harp: SkyblockMemberQuestsHarp;
  trapper: SkyblockMemberQuestsTrapper;
  constructor(data: Record<string, any>) {
    this.harp = new SkyblockMemberQuestsHarp(data?.harp_quest || {});
    this.trapper = new SkyblockMemberQuestsTrapper(data?.trapper_quest || {});
  }
}

export default SkyblockMemberQuests;
