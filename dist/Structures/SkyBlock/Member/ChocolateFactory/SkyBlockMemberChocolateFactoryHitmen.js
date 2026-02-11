class SkyBlockMemberChocolateFactoryHitmen {
    rabbitHitmenSlots;
    missedUncollectedEggs;
    eggSlotCooldownMark;
    eggSlotCooldownMarkDate;
    eggSlotCooldownExpire;
    eggSlotCooldownExpireDate;
    constructor(data) {
        this.rabbitHitmenSlots = data?.rabbit_hitmen_slots || 0;
        this.missedUncollectedEggs = data?.missed_uncollected_eggs || 0;
        this.eggSlotCooldownMark = data?.egg_slot_cooldown_mark || 0;
        this.eggSlotCooldownMarkDate = new Date(this.eggSlotCooldownMark);
        this.eggSlotCooldownExpire = this.eggSlotCooldownMark + (data?.egg_slot_cooldown_sum || 0);
        this.eggSlotCooldownExpireDate = new Date(this.eggSlotCooldownExpire);
    }
    toString() {
        return this.rabbitHitmenSlots;
    }
}
export default SkyBlockMemberChocolateFactoryHitmen;
//# sourceMappingURL=SkyBlockMemberChocolateFactoryHitmen.js.map