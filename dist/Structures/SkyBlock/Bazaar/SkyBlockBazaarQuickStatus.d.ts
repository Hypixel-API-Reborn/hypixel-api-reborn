import type { BazaarProduct } from '../../../Types/SkyBlock.js';
declare class SkyBlockBazaarQuickStatus {
    productId: BazaarProduct | 'UNKNOWN';
    sellPrice: number;
    sellVolume: number;
    sellMovingWeek: number;
    sellOrders: number;
    buyPrice: number;
    buyVolume: number;
    buyMovingWeek: number;
    buyOrders: number;
    constructor(data: Record<string, any>);
    toString(): BazaarProduct | 'UNKNOWN';
}
export default SkyBlockBazaarQuickStatus;
//# sourceMappingURL=SkyBlockBazaarQuickStatus.d.ts.map