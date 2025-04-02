import SkyBlockMemberAccessoryBagTuningSlot from './SkyBlockMemberAccessoryBagTuningSlot.js';

class SkyBlockMemberAccessoryBagTuning {
  highestUnlockedSlot: number;
  slot1: SkyBlockMemberAccessoryBagTuningSlot;
  slot2: SkyBlockMemberAccessoryBagTuningSlot;
  slot3: SkyBlockMemberAccessoryBagTuningSlot;
  slot4: SkyBlockMemberAccessoryBagTuningSlot;
  slot5: SkyBlockMemberAccessoryBagTuningSlot;
  slot6: SkyBlockMemberAccessoryBagTuningSlot;
  slot7: SkyBlockMemberAccessoryBagTuningSlot;
  slot8: SkyBlockMemberAccessoryBagTuningSlot;
  constructor(data: Record<string, any>) {
    this.highestUnlockedSlot = data?.highest_unlocked_slot || 1;
    this.slot1 = new SkyBlockMemberAccessoryBagTuningSlot(data?.slot_0 || {}, Boolean(data?.slot_0));
    this.slot2 = new SkyBlockMemberAccessoryBagTuningSlot(data?.slot_1 || {}, Boolean(data?.slot_1));
    this.slot3 = new SkyBlockMemberAccessoryBagTuningSlot(data?.slot_2 || {}, Boolean(data?.slot_2));
    this.slot4 = new SkyBlockMemberAccessoryBagTuningSlot(data?.slot_3 || {}, Boolean(data?.slot_3));
    this.slot5 = new SkyBlockMemberAccessoryBagTuningSlot(data?.slot_4 || {}, Boolean(data?.slot_4));
    this.slot6 = new SkyBlockMemberAccessoryBagTuningSlot(data?.slot_5 || {}, Boolean(data?.slot_5));
    this.slot7 = new SkyBlockMemberAccessoryBagTuningSlot(data?.slot_6 || {}, Boolean(data?.slot_6));
    this.slot8 = new SkyBlockMemberAccessoryBagTuningSlot(data?.slot_7 || {}, Boolean(data?.slot_7));
  }

  toString(): number {
    return this.highestUnlockedSlot;
  }
}

export default SkyBlockMemberAccessoryBagTuning;
