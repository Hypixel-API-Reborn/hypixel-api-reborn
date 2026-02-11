class SkyBlockFireSale {
    itemId;
    startTimestamp;
    startAt;
    endTimestamp;
    endAt;
    amount;
    price;
    constructor(data) {
        this.itemId = data.item_id || 'UNKNOWN';
        this.startTimestamp = data.start || 0;
        this.startAt = new Date(this.startTimestamp);
        this.endTimestamp = data.end || 0;
        this.endAt = new Date(this.endTimestamp);
        this.amount = data.amount || 0;
        this.price = data.price || 0;
    }
    toString() {
        return this.itemId;
    }
    isRaw() {
        return false;
    }
}
export default SkyBlockFireSale;
//# sourceMappingURL=SkyBlockFireSale.js.map