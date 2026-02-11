class SkyBlockMemberAccessoryBagTuningSlot {
    unlocked;
    purchasedTimestamp;
    purchasedDate;
    health;
    defense;
    walkSpeed;
    strength;
    criticalDamage;
    criticalChance;
    attackSpeed;
    intelligence;
    constructor(data, unlocked = false) {
        this.unlocked = unlocked;
        this.purchasedTimestamp = data?.purchase_ts || null;
        this.purchasedDate = this.purchasedTimestamp ? new Date(this.purchasedTimestamp) : null;
        this.health = data?.health || 0;
        this.defense = data?.defense || 0;
        this.walkSpeed = data?.walk_speed || 0;
        this.strength = data?.strength || 0;
        this.criticalDamage = data?.critical_damage || 0;
        this.criticalChance = data?.critical_chance || 0;
        this.attackSpeed = data?.attack_speed || 0;
        this.intelligence = data?.intelligence || 0;
    }
    toString() {
        return this.unlocked;
    }
}
export default SkyBlockMemberAccessoryBagTuningSlot;
//# sourceMappingURL=SkyBlockMemberAccessoryBagTuningSlot.js.map