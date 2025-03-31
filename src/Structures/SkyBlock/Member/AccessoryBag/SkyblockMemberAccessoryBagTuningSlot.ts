class SkyblockMemberAccessoryBagTuningSlot {
  unlocked: boolean;
  purchasedTimestamp: number | null;
  purchasedDate: Date | null;
  health: number;
  defense: number;
  walkSpeed: number;
  strength: number;
  criticalDamage: number;
  criticalChance: number;
  attackSpeed: number;
  intelligence: number;
  constructor(data: Record<string, any>, unlocked: boolean = false) {
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

  toString(): boolean {
    return this.unlocked;
  }
}

export default SkyblockMemberAccessoryBagTuningSlot;
