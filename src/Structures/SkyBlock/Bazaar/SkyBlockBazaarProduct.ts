import SkyBlockBazaarProductOrder from './SkyBlockBazaarProductOrder.ts';
import SkyBlockBazaarQuickStatus from './SkyBlockBazaarQuickStatus.ts';
import type { BazaarProduct } from '../../../Types/index.ts';

class SkyBlockBazaarProduct {
  productId: BazaarProduct | 'UNKNOWN';
  sellSummary: SkyBlockBazaarProductOrder[];
  buySummary: SkyBlockBazaarProductOrder[];
  quickStatus: SkyBlockBazaarQuickStatus;
  constructor(data: Record<string, any>) {
    this.productId = data?.product_id ?? 'UNKNOWN';
    this.sellSummary = (data?.sell_summary ?? []).map(
      (summary: Record<string, any>) => new SkyBlockBazaarProductOrder(summary)
    );
    this.buySummary = (data?.buy_summary ?? []).map(
      (summary: Record<string, any>) => new SkyBlockBazaarProductOrder(summary)
    );
    this.quickStatus = new SkyBlockBazaarQuickStatus(data?.quick_status ?? {});
  }

  toString(): BazaarProduct | 'UNKNOWN' {
    return this.productId;
  }
}

export default SkyBlockBazaarProduct;
