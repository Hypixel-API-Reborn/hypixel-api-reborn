import SkyblockBazaarProductOrder from './SkyblockBazaarProductOrder.js';
import SkyblockBazaarQuickStatus from './SkyblockBazaarQuickStatus.js';
import type { BazaarProduct } from '../../../Types/Skyblock.js';

class SkyblockBazaarProduct {
  productId: BazaarProduct | 'UNKNOWN';
  sellSummary: SkyblockBazaarProductOrder[];
  buySummary: SkyblockBazaarProductOrder[];
  quickStatus: SkyblockBazaarQuickStatus;
  constructor(data: Record<string, any>) {
    this.productId = data?.product_id || 'UNKNOWN';
    this.sellSummary = (data?.sell_summary || []).map(
      (summary: Record<string, any>) => new SkyblockBazaarProductOrder(summary)
    );
    this.buySummary = (data?.buy_summary || []).map(
      (summary: Record<string, any>) => new SkyblockBazaarProductOrder(summary)
    );
    this.quickStatus = new SkyblockBazaarQuickStatus(data?.quick_status || {});
  }

  toString(): BazaarProduct | 'UNKNOWN' {
    return this.productId;
  }
}

export default SkyblockBazaarProduct;
