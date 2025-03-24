class SkyblockMemberChocolateFactoryHitmen {
  rabbitHitmenSlots: number;
  missedUncollectedEggs: number;
  eggSlotCooldownMark: number;
  eggSlotCooldownMarkDate: Date;
  eggSlotCooldownExpire: number;
  eggSlotCooldownExpireDate: Date;
  constructor(data: Record<string, any>) {
    this.rabbitHitmenSlots = data?.rabbit_hitmen_slots || 0;
    this.missedUncollectedEggs = data?.missed_uncollected_eggs || 0;
    this.eggSlotCooldownMark = data?.egg_slot_cooldown_mark || 0;
    this.eggSlotCooldownMarkDate = new Date(this.eggSlotCooldownMark);
    this.eggSlotCooldownExpire = this.eggSlotCooldownMark + (data?.egg_slot_cooldown_sum || 0);
    this.eggSlotCooldownExpireDate = new Date(this.eggSlotCooldownExpire);
  }

  toString(): number {
    return this.rabbitHitmenSlots;
  }
}

export default SkyblockMemberChocolateFactoryHitmen;
