class SkyBlockInventoryItemEnchantment {
    name;
    level;
    constructor(data) {
        this.name = data?.id || 'UNKNOWN';
        this.level = data?.lvl || 0;
    }
    toString() {
        return this.name;
    }
}
export default SkyBlockInventoryItemEnchantment;
//# sourceMappingURL=SkyBlockInventoryItemEnchantment.js.map