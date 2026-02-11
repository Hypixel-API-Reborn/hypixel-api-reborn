import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockItem from '../Structures/SkyBlock/SkyBlockItem.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.js';
declare class getSkyBlockItems extends Endpoint {
    execute(options?: RequestOptions): Promise<WithRaw<SkyBlockItem[]> | RequestData>;
}
export default getSkyBlockItems;
//# sourceMappingURL=getSkyBlockItems.d.ts.map