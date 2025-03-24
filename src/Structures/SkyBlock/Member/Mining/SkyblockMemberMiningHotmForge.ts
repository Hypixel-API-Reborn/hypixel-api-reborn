import SkyblockMemberMiningHotmForgeItem from './SkyblockMemberMiningHotmForgeItem.js';

class SkyblockMemberMiningHotmForge {
  slot1: SkyblockMemberMiningHotmForgeItem | null;
  slot2: SkyblockMemberMiningHotmForgeItem | null;
  slot3: SkyblockMemberMiningHotmForgeItem | null;
  slot4: SkyblockMemberMiningHotmForgeItem | null;
  slot5: SkyblockMemberMiningHotmForgeItem | null;
  slot6: SkyblockMemberMiningHotmForgeItem | null;
  slot7: SkyblockMemberMiningHotmForgeItem | null;
  constructor(data: Record<string, any>, quickForgeTime: number = 0) {
    this.slot1 = data?.['1'] ? new SkyblockMemberMiningHotmForgeItem(data?.['1'], quickForgeTime) : null;
    this.slot2 = data?.['2'] ? new SkyblockMemberMiningHotmForgeItem(data?.['2'], quickForgeTime) : null;
    this.slot3 = data?.['3'] ? new SkyblockMemberMiningHotmForgeItem(data?.['3'], quickForgeTime) : null;
    this.slot4 = data?.['4'] ? new SkyblockMemberMiningHotmForgeItem(data?.['4'], quickForgeTime) : null;
    this.slot5 = data?.['5'] ? new SkyblockMemberMiningHotmForgeItem(data?.['5'], quickForgeTime) : null;
    this.slot6 = data?.['6'] ? new SkyblockMemberMiningHotmForgeItem(data?.['6'], quickForgeTime) : null;
    this.slot7 = data?.['7'] ? new SkyblockMemberMiningHotmForgeItem(data?.['7'], quickForgeTime) : null;
  }
}

export default SkyblockMemberMiningHotmForge;
