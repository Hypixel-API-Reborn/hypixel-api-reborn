import SkyBlockMemberQuestsHarp from './SkyBlockMemberQuestsHarp.ts';
import SkyBlockMemberQuestsTrapper from './SkyBlockMemberQuestsTrapper.ts';

class SkyBlockMemberQuests {
  harp: SkyBlockMemberQuestsHarp;
  trapper: SkyBlockMemberQuestsTrapper;
  constructor(data: Record<string, any>, foragingHarp?: Record<string, any>) {
    this.harp = new SkyBlockMemberQuestsHarp(data?.harp_quest ?? foragingHarp ?? {});
    this.trapper = new SkyBlockMemberQuestsTrapper(data?.trapper_quest ?? {});
  }
}

export default SkyBlockMemberQuests;
