import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockFireSale from '../Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.js';
declare class getSkyBlockSkyBlockFireSales extends Endpoint {
    execute(options?: RequestOptions): Promise<WithRaw<SkyBlockFireSale[]> | RequestData>;
}
export default getSkyBlockSkyBlockFireSales;
//# sourceMappingURL=getSkyBlockFireSales.d.ts.map