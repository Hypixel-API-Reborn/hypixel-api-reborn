class SkyBlockMemberFairySouls {
    exchanges;
    collected;
    unspent;
    constructor(data) {
        this.exchanges = data?.fairy_exchanges || 0;
        this.collected = data?.total_collected || 0;
        this.unspent = data?.unspent_souls || 0;
    }
    toString() {
        return this.collected;
    }
}
export default SkyBlockMemberFairySouls;
//# sourceMappingURL=SkyBlockMemberFairySouls.js.map