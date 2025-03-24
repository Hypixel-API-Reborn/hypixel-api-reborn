import SkyblockBazzarProductOrder from './SkyblockBazzarProductOrder.js';
import SkyblockBazzarQuickStatus from './SkyblockBazzarQuickStatus.js';
import type { BazzarProduct } from '../../../Types/Skyblock.js';

class SkyblockBazzarProduct {
  productId: BazzarProduct | 'UNKNOWN';
  sellSummary: SkyblockBazzarProductOrder[];
  buySummary: SkyblockBazzarProductOrder[];
  quickStatus: SkyblockBazzarQuickStatus;
  constructor(data: Record<string, any>) {
    this.productId = data?.product_id || 'UNKNOWN';
    this.sellSummary = (data?.sell_summary || []).map(
      (summary: Record<string, any>) => new SkyblockBazzarProductOrder(summary)
    );
    this.buySummary = (data?.buy_summary || []).map(
      (summary: Record<string, any>) => new SkyblockBazzarProductOrder(summary)
    );
    this.quickStatus = new SkyblockBazzarQuickStatus(data?.quick_status || {});
  }
}

export default SkyblockBazzarProduct;
