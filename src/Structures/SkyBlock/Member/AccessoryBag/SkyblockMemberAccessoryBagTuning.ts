import SkyblockMemberAccessoryBagTuningSlot from './SkyblockMemberAccessoryBagTuningSlot.js';

class SkyblockMemberAccessoryBagTuning {
  highestUnlockedSlot: number;
  slot1: SkyblockMemberAccessoryBagTuningSlot;
  slot2: SkyblockMemberAccessoryBagTuningSlot;
  slot3: SkyblockMemberAccessoryBagTuningSlot;
  slot4: SkyblockMemberAccessoryBagTuningSlot;
  slot5: SkyblockMemberAccessoryBagTuningSlot;
  slot6: SkyblockMemberAccessoryBagTuningSlot;
  slot7: SkyblockMemberAccessoryBagTuningSlot;
  slot8: SkyblockMemberAccessoryBagTuningSlot;
  constructor(data: Record<string, any>) {
    this.highestUnlockedSlot = data?.highest_unlocked_slot || 1;
    this.slot1 = new SkyblockMemberAccessoryBagTuningSlot(data?.slot_0 || {}, Boolean(data?.slot_0));
    this.slot2 = new SkyblockMemberAccessoryBagTuningSlot(data?.slot_1 || {}, Boolean(data?.slot_1));
    this.slot3 = new SkyblockMemberAccessoryBagTuningSlot(data?.slot_2 || {}, Boolean(data?.slot_2));
    this.slot4 = new SkyblockMemberAccessoryBagTuningSlot(data?.slot_3 || {}, Boolean(data?.slot_3));
    this.slot5 = new SkyblockMemberAccessoryBagTuningSlot(data?.slot_4 || {}, Boolean(data?.slot_4));
    this.slot6 = new SkyblockMemberAccessoryBagTuningSlot(data?.slot_5 || {}, Boolean(data?.slot_5));
    this.slot7 = new SkyblockMemberAccessoryBagTuningSlot(data?.slot_6 || {}, Boolean(data?.slot_6));
    this.slot8 = new SkyblockMemberAccessoryBagTuningSlot(data?.slot_7 || {}, Boolean(data?.slot_7));
  }

  toString(): number {
    return this.highestUnlockedSlot;
  }
}

export default SkyblockMemberAccessoryBagTuning;
