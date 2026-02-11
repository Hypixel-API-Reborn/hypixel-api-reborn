import SkyBlockBazaarProductOrder from './SkyBlockBazaarProductOrder.js';
import SkyBlockBazaarQuickStatus from './SkyBlockBazaarQuickStatus.js';
import type { BazaarProduct } from '../../../Types/SkyBlock.js';
declare class SkyBlockBazaarProduct {
    productId: BazaarProduct | 'UNKNOWN';
    sellSummary: SkyBlockBazaarProductOrder[];
    buySummary: SkyBlockBazaarProductOrder[];
    quickStatus: SkyBlockBazaarQuickStatus;
    constructor(data: Record<string, any>);
    toString(): BazaarProduct | 'UNKNOWN';
}
export default SkyBlockBazaarProduct;
//# sourceMappingURL=SkyBlockBazaarProduct.d.ts.map