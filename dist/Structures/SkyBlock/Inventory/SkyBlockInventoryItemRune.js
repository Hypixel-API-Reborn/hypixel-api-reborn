class SkyBlockInventoryItemRune {
    runeId;
    tier;
    constructor(data) {
        this.runeId = data?.id || 'UNKNOWN';
        this.tier = data?.tier || 0;
    }
    toString() {
        return this.runeId;
    }
}
export default SkyBlockInventoryItemRune;
//# sourceMappingURL=SkyBlockInventoryItemRune.js.map