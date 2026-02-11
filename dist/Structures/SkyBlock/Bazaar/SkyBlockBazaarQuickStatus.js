class SkyBlockBazaarQuickStatus {
    productId;
    sellPrice;
    sellVolume;
    sellMovingWeek;
    sellOrders;
    buyPrice;
    buyVolume;
    buyMovingWeek;
    buyOrders;
    constructor(data) {
        this.productId = data?.productId || 'UNKNOWN';
        this.sellPrice = data?.sellPrice || 0;
        this.sellVolume = data?.sellVolume || 0;
        this.sellMovingWeek = data?.sellMovingWeek || 0;
        this.sellOrders = data?.sellOrders || 0;
        this.buyPrice = data?.buyPrice || 0;
        this.buyVolume = data?.buyVolume || 0;
        this.buyMovingWeek = data?.buyMovingWeek || 0;
        this.buyOrders = data?.buyOrders || 0;
    }
    toString() {
        return this.productId;
    }
}
export default SkyBlockBazaarQuickStatus;
//# sourceMappingURL=SkyBlockBazaarQuickStatus.js.map