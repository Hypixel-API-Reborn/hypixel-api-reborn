class SkyBlockInventoryItemAttribute {
    id;
    tier;
    constructor(data) {
        this.id = data?.id || 'UNKNOWN';
        this.tier = data?.tier || 0;
    }
    toString() {
        return this.id;
    }
}
export default SkyBlockInventoryItemAttribute;
//# sourceMappingURL=SkyBlockInventoryItemAttribute.js.map