import SkyBlockBazaarProductOrder from './SkyBlockBazaarProductOrder.js';
import SkyBlockBazaarQuickStatus from './SkyBlockBazaarQuickStatus.js';
import type { BazaarProduct } from '../../../Types/SkyBlock.js';

class SkyBlockBazaarProduct {
  productId: BazaarProduct | 'UNKNOWN';
  sellSummary: SkyBlockBazaarProductOrder[];
  buySummary: SkyBlockBazaarProductOrder[];
  quickStatus: SkyBlockBazaarQuickStatus;
  constructor(data: Record<string, any>) {
    this.productId = data?.product_id || 'UNKNOWN';
    this.sellSummary = (data?.sell_summary || []).map(
      (summary: Record<string, any>) => new SkyBlockBazaarProductOrder(summary)
    );
    this.buySummary = (data?.buy_summary || []).map(
      (summary: Record<string, any>) => new SkyBlockBazaarProductOrder(summary)
    );
    this.quickStatus = new SkyBlockBazaarQuickStatus(data?.quick_status || {});
  }

  toString(): BazaarProduct | 'UNKNOWN' {
    return this.productId;
  }
}

export default SkyBlockBazaarProduct;
