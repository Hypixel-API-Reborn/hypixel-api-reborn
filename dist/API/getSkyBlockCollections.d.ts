import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockCollections from '../Structures/SkyBlock/Collections/SkyBlockCollections.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getSkyBlockCollections extends Endpoint {
    execute(options?: RequestOptions): Promise<SkyBlockCollections | RequestData>;
}
export default getSkyBlockCollections;
//# sourceMappingURL=getSkyBlockCollections.d.ts.map