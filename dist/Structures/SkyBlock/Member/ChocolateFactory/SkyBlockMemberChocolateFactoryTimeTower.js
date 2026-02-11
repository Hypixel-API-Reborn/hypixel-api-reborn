class SkyBlockMemberChocolateFactoryTimeTower {
    charges;
    level;
    activationTime;
    activationTimeDate;
    lastChargeTime;
    lastChargeTimeDate;
    constructor(data) {
        this.charges = data?.charges || 0;
        this.level = data?.level || 0;
        this.activationTime = data?.activation_time || 0;
        this.activationTimeDate = new Date(this.activationTime);
        this.lastChargeTime = data?.last_charge_time || 0;
        this.lastChargeTimeDate = new Date(this.lastChargeTime);
    }
    toString() {
        return this.level;
    }
}
export default SkyBlockMemberChocolateFactoryTimeTower;
//# sourceMappingURL=SkyBlockMemberChocolateFactoryTimeTower.js.map