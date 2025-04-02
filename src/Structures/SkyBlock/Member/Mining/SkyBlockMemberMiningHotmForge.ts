import SkyBlockMemberMiningHotmForgeItem from './SkyBlockMemberMiningHotmForgeItem.js';

class SkyBlockMemberMiningHotmForge {
  slot1: SkyBlockMemberMiningHotmForgeItem | null;
  slot2: SkyBlockMemberMiningHotmForgeItem | null;
  slot3: SkyBlockMemberMiningHotmForgeItem | null;
  slot4: SkyBlockMemberMiningHotmForgeItem | null;
  slot5: SkyBlockMemberMiningHotmForgeItem | null;
  slot6: SkyBlockMemberMiningHotmForgeItem | null;
  slot7: SkyBlockMemberMiningHotmForgeItem | null;
  constructor(data: Record<string, any>, quickForgeTime: number = 0) {
    this.slot1 = data?.['1'] ? new SkyBlockMemberMiningHotmForgeItem(data?.['1'], quickForgeTime) : null;
    this.slot2 = data?.['2'] ? new SkyBlockMemberMiningHotmForgeItem(data?.['2'], quickForgeTime) : null;
    this.slot3 = data?.['3'] ? new SkyBlockMemberMiningHotmForgeItem(data?.['3'], quickForgeTime) : null;
    this.slot4 = data?.['4'] ? new SkyBlockMemberMiningHotmForgeItem(data?.['4'], quickForgeTime) : null;
    this.slot5 = data?.['5'] ? new SkyBlockMemberMiningHotmForgeItem(data?.['5'], quickForgeTime) : null;
    this.slot6 = data?.['6'] ? new SkyBlockMemberMiningHotmForgeItem(data?.['6'], quickForgeTime) : null;
    this.slot7 = data?.['7'] ? new SkyBlockMemberMiningHotmForgeItem(data?.['7'], quickForgeTime) : null;
  }
}

export default SkyBlockMemberMiningHotmForge;
