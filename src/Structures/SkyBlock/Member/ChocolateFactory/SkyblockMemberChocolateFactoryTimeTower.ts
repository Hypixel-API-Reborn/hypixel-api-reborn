class SkyblockMemberChocolateFactoryTimeTower {
  charges: number;
  level: number;
  activationTime: number;
  activationTimeDate: Date;
  lastChargeTime: number;
  lastChargeTimeDate: Date;
  constructor(data: Record<string, any>) {
    this.charges = data?.charges || 0;
    this.level = data?.level || 0;
    this.activationTime = data?.activation_time || 0;
    this.activationTimeDate = new Date(this.activationTime);
    this.lastChargeTime = data?.last_charge_time || 0;
    this.lastChargeTimeDate = new Date(this.lastChargeTime);
  }

  toString(): number {
    return this.level;
  }
}

export default SkyblockMemberChocolateFactoryTimeTower;
