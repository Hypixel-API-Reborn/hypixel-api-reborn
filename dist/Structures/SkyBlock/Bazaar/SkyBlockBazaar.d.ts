import SkyBlockBazaarProduct from './SkyBlockBazaarProduct.js';
import type RequestData from '../../../Private/RequestData.js';
declare class SkyBlockBazaar {
    lastUpdated: number;
    lastUpdatedAt: Date;
    products: SkyBlockBazaarProduct[];
    constructor(data: Record<string, any>);
    isRaw(): this is RequestData;
}
export default SkyBlockBazaar;
//# sourceMappingURL=SkyBlockBazaar.d.ts.map