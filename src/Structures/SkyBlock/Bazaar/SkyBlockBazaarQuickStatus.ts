import type { BazaarProduct } from '../../../Types/SkyBlock.js';

class SkyBlockBazaarQuickStatus {
  productId: BazaarProduct | 'UNKNOWN';
  sellPrice: number;
  sellVolume: number;
  sellMovingWeek: number;
  sellOrders: number;
  buyPrice: number;
  buyVolume: number;
  buyMovingWeek: number;
  buyOrders: number;
  constructor(data: Record<string, any>) {
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

  toString(): BazaarProduct | 'UNKNOWN' {
    return this.productId;
  }
}

export default SkyBlockBazaarQuickStatus;
