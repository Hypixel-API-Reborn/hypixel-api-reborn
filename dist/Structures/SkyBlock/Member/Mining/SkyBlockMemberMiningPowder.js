class SkyBlockMemberMiningPowder {
    spent;
    powder;
    total;
    constructor(data, type) {
        this.spent = data?.[`powder_spent_${type}`] || 0;
        this.powder = data?.[`powder_${type}`] || 0;
        this.total = this.spent + this.powder;
    }
    toString() {
        return this.total;
    }
}
export default SkyBlockMemberMiningPowder;
//# sourceMappingURL=SkyBlockMemberMiningPowder.js.map