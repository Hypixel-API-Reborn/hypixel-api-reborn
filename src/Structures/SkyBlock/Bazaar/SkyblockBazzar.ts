import SkyblockBazzarProduct from './SkyblockBazzarProduct.js';

class SkyblockBazzar {
  lastUpdated: number;
  lastUpdatedAt: Date;
  products: SkyblockBazzarProduct[];
  constructor(data: Record<string, any>) {
    this.lastUpdated = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdated);
    const products = data?.products || {};
    this.products = Object.keys(products).map((product) => new SkyblockBazzarProduct(products[product]));
  }
}

export default SkyblockBazzar;
