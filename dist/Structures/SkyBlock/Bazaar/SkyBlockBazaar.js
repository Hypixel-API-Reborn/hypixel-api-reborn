import SkyBlockBazaarProduct from './SkyBlockBazaarProduct.js';
class SkyBlockBazaar {
    lastUpdated;
    lastUpdatedAt;
    products;
    constructor(data) {
        this.lastUpdated = data?.lastUpdated || 0;
        this.lastUpdatedAt = new Date(this.lastUpdated);
        const products = data?.products || {};
        this.products = Object.keys(products).map((product) => new SkyBlockBazaarProduct(products[product]));
    }
    isRaw() {
        return false;
    }
}
export default SkyBlockBazaar;
//# sourceMappingURL=SkyBlockBazaar.js.map