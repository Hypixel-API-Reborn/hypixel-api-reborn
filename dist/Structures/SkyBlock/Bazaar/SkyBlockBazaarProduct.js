import SkyBlockBazaarProductOrder from './SkyBlockBazaarProductOrder.js';
import SkyBlockBazaarQuickStatus from './SkyBlockBazaarQuickStatus.js';
class SkyBlockBazaarProduct {
    productId;
    sellSummary;
    buySummary;
    quickStatus;
    constructor(data) {
        this.productId = data?.product_id || 'UNKNOWN';
        this.sellSummary = (data?.sell_summary || []).map((summary) => new SkyBlockBazaarProductOrder(summary));
        this.buySummary = (data?.buy_summary || []).map((summary) => new SkyBlockBazaarProductOrder(summary));
        this.quickStatus = new SkyBlockBazaarQuickStatus(data?.quick_status || {});
    }
    toString() {
        return this.productId;
    }
}
export default SkyBlockBazaarProduct;
//# sourceMappingURL=SkyBlockBazaarProduct.js.map