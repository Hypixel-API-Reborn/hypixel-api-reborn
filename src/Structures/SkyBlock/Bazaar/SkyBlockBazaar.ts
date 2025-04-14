import SkyBlockBazaarProduct from './SkyBlockBazaarProduct.js';

class SkyBlockBazaar {
  lastUpdated: number;
  lastUpdatedAt: Date;
  products: SkyBlockBazaarProduct[];
  constructor(data: Record<string, any>) {
    this.lastUpdated = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdated);
    const products = data?.products || {};
    this.products = Object.keys(products).map((product) => new SkyBlockBazaarProduct(products[product]));
  }
}

export default SkyBlockBazaar;
