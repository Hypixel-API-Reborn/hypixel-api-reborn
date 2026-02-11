class SkyBlockBazaarProductOrder {
    amount;
    pricePerUnit;
    orders;
    constructor(data) {
        this.amount = data?.amount || 0;
        this.pricePerUnit = data?.pricePerUnit || 0;
        this.orders = data?.orders || 0;
    }
    toString() {
        return this.amount;
    }
}
export default SkyBlockBazaarProductOrder;
//# sourceMappingURL=SkyBlockBazaarProductOrder.js.map