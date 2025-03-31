import SkyblockBazaarProduct from './SkyblockBazaarProduct.js';

class SkyblockBazaar {
  lastUpdated: number;
  lastUpdatedAt: Date;
  products: SkyblockBazaarProduct[];
  constructor(data: Record<string, any>) {
    this.lastUpdated = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdated);
    const products = data?.products || {};
    this.products = Object.keys(products).map((product) => new SkyblockBazaarProduct(products[product]));
  }
}

export default SkyblockBazaar;
